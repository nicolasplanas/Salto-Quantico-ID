from datetime         import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Talent(db.Model):

    id             = db.Column(db.Integer, primary_key=True)
    name           = db.Column(db.String(100), nullable=False)
    email          = db.Column(db.String(100), nullable=False, unique=True)
    password       = db.Column(db.String(255), nullable=False)
    birth_date     = db.Column(db.Date)
    area           = db.Column(db.String(100))
    skills         = db.Column(db.Text)
    avatar_url     = db.Column(db.String(500))
    terms_accepted = db.Column(db.Boolean, default=False)
    created_at     = db.Column(db.DateTime, default=datetime.utcnow)