from flask             import jsonify, request
from models            import Talent, db
from datetime          import datetime
from werkzeug.security import generate_password_hash, check_password_hash

def register_routes(app):

    @app.route("/api/talents")
    def get_SQs():

        talents = Talent.query.all()

        data = []
        for t in talents:

            data.append({
                "name"  : t.name,
                "area"  : t.area,
                "skills": t.skills
            })

        return jsonify(data)

    @app.route("/api/auth/signup", methods=["POST"])
    def signup():

        try:

            data = request.get_json()
            
            # Validação dos campos obrigatórios
            required_fields = ['name', 'email', 'password', 'birth_date', 'terms_accepted']
            if not all(field in data for field in required_fields):

                return jsonify({'error': 'Campos obrigatórios faltando'}), 400
            
            # Verificar se email já existe
            existing_user = Talent.query.filter_by(email=data['email']).first()
            if existing_user:

                return jsonify({'error': 'Email já cadastrado'}), 400
            
            # Validar se os termos foram aceitos
            if not data.get('terms_accepted'):

                return jsonify({'error': 'Você deve aceitar os termos'}), 400
            
            # Criar novo usuário
            hashed_password = generate_password_hash(data['password'])
            
            new_user = Talent(

                name           = data['name'],
                email          = data['email'],
                password       = hashed_password,
                birth_date     = datetime.strptime(data['birth_date'], '%Y-%m-%d').date(),
                terms_accepted = True
            )
            
            db.session.add(new_user)
            db.session.commit()
            
            return jsonify({

                'message'  : 'Usuário criado com sucesso',
                'user'     : {
                    'id'   : new_user.id,
                    'name' : new_user.name,
                    'email': new_user.email
                }
            }), 201
            
        except Exception as e:

            db.session.rollback()
            return jsonify({'error': str(e)}), 500

    @app.route("/api/auth/login", methods=["POST"])
    def login():

        try:

            data = request.get_json()
            
            # Validação dos campos
            if not data.get('email') or not data.get('password'):

                return jsonify({'error': 'Email e senha são obrigatórios'}), 400
            
            # Procurar usuário
            user = Talent.query.filter_by(email=data['email']).first()
            
            if not user or not check_password_hash(user.password, data['password']):
                
                return jsonify({'error': 'Email ou senha inválidos'}), 401
            
            return jsonify({
                'message'  : 'Login realizado com sucesso',
                'token'    : f'user-{user.id}',
                'user'     : {
                    'id'   : user.id,
                    'name' : user.name,
                    'email': user.email
                }
            }), 200
            
        except Exception as e:

            return jsonify({'error': str(e)}), 500

    @app.route("/api/auth/profile", methods=["GET"])
    def get_profile():

        try:

            auth_header = request.headers.get('Authorization')

            if not auth_header or not auth_header.startswith('Bearer '):

                return jsonify({'error': 'Token não fornecido'}), 401

            token = auth_header.split(' ')[1]

            # Extrai o user_id do token (formato: user-{id})
            if not token.startswith('user-'):

                return jsonify({'error': 'Token inválido'}), 401

            try:
                user_id = int(token.split('-')[1])
            except (IndexError, ValueError):

                return jsonify({'error': 'Token inválido'}), 401

            # Buscar usuário
            user = Talent.query.get(user_id)

            if not user:

                return jsonify({'error': 'Usuário não encontrado'}), 404

            return jsonify({
                'id'    : user.id,
                'name'  : user.name,
                'email' : user.email,
                'avatar': f'https://i.pravatar.cc/150?img={user.id % 70}'
            }), 200

        except Exception as e:

            return jsonify({'error': str(e)}), 500