from fastapi import APIRouter, Request, Response, Depends, status, HTTPException
from models.accounts import (
    AccountIn,
    AccountOut,
    AccountForm,
    AccountToken,
    DuplicateAccountError
)
from models.accounts import HttpError  # noqa:F401
from queries.accounts import AccountQueries
from authenticator import authenticator
import traceback  # noqa:F401

router = APIRouter()


@router.post("/api/accounts")
async def create_account(
    info: AccountIn,
    request: Request,
    response: Response,
    accounts: AccountQueries = Depends()
):
    hashed_password = authenticator.hash_password(info.hashed_password)

    try:

        account = accounts.create(info, hashed_password)

    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="Cannot create that account with that identifier."
        )
    form = AccountForm(username=account.email, password=account.hashed_password)
    token = await authenticator.login(response, request, form, accounts)
    return AccountToken(account=account, **token.dict())


@router.get("/token", response_model=AccountToken | None)
async def get_token(
    request: Request,
    account: AccountOut = Depends(authenticator.try_get_current_account_data)
) -> AccountToken | None:
    if account and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }
