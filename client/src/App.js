import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

import HeaderComponent from "./components/Header/Header";
import FooterComponent from "./components/Footer/Footer";
import SidebarComponent from "./components/Sidebar/Sidebar";
import GeneratorComponent from "./components/Generator/Generator";

import { words } from "./words";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numParagraphs: 1,
      numSentences: 5,
      outputFormat: "HTML",
      text: this.ipsum(1, 5, "HTML", words),
    };

    // code for server/API version
    //this.search = this.search.bind(this);

    this.updateParagraphs = this.updateParagraphs.bind(this);
    this.updateSentences = this.updateSentences.bind(this);
    this.updateFormat = this.updateFormat.bind(this);
  }

  generate() {
    // generate ipsum by passing in sentence and paragraph values from state and the words array
    //(words can be changed by denomination later)
    // text state is then passed down to generator component in props
    this.setState({
      text: this.ipsum(
        this.state.numParagraphs,
        this.state.numSentences,
        this.state.outputFormat,
        words
      ),
    });
  }

  updateParagraphs(e) {
    // set value from paragraph select in state
    this.setState({ numParagraphs: e.target.value }, this.generate);
  }

  updateSentences(e) {
    // set value from sentence select in state
    this.setState({ numSentences: e.target.value }, this.generate);
  }

  updateFormat(format) {
    // set value from checkbox change in the copy component
    this.setState({ outputFormat: format }, this.generate);
  }

  // checkStatus(response) {
  //   if (response.status >= 200 && response.status < 300) {
  //     return response;
  //   }
  //   const error = new Error(`HTTP Error ${response.statusText}`);
  //   error.status = response.statusText;
  //   error.response = response;
  //   console.log(error); // eslint-disable-line no-console
  //   throw error;
  // }

  // search(query) {
  //   return fetch(`api/3/5`, {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //   }).then((res) => this.checkStatus(res))
  //     .then((goodRes) => goodRes.json())
  //     .then((json) => this.setState({
  //         text: json.text
  //     }))
  // }

  ipsum(numParagraphs, numSentences, outputFormat, phrases) {
    // start text placeholder
    var text = "";
    if (numParagraphs < 1) {
      return text;
    }
    // build each paragraph based on user input
    for (var i = 0; i < numParagraphs; i++) {
      // start paragraph placeholder
      var paragraph = "";
      // build each sentence based on user input
      for (var j = 0; j < numSentences; j++) {
        // sentence placeholder
        var sentence = "";
        // 10 - 15 words per sentence, randomly, then loop that many times, grabbing random word
        var numWords = Math.floor(Math.random() * 6 + 10);

        for (var k = 0; k < numWords; k++) {
          // word placeholder
          var word = "";
          // get random index for words array
          var wordNum = Math.floor(Math.random() * phrases.length);
          word = phrases[wordNum];
          // if its not the first word, put a space in front of it
          if (k !== 0) {
            sentence += " ";
          }
          // add word to sentence placeholder and run word choosing loop again
          sentence += word;
        }
        // when word loop complete, punctuate sentence
        sentence += ".";
        // capitalized first letter of the sentence
        sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
        // add the sentence and space after to the paragraph
        paragraph += sentence;
        paragraph += " ";
      }
      // when sentence loop complete, added p tags for formatting and insert into text placeholder
      if (outputFormat === "HTML") {
        paragraph = "<p>" + paragraph + "</p>";
      } else {
        paragraph += "\n\n";
      }
      text += paragraph;
    }
    return text;
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <Container className="app-container">
          <Row>
            <Col xs={12} md={4}>
              <SidebarComponent
                updateParagraphs={this.updateParagraphs}
                updateSentences={this.updateSentences}
                updateFormat={this.updateFormat}
                numParagraphs={this.state.numParagraphs}
                numSentences={this.state.numSentences}
                outputFormat={this.state.outputFormat}
                textToCopy={this.state.text}
              />
            </Col>
            <Col xs={12} md={8}>
              <GeneratorComponent text={this.state.text} />
            </Col>
          </Row>
        </Container>
        <FooterComponent />
      </div>
    );
  }
}

export default App;
