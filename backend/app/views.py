from flask import Blueprint, render_template, request, jsonify, Response, make_response
from sqlalchemy import text
import json

views = Blueprint('views', __name__)

@views.route("/api/sign-up", methods = ['POST'])
def sign_up():
        user = request.json
        user_id = views.database.execute(text("""
                                            INSERT INTO users (
                                            email,
                                            password
                                           ) VALUES (
                                            :email,
                                            :password
                                           )
                                            """), user).lastrowid

        return "", 200

@views.route('/test')
def tes():
    return "<h1> HELLO WORLD2!!!!!</h1>"

@views.route("/")
def index():
    return Response(mimetype="application/json", status=200)

@views.route('/about')
def test_response():
    return jsonify({'jack': 4098, 'sape': 4139})

@views.route('/api/about')
def health():
    tmp = {'hits':[{'one': 4098, 'two': 4139}]}
    return tmp

