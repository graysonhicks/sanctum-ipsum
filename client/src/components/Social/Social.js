import React, { Component } from 'react';
import './Social.css';
import {
  FacebookShareButton,
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
  MailruIcon,
  LinkedinIcon,
} from 'react-share';




const exampleImage = 'images/sacred_heart.jpg'

class Social extends Component {
  render() {
    const shareUrl = 'https://graysonhicks.github.io/sanctum-ipsum/';
    const title = 'Sanctum Ipsum';
    const description = 'Check out the holiest lorem ipsum generator on the internet!';

    return (
      <div className="social-container">
        <div className="social-network">
          <FacebookShareButton
            url={shareUrl}
            title={title}
            description={description}
            picture={`${String(window.location)}/${exampleImage}`}
            className="social-network-share-button">
            <FacebookIcon
              size={32}
              round />
          </FacebookShareButton>
        </div>

        <div className="social-network">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="social-network-share-button">
            <TwitterIcon
              size={32}
              round />
          </TwitterShareButton>

        </div>


        <div className="social-network">
          <LinkedinShareButton
            url={shareUrl}
            title={title}
            description={description}
            windowWidth={750}
            windowHeight={600}
            className="social-network-share-button">
            <LinkedinIcon
              size={32}
              round />
          </LinkedinShareButton>

        </div>


      </div>
    );
  }
};

export default Social;
