from flask import Blueprint, render_template


views = Blueprint('views', __name__)

@views.route('/')
def home():
    #return "<h1> HELLO WORLD!!!!!</h1>"
    return render_template("index.html", flask_token="Hello world")

@views.route('/hello')
def hello():
    return "<h1> HELLO WORLD2!!!!!</h1>"