import React from 'react';

const List = (birthday) => {
  const { id, name, image, age } = birthday
  return (
    <article className="person" id={id}>
      <img src={image} alt="birthday image" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article >
  );
};

export default List;
