import React from 'react';
import PropTypes from 'prop-types';

const OurDescription = (props) => {

  const { title, title1, title2, title3, content1, content2, content3 } = props;

  return (
    <div className='text-purple-300' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div className="text-center">
        <h2 className="text-2xl font-bold Genshin-Impact">{title}</h2>
        <div className="my-4">
          <h3 className="text-lg font-bold Genshin-Impact">{title1}</h3>
          <p className="Poppins-light">{content1}</p>
        </div>
        <div className="my-4">
          <h3 className="text-lg font-bold Genshin-Impact">{title2}</h3>
          <p className="Poppins-light">{content2}</p>
        </div>
        <div className="my-4">
          <h3 className="text-lg font-bold Genshin-Impact">{title3}</h3>
          <p className="Poppins-light">{content3}</p>
        </div>
      </div>
    </div>
  );
}

OurDescription.propTypes = {
  title: PropTypes.string.isRequired,
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
  content1: PropTypes.string.isRequired,
  content2: PropTypes.string.isRequired,
  content3: PropTypes.string.isRequired,
};

export default OurDescription;
