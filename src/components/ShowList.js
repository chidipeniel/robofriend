import React from 'react';
import Card from './Card';

const CardList = ({ peniel }) => {
  return (
    <div>
      {
        peniel.map((user, i) => {
          return (
            <Card
              key={i}
              id={peniel[i].id}
              name={peniel[i].name}
              show={peniel[i].show}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;
