import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

function ContactForm(props) {
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit({ name, number });
    e.target.reset();
  }

  return (
    <form className={styles.FormInput} onSubmit={handleSubmit}>
      <label className={styles.FormInput__label} htmlFor={nameInputId}>
        Name
        <br />
        <input
          className={styles.FormInput__input}
          type="text"
          name="name"
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label className={styles.FormInput__label} htmlFor={numberInputId}>
        Number
        <br />
        <input
          className={styles.FormInput__input}
          type="tel"
          name="number"
          id={numberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </label>
      <button type="submit" className={styles.FormInput__button}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
