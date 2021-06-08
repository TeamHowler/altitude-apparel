import React from 'react';


const Image = ({image}) => {
  if (image === []) {
    return <h2>no image</h2>;
  } else {
    return (
      <img className="d-block w-100 h-100" src={image.url}/>
    );
  }
};

export default Image;
