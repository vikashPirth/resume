from pydantic import BaseModel


class PersonalDetails(BaseModel):
    name: str
    email: str


class Skill(BaseModel):
    name: str


class Experience(BaseModel):
    position: str
    company: str 
    duration: str
