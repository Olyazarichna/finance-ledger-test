import style from "./Form.module.scss";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //   { target: { name, value } }
  const onInputChange = (event, name) => {
    console.log(event.target.value);
    switch (name) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  return (
    <form>
      <input
        className={style.input}
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={onInputChange}
        name="name"
      />
      <input
        className={style.input}
        type="email"
        placeholder="Enter email*"
        value={email}
        onChange={onInputChange}
        name="email"
      />
      <button className={style.btn} type="submit" onSubmit={handleSubmit}>
        Send
      </button>
    </form>
  );
};

export default Form;
