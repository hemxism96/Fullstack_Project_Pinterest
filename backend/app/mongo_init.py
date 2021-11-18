from app.app import imageCollection, userCollection

userCollection.insert_one({ 'userid' : 'root', 'userpw' : 'root', 'username':'root', 'useremail':'root'})

import base64
from urllib import request

images = [
    "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1isF/image/4fL_fEBef57BeRlBmX06dV41X6g.jpg",
    "http://kid.chosun.com/site/data/img_dir/2019/01/01/2019010101042_0.jpg",
    "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201701/26/htm_20170126152710491146.jpg",
    "https://t1.daumcdn.net/liveboard/fanzeel/2ae537d1d5574377aed88cf5551d764a.JPG",
    "https://dimg.donga.com/wps/NEWS/IMAGE/2020/05/09/100969202.1.jpg"
]

for url in images:
    image = request.urlopen(url).read()
    image = base64.b64encode(image)
    #imageCollection.insert_one({'value' : image})