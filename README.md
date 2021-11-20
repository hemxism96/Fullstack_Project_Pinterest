# Find Your Interest - Fullstack Project

This project is a fullstack application where we had to do backend and frontend with two different technologies.
We chose to use Flask for backend with MongoDB for the database and we used React for the frontend.

The site is close to Pinterest. We first have to sign up to create an account, then we can login. 
Having an account mean we can save a any photo on the page and add it to our favorite photos that we can access in our page.

## User Guide
<pre>
<code>
$ git clone https://github.com/hemxism96/Fullstack_Project_Pinterest
</code>
</pre>

#### Docker
<pre>
<code>
$ docker-compose up -d
</code>
</pre>



#### Home Page
This is the home page with various random image taken from the free API Unsplash
<img width="1309" alt="스크린샷 2021-11-20 00 06 04" src="https://user-images.githubusercontent.com/48878905/142702776-a75ad9f0-fa47-4bbf-8139-4fca416c0dbc.png">

#### Database Page
This is our database page
<img width="1309" alt="스크린샷 2021-11-20 00 06 04" src="https://user-images.githubusercontent.com/56486266/142705395-6cdce6a0-d532-425a-a0d2-9102c6f9cff4.jpg">

#### Add pins page
This is a page where you can upload your own images
<img width="1309" alt="스크린샷 2021-11-20 00 06 05" src="https://user-images.githubusercontent.com/56486266/142707652-1e1fd0dd-59d7-4285-95d6-ddc6d4e01c63.PNG">

<img width="1309" alt="스크린샷 2021-11-20 00 06 06" src="https://user-images.githubusercontent.com/56486266/142707743-f411da90-5c76-4268-9637-db101d7573eb.PNG">

#### Signup Page
You have to create an id, a paswword, to give your name and give your email
<img width="1105" alt="스크린샷 2021-11-20 00 08 05" src="https://user-images.githubusercontent.com/48878905/142702710-2f3b67de-dd2f-4491-bd51-9859a6df5f73.png">

#### Login Page
You connect by using your id and your password. If you didn't create an account yet, click on Register now.
<img width="1126" alt="스크린샷 2021-11-20 00 07 42" src="https://user-images.githubusercontent.com/48878905/142702741-677ea52f-daa8-4247-bb12-526f69809c44.png">

#### Favorite Page
You can visualize your favorite photo here, aswell as your email, your id and button to logout.
<img width="1096" alt="스크린샷 2021-11-20 00 09 22" src="https://user-images.githubusercontent.com/48878905/142702685-02927260-d016-45f5-955f-744e2726b624.png">

#### Improvements
-We would have liked to add more than one favorite photo
-Connect the add pins Page to the mongoDB
-Make search bar work properly (right now it does a new query every time you try to type a term but the images are kind of random)
-add keycloak and kong
