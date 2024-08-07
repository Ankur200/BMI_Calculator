const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  console.log(result);
  if (height === "" || height === 0 || isNaN(height)) {
    result.innerHTML = `${height} is invalid height`;
  } else if (weight === "" || weight === 0 || isNaN(weight)) {
    result.innerHTML = `${weight} is invalid weight`;
  } else {
    console.log("In else");
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      result.innerHTML = `<span>BMI is = ${bmi} & Under Weight</span>`;
      console.log("In 1");
    } else if (bmi <= 24.9 && bmi >= 18.6) {
      result.innerHTML = `<span>BMI is = ${bmi} & Normal</span>`;
      console.log("In 2");
    } else {
      result.innerHTML = `<span>BIM is = ${bmi} & Overweight</span>`;
      console.log("In 3");
      console.log(result);
    }
  }
});
