import { useState } from "react";
import { Card } from "./Card";
import { Error } from "./Error";
import styles from "../styles/form.module.css"

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
      <form onSubmit={handlerSubmit} className={styles.container}>
        <div className={styles.form_item}>
          <input placeholder="Nombre"
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div className={styles.form_item}>
          <input placeholder="Pais"
            type="text"
            value={user.country}
            onChange={(e) => setUser({ ...user, country: e.target.value })}
          />
        </div>
        <div className={styles.form_item}>
          
          <input placeholder="Titulo universitario"
            type="text"
            value={user.degree}
            onChange={(e) => setUser({ ...user, degree: e.target.value })}
          />
        </div>
        <button className={styles.btn}>Enviar</button>
      </form>

      {show && (
        <>
          <Card user={user} />
        </>
      )}

      {error && (
        <>
          <Error />
        </>
      )}
    </div>
  );
};
