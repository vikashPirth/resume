from fastapi import APIRouter
from typing import List
from app.models import PersonalDetails, Skill, Experience
from app.services import ProfileService

router = APIRouter()


@router.get("/personal-details", response_model=PersonalDetails)
def get_personal_details():
    return ProfileService.get_personal_details()


@router.get("/skills", response_model=List[Skill])
def get_skills():
    return ProfileService.get_skills()


@router.get("/experience", response_model=List[Experience])
def get_experience():
    return ProfileService.get_experience()
