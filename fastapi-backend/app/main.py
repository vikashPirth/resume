from fastapi import FastAPI
app = FastAPI()

@app.post("/submit_contact/")
def submit_contact(name: str, email: str, message: str):
    # Handle contact form logic (e.g., send email)
    return {"status": "Message received!"}