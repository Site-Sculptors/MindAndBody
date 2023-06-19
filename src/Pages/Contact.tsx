/* export default function Contact() {
  return (
    <div className="row row align-items-center mt-5">
      <div className="col-6">
        <h1 className="m-4 align-middle b">Contact</h1>
      </div>
    </div>
  );
} */

import React, { useState } from "react";

const Contact: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [buttonText, setButtonText] = useState("SEARCH");

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch(
      `https://api.edamam.com/api/food-database/parser?app_id=ca747d07&app_key=722fabaee32b8118f7b1cb2e32b137cf&ingr=${inputValue}`
    )
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.hints.length) {
          resp.hints.forEach((hint: any) => {
            insertCard(hint.food);
          });
        } else {
          setPlaceholder("We didn't find any food.");
          setInputValue("");
        }
        setButtonText("SEARCH");
        setInputValue("");
      })
      .catch(() => {
        setButtonText("SEARCH");
        setPlaceholder("An error has occurred. Try again later.");
        setInputValue("");
      });
  };

  const insertCard = (food: any) => {
    // Implement the logic to insert the card using the food data
    console.log(food);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
      />
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default Contact;
