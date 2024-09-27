from typing import List
from app.models import PersonalDetails, Skill, Experience

class ProfileService:
    
    @staticmethod
    def get_personal_details() -> PersonalDetails:
        return PersonalDetails(
            name="Vikash",
            lastName="Prithian",
            email="vikash.pirthiani@gmail.com",
            address="Darmstadt Germany",
            bio="I am a passionate, analytical and smart software developer. So far I have learned that a positive attitude is the key to achieving anything in software development."
        )
    
    @staticmethod
    def get_skills() -> List[Skill]:
        return [
            Skill(name="Python"),
            Skill(name="Docker"),
            Skill(name="Kubernetes"),
            Skill(name="Fast Api")
        ]
    
    @staticmethod
    def get_experience() -> List[Experience]:
        return[
            Experience(position="Backend Developer", company="Spectral engines GmbH", duration="1 Year"),
            Experience(position="Backend Developer", company="axxessio GmbH", duration="5 years"),
        ] 