import React from "react";

export const Card = ({user}) => {
  const {name, country, degree} = user;
  return (
    <div className="a">
      <h2>Nombre: {name}</h2>
      <h2>Pais: {country}</h2>
      <h2>Titulo Universitario: {degree}</h2>
    </div>
  );
};

