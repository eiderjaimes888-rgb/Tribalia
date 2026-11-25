from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine, Base
from app.api import payments

# Auto-create tables (for initial local development, production uses Alembic migrations)
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="JB Consulting & Co SAS - JBEleva Platform API",
    description="Base transactional backend supporting editorial news, corporate magazine uploads, and automated Eleva software license sales.",
    version="1.0.0"
)

# Enable CORS for external portal or frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(payments.router, prefix="/api/v1")

@app.get("/")
def read_root():
    return {
        "status": "online",
        "service": "JBEleva Core Platform API",
        "documentation": "/docs"
    }
