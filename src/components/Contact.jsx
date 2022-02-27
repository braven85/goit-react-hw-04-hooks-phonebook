import styles from "./Contact.module.css";
import PropTypes from "prop-types";

function Contact({ contacts, removeContact }) {
  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.Contact__item}>
          {name}: {number}
          <button
            className={styles.Contact__button}
            type="button"
            onClick={() => removeContact(id)}
          >
            Remove
          </button>
        </li>
      ))}
    </>
  );
}

export default Contact;

Contact.propTypes = {
  contacts: PropTypes.array,
  removeContact: PropTypes.func,
};
