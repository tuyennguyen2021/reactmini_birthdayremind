import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div key={id}>
            <article className="person">
              <img src={image} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </article>
          </div>
        );
      })}
    </>
  );
};

export default List;
