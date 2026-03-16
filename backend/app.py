import os
from flask import Flask
from flask_cors import CORS
from routes import register_routes

app = Flask(__name__)

# CORS para comunicar com o frontend
CORS(app)

register_routes(app)

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=False, host='0.0.0.0', port=port)