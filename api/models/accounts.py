from pydantic import BaseModel
from jwtdown_fastapi.authentication import Token


class AccountIn(BaseModel):
    first_name: str
    last_name: str
    zip_code: str
    email: str
    hashed_password: str


class AccountOut(BaseModel):
    id: int
    email: str
    first_name: str
    last_name: str
    zip_code: str


class AccountOutWithPassword(AccountOut):
    hashed_password: str


class AccountForm(BaseModel):
    username: str
    password: str


class HttpError(BaseModel):
    detail: str


class AccountToken(Token):
    account: AccountOut


class DuplicateAccountError(ValueError):
    pass
