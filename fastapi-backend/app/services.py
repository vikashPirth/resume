from typing import List
from app.models import PersonalDetails, Experience, Education

class ProfileService:
    
    @staticmethod
    def get_personal_details() -> PersonalDetails:
        return PersonalDetails(
            name="Vikash",
            lastName="Prithiani",
            email="vikash.pirthiani@gmail.com",
            address="Darmstadt Germany",
            bio="I am a passionate, analytical and smart software developer. So far I have learned that a positive attitude is the key to achieving anything in software development."
        )
    
    @staticmethod
    def get_experience() -> List[Experience]:
        return[
           Experience(
               position="Backend Software Developer",
               company="Spectral Engines GmbH",
               summary="""
                - Managed microservices using API Gateway to streamline the creation and maintenance of various services.
                - Led the development of a subscription microservice from conception to deployment, significantly enhancing user engagement and strategies.
                - Collaborated with data scientists and frontend developers to integrate machine learning models and sensor data into mobile applications, ensuring seamless functionality and user experience.
                - Implemented Docker and Kubernetes to achieve efficient service deployment and scaling, optimizing resource usage and operational efficiency.
                - Leveraged AWS solutions to ensure high availability and reliability of services, enhancing the overall system performance and resilience.
                """,
                duration="June 2023 - September2024"
            ),
            Experience(
               position="Software Developer",
               company="axxessio GmbH",
               summary="""
                - Technical lead of the Daily Skills Team in Telekom's Voice program.
                - Collecting technical requirements and coordinating with stakeholders.
                - Developing, maintaining, and providing skills for the smart speaker.
                - Integrating other services into the skills.
                - Inducting new team members into the team.
                - Contributing to the open source SDK (https://github.com/vikashPirth/voice-skill-sdk).
                """,
                duration="February 2018 - May 2023"
            )
        ] 

    @staticmethod
    def get_education() -> List[Education]:
        return[
           Education(
               university="Fachhochschule Kiel",
               degree="Master of Science",
               disciplane="Information Technology",
               gpa="2.7",
               duration="Marach 2015 - February 2018"
            ),
           Education(
               university="National University of Computer & Emerging Sciences",
               degree="Bachelor of Science",
               disciplane="Telecommunication",
               gpa="3.26",
               duration="August 2007 - July 2011"
            )
        ]