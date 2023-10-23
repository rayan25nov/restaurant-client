import React, { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout= ({ onCancel, onConfirm }) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef(null);
  const streetInputRef = useRef(null);
  const postalCodeInputRef = useRef(null);
  const cityInputRef = useRef(null);

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current?.value || "";
    const enteredStreet = streetInputRef.current?.value || "";
    const enteredPostalCode = postalCodeInputRef.current?.value || "";
    const enteredCity = cityInputRef.current?.value || "";

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  const controlClasses = (tag) =>
    `${styles.control} ${formInputsValidity[tag] ? "" : styles.invalid}`;

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={controlClasses("name")}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={controlClasses("street")}>
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} type="text" id="street" />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={controlClasses("postalCode")}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalCodeInputRef} type="text" id="postal" />
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code (5 characters long)!</p>
        )}
      </div>
      <div className={controlClasses("city")}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className={styles.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
