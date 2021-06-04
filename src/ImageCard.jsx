import React from 'react';

const ImageCard = props => {
  return (
    <div>
      <img src={props.source.thumbs.large} alt={props.source.category}></img>
    </div>
  );
};

export default ImageCard;
