from typing import List, Dict
from flask import Flask
from mysql import connector
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

if __name__ == '__main__':
    app.run(host='0.0.0.0')