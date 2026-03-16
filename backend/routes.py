from flask import jsonify
from models import Talent

def register_routes(app):

    @app.route("/api/talents")
    def get_SQs():
        talents = Talent.query.all()

        data = []
        for t in talents:
            data.append({
                "name": t.name,
                "area": t.area,
                "skills": t.skills
            })

        return jsonify(data)