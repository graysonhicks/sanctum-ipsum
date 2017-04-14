var express = require('express');
var router = express.Router();
var words = require('../words').words;

/* GET home page. */
router.get('/', function(req, res, next) {

  res.json(req.params)
});

router.get('/:numParagraphs/:numSentences', function(req, res, next) {

        var numParagraphs = req.params.numParagraphs;
        var numSentences = req.params.numSentences;

      // start text placeholder
      var text = "";

      if(numParagraphs < 1){
        return text;
      }

     // build each paragraph based on user input
      for(var i = 0; i < numParagraphs; i++){

        // start paragraph placeholder
        var paragraph = "";

        // build each sentence based on user input
        for(var j = 0; j < numSentences; j++){
          // sentence placeholder
          var sentence = "";
          // 10 - 15 words per sentence, randomly, then loop that many times, grabbing random word
          var numWords = Math.floor((Math.random()*6)+10);

          for(var k = 0; k < numWords; k++){
            // word placeholder
            var word = "";
            // get random index for words array
            var wordNum = Math.floor(Math.random()*words.length);
            word = words[wordNum];

            // if its not the first word, put a space in front of it
            if (k !== 0){
              sentence += " ";
            }
            // add word to sentence placeholder and run word choosing loop again
            sentence += word;
          }
          // when word loop complete, punctuate sentence
          sentence += ".";
          // capitalized first letter of the sentence
          sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);;

          // add the sentence and space after to the paragraph
          paragraph += sentence;
          paragraph += " ";
        }
        // when sentence loop complete, added p tags for formatting and insert into text placeholder
        paragraph = "<p>" + paragraph + "</p>";
        text += paragraph;
      }

      res.json({
          "ipsum": text
      })
    });


module.exports = router;
