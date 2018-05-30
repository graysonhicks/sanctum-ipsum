# Sanctum Ipsum

## The holiest lorem ipsum generator on the internet

### npm Usage

For use as an npm package, go [here](https://github.com/graysonhicks/sanctum-ipsum-js/).

### Static Site Usage

[Check it out here](https://graysonhicks.github.io/sanctum-ipsum/)

* Choose how many paragraphs you want to generate
* Choose how many sentences you want in each paragraph
* Copy and paste your lorem ipsum to your project

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The root of this repo is the server. Just `git clone` and `npm install` to get it up and running. To install the `client`, `cd client/` and `npm install`.  You can run `npm start` inside the `client/` folder like a typical React app.  The `server`/`client` are independent of each other, but can easily be configured together.  To run both projects together, from the ROOT of the project, run 'npm start' to concurrently start the Express server and the create-react-app server in the `client/` folder.

### Site To Do:
* Other denominations dropdown and dictionaries
* Copy to clipboard button
* Copy with HTML markup option
* At least 100 'words' per dictionary
* More relevant design

### API Usage

[Check it out here](https://sanctum-ipsum.herokuapp.com/api/3/5)

#### GET
##### `https://sanctum-ipsum.herokuapp.com/api/:numberOfParagraphs/:sentencesPerParagraph`
###### Returns
```javascript
{
    'ipsum': '<p>Confession rosary Pope Francis Paschal mystery Ash Wednesday natural law Nicene creed saint medal Nicene creed canonization communion adoration catechesis.</p>'
}
```


This project is hosted with [Heroku](https://dashboard.heroku.com/).

Server is Node/Express

### Contributing

Feel free to contribute to the design, dictionary, or issues below.

### API To Do:
* Qurey strings instead of routes
* Plain text param
* Language param
* Dictionary param
