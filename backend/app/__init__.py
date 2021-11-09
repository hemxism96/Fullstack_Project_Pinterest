from flask import Flask, jsonify
from sqlalchemy import create_engine
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config.from_pyfile('config.py')

    database = create_engine(app.config['DB_URL'], encoding = 'utf-8')
    app.database = database

    from .views import views
    from .auth import auth

    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')
    
    return app

