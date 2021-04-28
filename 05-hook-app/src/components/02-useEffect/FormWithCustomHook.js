import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.info(formValues);
  };

  return (
    <form onSubmit={ handleSubmit }>
      <h1>Form</h1>
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
      <div className="mb-3">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="****************"
          value={ password }
          onChange={ handleInputChange }
        ></input>
      </div>
      <button type="submit" className="btn btn-primary">Guardar</button>
    </form>
  );
};
