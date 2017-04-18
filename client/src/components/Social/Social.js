import React, { Component } from 'react';
import './Social.css';
import {
  ShareButtons,
  generateShareIcon,
} from 'react-share';


const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton
} = ShareButtons;

const exampleImage = 'images/sacred_heart.jpg'

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');

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
          <GooglePlusShareButton
            url={shareUrl}
            className="social-network-share-button">
            <GooglePlusIcon
              size={32}
              round />
          </GooglePlusShareButton>

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
