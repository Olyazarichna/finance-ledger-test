import styles from "./Form.module.scss";
import { useState } from "react";
import Button from "../Button/Button";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const onInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
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
    <div className={styles.formWrapper}>
      <h2 className={styles.heading}>Request Callback</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={onInputChange}
          name="name"
        />

        <input
          className={styles.input}
          type="email"
          placeholder="Enter email*"
          value={email}
          onChange={onInputChange}
          name="email"
          required
          pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
        />
        <Button className={styles.btn} type="submit">
          Send
        </Button>
      </form>
    </div>
  );
};

export default Form;
