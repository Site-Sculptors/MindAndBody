/* export default function About() {
  return (
    <div className="row row align-items-center mt-5">
      <div className="col-6">
        <h1 className="m-4 align-middle b">About</h1>
      </div>
    </div>
  );
}
 */

import React, { useState } from "react";

const About = () => {
  const [result, setResult] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // WITH BACK-END:
    // fetch(`http://localhost:3000/foods/${formData.get('name')}`)
    //   .then(resp => resp.json())
    //   .then(resp => {
    //     if (!resp.error) {
    //       resp.forEach(hint => {
    //         insertCard(hint.food)
    //       })
    //     }
    //     else {
    //       changeInput(form[0], 'placeholder', 'We didn\'t found any food.')
    //       resetInput(form[0])
    //     }
    //     changeTextButton(form[1], 'SEARCH')
    //     changeInput(form[0], 'value', '')
    //   }).catch(() => {
    //     changeTextButton(form[1], 'SEARCH')
    //     changeInput(form[0], 'placeholder', 'An error has occurred. Try again later.')
    //     resetInput(form[0])
    //   })

    // WITHOUT BACK-END (TO DEPLOY IN SURGE.SH):
    fetch(
      `https://api.edamam.com/api/food-database/parser?app_id=ca747d07&app_key=722fabaee32b8118f7b1cb2e32b137cf&ingr=${formData.get(
        "name"
      )}`
    )
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.hints.length) {
          const cards = resp.hints.map((hint: any) => buildCard(hint.food));
          setResult(cards);
        } else {
          changeInput(form[0], "placeholder", "We didn't found any food.");
          resetInput(form[0]);
        }
        changeTextButton(form[1], "SEARCH");
        changeInput(form[0], "value", "");
      })
      .catch(() => {
        changeTextButton(form[1], "SEARCH");
        changeInput(
          form[0],
          "placeholder",
          "An error has occurred. Try again later."
        );
        resetInput(form[0]);
      });
  };

  const changeTextButton = (button: HTMLButtonElement, text: string) => {
    button.textContent = text;
  };

  const resetInput = (input: HTMLInputElement) => {
    setTimeout(() => {
      changeInput(input, "placeholder", "Type a food or a meal...");
    }, 3000);
  };

  const changeInput = (
    input: HTMLInputElement,
    prop: string,
    value: string
  ) => {
    input[prop] = value;
  };

  const buildCard = (data: any) => {
    const energy = data.nutrients.ENERC_KCAL
      ? `<li><b>Energy: </b><span>${data.nutrients.ENERC_KCAL.toFixed(
          1
        )}kcal</span></li>`
      : "";
    const carbs = data.nutrients.CHOCDF
      ? `<li><b>Carbs: </b><span>${data.nutrients.CHOCDF.toFixed(
          1
        )}g</span></li>`
      : "";
    const protein = data.nutrients.PROCNT
      ? `<li><b>Protein: </b><span>${data.nutrients.PROCNT.toFixed(
          1
        )}g</span></li>`
      : "";
    const fat = data.nutrients.FAT
      ? `<li><b>Fat: </b><span>${data.nutrients.FAT.toFixed(1)}g</span></li>`
      : "";

    return (
      <div className="card">
        <div className="card-header">
          <h3>{data.label}</h3>
          <h4>{data.category}</h4>
        </div>
        <div className="card-body">
          <ul>
            {energy}
            {carbs}
            {protein}
            {fat}
          </ul>
        </div>
        <div className="card-footer">
          <p>
            <b>Brand: </b>
            <span>{data.brand || "None :("}</span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <form id="search" onSubmit={handleSearch}>
        <input type="text" name="name" placeholder="Type a food or a meal..." />
        <button type="submit">SEARCH</button>
      </form>
      <div id="result">{result}</div>
    </div>
  );
};

export default About;
