from flask import Blueprint

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return "<h1> HELLO WORLD!!!!!</h1>"
