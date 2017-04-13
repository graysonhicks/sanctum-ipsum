import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import {Grid, Row, Col} from 'react-bootstrap';
import './App.css';

import HeaderComponent from './components/Header/Header';
import SidebarComponent from './components/Sidebar/Sidebar';
import GeneratorComponent from './components/Generator/Generator';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numParagraphs: 1,
            numSentences: 1,
            text: 'default'
        };

        this.generate = this.generate.bind(this);
        this.updateParagraphs = this.updateParagraphs.bind(this);
        this.updateSentences = this.updateSentences.bind(this);

    }

    words = ["pope", "catholic", "vatican", "transubstantiation", "universal", "communion", "monk", "monastery", "priest", "nun", "abbot", "cathedral", "holy Mary, Mother of God", "our Father, who art in Heaven", "the sacred heart of Jesus", "peace be with you, and also with you", "St. Michael the Archangel defend us in battle", "salve regina", "St. Thomas Aquinas", "Thomas Merton", "Fatima", "Lourdes", "eucharist", "Trappist", "Ursuline", "Cistercian", "liturgy of the hours", "confiteor", "dogma", "tradition", "Papal enclave", "feast day", "saint", "tridentine", "Benedictine", "canonization", "beatified", "St. Rose of Lima", "St. Gabriel", "John-Henry Newman"];

    generate(){
        // generate ipsum by passing in sentence and paragraph values from state and the words array (words can be changed by denomination later)
        // text state is then passed down to generator component in props
        this.setState({
            text: this.ipsum(this.state.numParagraphs, this.state.numSentences, this.words)
        })
    }

    updateParagraphs(e){
        // set value from paragraph select in state
        this.setState({
            numParagraphs: e.target.value
        });
    }

    updateSentences(e){
        // set value from sentence select in state
        this.setState({
            numSentences: e.target.value
        });
    }

    ipsum(numParagraphs, numSentences, phrases){
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
          // 15 - 20 words per sentence, randomly, then loop that many times, grabbing random word
          var numWords = Math.floor((Math.random()*6)+10);

          for(var k = 0; k < numWords; k++){
            // word placeholder
            var word = "";
            // get random index for words array
            var wordNum = Math.floor(Math.random()*phrases.length);
            word = phrases[wordNum];

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

      return text;
    }


  render() {
    return (
      <div className="App">
          <HeaderComponent></HeaderComponent>
          <Grid className="app-container">
              <Row>
                  <Col xs={4}>
                    <SidebarComponent
                        generate={this.generate}
                        updateParagraphs={this.updateParagraphs}
                        updateSentences={this.updateSentences}
                    />
                  </Col>
                  <Col xs={8}>
                    <GeneratorComponent text={this.state.text} ></GeneratorComponent>
                  </Col>
              </Row>
          </Grid>
      </div>
    );
  }
}

export default App;
