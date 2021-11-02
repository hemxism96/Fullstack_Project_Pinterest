from flask import Blueprint, render_template, request, jsonify, Response
import time

views = Blueprint('views', __name__)

@views.route("/api")
def index():
    return Response(mimetype="application/json", status=200)