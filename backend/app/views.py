from flask import Blueprint, request, jsonify, Response, flash, redirect, url_for
from sqlalchemy import text
from .app import userCollection,imageCollection
from flask import session

import json

views = Blueprint('views', __name__)

@views.route("/api")
def index():
    #tmp = {'session':'','userid':'','username':'','useremail':''}
    if session.get('userid'):
        user = userCollection.find_one({'userid':session['userid']})
        tmp = {'session':'user','userid':user['userid'],'username':user['username'],'useremail':user['useremail']}
        return jsonify(tmp)
    else:
        tmp = {'session':''}
        return jsonify(tmp)

@views.route("/api2")
def index_test():
    res = list(imageCollection.find())
    for i in range(len(res)):
        res[i]['value'] = "data:image/png;base64,"+res[i]['value'].decode()
    return json.dumps(res, default=str)

@views.route("/api/mypage")
def user_index():
    user = userCollection.find_one({'userid':session['userid']})
    return jsonify({'userid':user['userid'],'username':user['username'],'useremail':user['useremail']})
    
@views.route('/about')
def test_response():
    return jsonify({'jack': 4098, 'sape': 4139})

@views.route("/api/image")
def FYI_index():
    res = list(imageCollection.find())
    for i in range(len(res)):
        res[i]['value'] = "data:image/png;base64,"+res[i]['value'].decode()
    return json.dumps(res, default=str)

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
            return redirect('/')
        else: return "There's no user correspond with this id and password"
    else:
        return redirect('/',404)

@views.route('/api/logout', methods=['GET','POST'])
def logout():
	session.pop('userid', None)
	return redirect('/')

@views.route("/api/upload", methods=['GET','POST'])
def upload():
    if request.method == "POST":
        image = request.form.get('upload_img')
        title = request.form.get('pin_title')
        description = request.form.get('pin_description')

        if not (image and title and description):
            return 'Type everything'
        else:
            imageCollection.insert_one({'image':image, 'title':title, 'description':description})
            return redirect(url_for('views.index'))
    else:
        return redirect(url_for('views.index'),404)