from pydantic import BaseModel


class PersonalDetails(BaseModel):
    name: str
    lastName:str
    email: str
    address:str
    bio:str


class Skill(BaseModel):
    name: str


class Experience(BaseModel):
    position: str
    company: str
    summary: str
    duration: str


class Education(BaseModel):
    university: str
    degree: str
    disciplane: str
    gpa: str
    duration:str