from fastapi import APIRouter
from typing import List
from app.models import PersonalDetails, Experience, Education
from app.services import ProfileService

router = APIRouter()


@router.get("/personal-details", response_model=PersonalDetails)
def get_personal_details():
    return ProfileService.get_personal_details()


@router.get("/experience", response_model=List[Experience])
def get_experience():
    return ProfileService.get_experience()


@router.get("/education", response_model=List[Education])
def get_experience():
    return ProfileService.get_education()
