from flask import Blueprint, request, jsonify, Response, flash, redirect, url_for
from sqlalchemy import text
from .app import userCollection
from flask import session

import json

views = Blueprint('views', __name__)

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

@views.route("/api/test")
def test():
    res = userCollection.find()
    return json.dumps(list(res), default=str)

@views.route('/api/subscribe', methods=['GET','POST'])
def register():
    if request.method =='GET':
        return redirect('/api/subscribe')
    else:
        id = request.form.get('loginId')
        pw = request.form.get('loginPw')
        pwc = request.form.get('loginPwConfirm')
        name = request.form.get('name')
        email = request.form.get('email')

        if not (id and pw and pwc and name and email):
            return 'Type everything'
        elif pw!=pwc:
            return 'Check password'
        elif userCollection.find_one({'userid':id}):
            return 'Already exist'
        else:
            tmp = {'userid':id, 'userpw':pw, 'username':name, 'useremail':email}
            userCollection.insert_one(tmp)
            return 'Succeed'

@views.route("/api/login", methods=['GET','POST'])
def login():
    if request.method == "POST":
        id = request.form.get('id')
        pw = request.form.get('password')

        data = userCollection.find_one({'userid':id},{'userpw':pw})
        if data is not None:
            session['userid'] = id
            return redirect('/', code=302)
        else: 
            return redirect(url_for('views.route'))
    else:
        return redirect(url_for('/'),404)

@views.route('/logout', methods=['GET'])
def logout():
	session.pop('userid', None)
	return redirect('/')
