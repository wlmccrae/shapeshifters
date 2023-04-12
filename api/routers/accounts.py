from fastapi import APIRouter, Request, Response, Depends, status, HTTPException
from models.accounts import AccountIn, AccountOut, AccountForm, HttpError, AccountToken, DuplicateAccountError
from queries.accounts import AccountQueries
from authenticator import authenticator

router = APIRouter()


@router.post("/api/accounts")
async def create_account(
    info: AccountIn,
    request: Request,
    response: Response,
    accounts: AccountQueries = Depends()
):
    print("info*******:", info)
    hashed_password = authenticator.hash_password(info.hashed_password)
    print("hashed_pw:*******", hashed_password)
    try:

        account = accounts.create(info, hashed_password)
        print("ACCOUNT************:", account)

    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="Cannot create that account with that identifier."
        )
    form = AccountForm(username=account.email, password=account.hashed_password)
    print("FORM:*******************", form)
    token = await authenticator.login(response, request, form, accounts)
    return AccountToken(account=account, **token.dict())

@router.get("/token", response_model=AccountToken | None)
async def get_token(
    request: Request,
    account: AccountOut = Depends(authenticator.try_get_current_account_data)
) -> AccountToken | None:
    print("AUTHENTICATOR COOKIE:", authenticator.cookie_name)
    print("ACCOUNT IN GET_TOKEN:", account)
    if account and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }
