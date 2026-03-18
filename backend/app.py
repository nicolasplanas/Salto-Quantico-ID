import os
from flask import Flask
from flask_cors import CORS
from models import db
from routes import register_routes

app = Flask(__name__)

# Configuração do SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'sqlite:///salto_quantico.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Inicializar SQLAlchemy
db.init_app(app)

# CORS para comunicar com o frontend
CORS(app)

# Criar tabelas se não existirem
with app.app_context():
    db.create_all()

register_routes(app)

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=False, host='0.0.0.0', port=port)