from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient 
from .config import config_by_name

app = Flask(__name__)

CORS(app)
app.secret_key = 'super secret key'

client = MongoClient('mongodb://mongo:27017/') 
db = client.newDB  
userCollection = db.user
imageCollection = db.image

from .mongo_init import *

from .views import views
from .auth import auth

app.register_blueprint(views, url_prefix='/')
app.register_blueprint(auth, url_prefix='/')
