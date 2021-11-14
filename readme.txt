Joke + punchline app

Consists of Frontend and Backend
The following app is fully responsive and should work on all devices.

Created using React.js in frontend and Node.js in the backend.
All joke data is stored in Mongo Database online.

In order to run the app either use the link provided below or follow the instructions listed below.
You will need visual studio code to run the following application on your Windows/Mac machine.
https://code.visualstudio.com/

Live app link: https://jokes-page.netlify.app/

-------------------- Application technical structure -------------------

Backend:
1. Change directory on y our VSC using the terminal to 2_backend.
2. Type command "npm install" to install required not modules.
3. Type "npm run nodemon" to start backend.
4. You can use your personal Database to store information adjusting .env file.

Frontend:
1. Change the directory on your VSC using the terminal to 1_frontend.
2. Type command "npm install" which will install required node modules.
3. Type "npm start" to start the application
4. If the application doesn't automatically open your web browser. Open a new tab on the selected browser
and type the following address: http://localhost:3000/

-------------------- Application visual stucture and usage -------------------

Consists of 5 pages (you can navigate using the navbar on top of the page)

1. Home
2. All Jokes
3. Post a Joke
4. Filter Jokes
5. Single Joke

-- Homepage
Hero text
no functionality

-- All Jokes
Click the "Show me all jokes" button to see all jokes and punchlines listed below.

-- Post a Joke
Fill out the form with a new JOKE, PUNCHLINE, and click Submit button. If the joke was posted to Database you will see
a window that confirms it.  
There is a profanity filter, so some specific words will not be allowed. You will see a pop-up window in case you have
used some inappropriate words.

-- Filter Jokes
You can search for specific keyword in-jokes for example "boat".
Behind all jokes, you can see a number of the total amount of jokes on the database at that moment.

-- Single Jokes
Select joke ID to see a specific joke by ID.
Click "Show me a random joke" to see a random joke from the database.
Click "Random joke & punchline" to see a random joke added to a random punchline.


Enjoy!