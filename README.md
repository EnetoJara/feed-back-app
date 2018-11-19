# feed-back-app

udemy course

well since on heroku we dont have access to the server there is no way to run babel on the server, there fore we need to compile the code locally

# ADD this scripts for development, or in any other server that you get access

# Usar estos scripts endeveloment

"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"dev": "nodemon --exec babel-node src/index.js",
"build": "babel src --out-dir dist",
"build:rm": "rm -rf ./dist",
"serve": "node dist/index.js",
"start": "node dist/index.js"
}

# use this ones to make a deploy en heroku

"scripts": {
"start": "node dist/index.js"
}
