import datetime
from ..app import userCollection
from mongoengine import *

class User(Document):
    userid = StringField(unique=True, required=True)
    userpw = StringField(required=True)
    username = StringField(required=True)
    useremail = StringField(required=True)
    created_at = DateTimeField(default=datetime.datetime.now())

    def __repr__(self):
        return "<User '{}'>".format(self.userid)