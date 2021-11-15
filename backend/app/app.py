from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

from .views import views
from .auth import auth

app.register_blueprint(views, url_prefix='/')
app.register_blueprint(auth, url_prefix='/')
