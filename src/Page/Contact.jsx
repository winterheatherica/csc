import React from 'react';
import OurDescription from '../Components/OurDescription';
import InstagramLogo from '../Image/Instagram-Logo.wine.svg';
import TwitterLogo from '../Image/Twitter-Logo.wine.svg';
import GitHubLogo from '../Image/GitHub-Logo.wine.svg';
import DSS from '../Image/DSS.jpg';

const Contact = () => {
  return (
    <div className="flex justify-center items-center h-screen" style={{ backgroundImage: `url(${DSS})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      <div className="grid rounded-lg border-2 border-purple-300" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', width: '500px' }}>
        <div className="py-10 flex justify-center items-start border-4 border-purple-300">
          <OurDescription
            title="Contact Me"
            title1={
              <div className="flex justify-center items-center">
                <a href="https://www.instagram.com/im_keqing/" target="_blank" rel="noopener noreferrer">
                  <img src={InstagramLogo} alt="Instagram" className="logo" />
                </a>
              </div>
            }
            title2={
              <div className="flex justify-center items-center">
                <a href="https://twitter.com/winter_heath_/" target="_blank" rel="noopener noreferrer">
                  <img src={TwitterLogo} alt="Twitter" className="logo" />
                </a>
              </div>
            }
            title3={
              <div className="flex justify-center items-center">
                <a href="https://github.com/winterheeeeath/" target="_blank" rel="noopener noreferrer">
                  <img src={GitHubLogo} alt="GitHub" className="logo" />
                </a>
              </div>
            }
            content1="@im_keqing"
            content2="@winter_heath_"
            content3="@winterheeeeath"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
