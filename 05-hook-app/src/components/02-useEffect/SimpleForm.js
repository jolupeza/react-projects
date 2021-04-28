import { useEffect, useState } from 'react';
import { Message } from './Message';
import './effects.css';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formState;

  useEffect(() => {

  }, [formState]);

  const handleInputChange = ({ target }) => {
    setFormState({...formState, [target.name]: target.value });
  };

  return (
    <>
      <h1>UseEffect</h1>
      <hr />
      <div className="mb-3">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autocomplete="off"
          value={ name }
          onChange={ handleInputChange }
        ></input>
      </div>
      <div className="mb-3">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="email@gmail.com"
          autocomplete="off"
          value={ email }
          onChange={ handleInputChange }
        ></input>
      </div>
      { (name === '123') && <Message /> }
    </>
  );
};
