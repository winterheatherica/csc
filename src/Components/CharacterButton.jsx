import PropTypes from 'prop-types';
import React from 'react';

const CharacterButton = ({ CharId, CharVision, CharAvatar, alt, isSelected, onClick }) => {

  let ringClass = 'ring-4 ring-stone-200';
  if (isSelected) {
    switch (CharVision) {
      case 'Electro':
        ringClass = 'ring-4 ring-purple-800';
        break;
      case 'Dendro':
        ringClass = 'ring-4 ring-lime-700';
        break;
      case 'Cryo':
        ringClass = 'ring-4 ring-cyan-500';
        break;
      case 'Hydro':
        ringClass = 'ring-4 ring-blue-800';
        break;
      case 'Pyro':
        ringClass = 'ring-4 ring-orange-900';
        break;
      case 'Geo':
        ringClass = 'ring-4 ring-yellow-700';
        break;
      case 'Anemo':
        ringClass = 'ring-4 ring-teal-600';
        break;
      default:
        break;
    }
  }

  return (
    <div
      id={`character-${CharId}`}
      className={`relative flex justify-center items-center w-20 h-20 hover:w-24 hover:h-24 border-4 border-stone-800 rounded-full ${ringClass}`}
      onClick={onClick}
    >
      <div className="w-16 h-16 hover:w-20 hover:h-20 rounded-full overflow-hidden">
        <img src={CharAvatar} alt={alt} className="w-full h-full object-cover" />
      </div>
      {isSelected && <div className="absolute top-0 left-0 right-0 bottom-0 bg-purple-300 opacity-0 rounded-full"></div>}
    </div>
  );
};

CharacterButton.propTypes = {
  CharId: PropTypes.number.isRequired,  
  CharName: PropTypes.string.isRequired,
  CharVision: PropTypes.string.isRequired,
  CharAvatar: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  ringClass: PropTypes.func.isRequired,
};

export default CharacterButton;