from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Talent(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100))
    area = db.Column(db.String(100))
    skills = db.Column(db.Text)