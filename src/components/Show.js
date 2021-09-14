import React from 'react';

const Card = ({ name, show, id }) => {
  return (
    <div className='tc grow bg-light-gold br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='peniel' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{show}</p>
      </div>
    </div>
  );
}

export default Card;
