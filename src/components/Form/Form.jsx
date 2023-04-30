import styles from "./Form.module.scss";
import { useState } from "react";
import Button from "../Button/Button";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(false);

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
    const emailRegex =
    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;

    if (!isValidEmail || !email.trim()) {
      setIsValidEmail(false);
      return;
    }
   setIsValidEmail(emailRegex.test(email))
   
    resetForm();
  };
  const resetForm = () => {
    setName("");
    setEmail("");
  };

  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.heading}>Request Callback</h2>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
        name="my-form"
        method="POST"
        data-netlify="true"
        autoComplete="off"
      >
        <div className={styles.groupInput}>
          <input
            id="name"
            className={styles.input}
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={onInputChange}
            name="name"
          />
          <label htmlFor="name" className={styles.label}>
            Enter your name
          </label>
        </div>
        <div className={styles.groupInput}>
          <input
            id="email"
            className={styles.input}
            type="email"
            placeholder="Enter email*"
            value={email}
            onChange={onInputChange}
            name="email"
            required
            autoComplete="off"
          />
          <label htmlFor="email" className={styles.label}>
            Enter email*
          </label>
        </div>
        {!isValidEmail && (
          <p className={styles.warming}>
            <svg
              className={styles.iconWarning}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              fill="none"
            >
              <path
                fill="#EB5757"
                d="M13 11.04c0 .312-.107.55-.321.714a1.258 1.258 0 0 1-.789.246H1.11c-.312 0-.575-.084-.789-.252C.107 11.58 0 11.344 0 11.04c0-.24.07-.484.21-.732L5.595.66c.257-.44.56-.66.91-.66.351 0 .647.22.889.66l5.396 9.66c.14.256.21.496.21.72ZM7.312 4.908V3.156H5.688v1.752c0 .112.008.218.024.318.015.1.037.212.064.336.027.124.048.23.064.318l.304 1.944h.689l.315-1.944a7.18 7.18 0 0 1 .07-.312c.031-.128.055-.242.07-.342.016-.1.024-.206.024-.318Zm0 4.644a.8.8 0 0 0-.24-.588.787.787 0 0 0-.578-.24.774.774 0 0 0-.566.24.8.8 0 0 0-.24.588c0 .232.08.43.24.594.16.164.348.246.566.246a.777.777 0 0 0 .578-.246.82.82 0 0 0 .24-.594Z"
              />
            </svg>
            This is a required field
          </p>
        )}
        <Button className={styles.btn} buttonType="submit">
          Send
        </Button>
      </form>
    </div>
  );
};

export default Form;
