import { useState } from "react";
import { Card } from "./Card";
import { Error } from "./Error";

export const Form = () => {
  const [user, setUser] = useState({
    name: "",
    country: "",
    degree: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (user.name.trim().length > 3 && user.country.length >= 6) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow(false);
    }
  };
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <label>Pais</label>
        <input
          type="text"
          value={user.country}
          onChange={(e) => setUser({ ...user, country: e.target.value })}
        />
        <label>Titulo universitario</label>
        <input
          type="text"
          value={user.degree}
          onChange={(e) => setUser({ ...user, degree: e.target.value })}
        />
        <button className="button">Enviar</button>
      </form>

      {show && (
        <>
        <Card user={user}/>
        </>
      )}

      {error && (
        <>
        <Error/>
        </>
      )}
    </div>
  );
};