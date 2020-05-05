/*Clicking on the buttons should change the "theme" of the website:

- When clicking ** blue ** it should change:

  - ** Jumbotron ** background color to`#588fbd`
    - ** Donate a bike ** button background color to`#ffa500`
        - ** Volunteer ** button background color to`black` and text color to`white`

            - When clicking ** orange ** it should change:

  - ** Jumbotron ** background color to`#f0ad4e`
    - ** Donate a bike ** button background color to`#5751fd`
        - ** Volunteer ** button background color to`#31b0d5` and text color to`white`

            - When clicking ** green ** it should change:
  - ** Jumbotron ** background color to`#87ca8a`
    - ** Donate a bike ** button background color to`black`
        - ** Volunteer ** button background color to`#8c9c08`  */

/*var alertBlueClick = document.querySelector("#blueBtn");
alertBlueClick.addEventListener("click", forBlue);
function forBlue() {
  var findJumbotron = document.querySelector(".jumbotron");
  findJumbotron.style.backgroundColor = "#588fbd";
  var findDonateBike = document.querySelector(".btn-primary.Btn-lrg");
  findDonateBike.style.backgroundColor = "#ffa500";
}*/
function onButtonPress(buttonId, newClassToAssign) {
  const button = document.querySelector(buttonId);
  button.addEventListener("click", function () {
    const jumbatronDiv = document.querySelector(".jumbotron");
    jumbatronDiv.className = "jumbotron " + newClassToAssign;
  });
}
onButtonPress("#bluebtn", "blue");
onButtonPress("#orangeBtn", "orange");
onButtonPress("#greenBtn", "green");
/*When the submit button is pressed, it should check that all the form fields are valid:

- The **Your name**, **Email** and **Describe yourself** fields need to be non-empty (Hint: their `value` length has to be greater than zero)
- For the **Email** field also check if it contains the `@` character

For all the fields that invalid, it should make their background color `red`.
IF all the fields are valid, when you click **Submit** it should:

- Display an alert to thank you for filling out the form
- Blank out (make empty) all the text fields

**Important hint:** In your function that handles clicks on the `Submit` button you will need to call `event.preventDefault()` to stop the browser from refreshing the page. To read more on how to do this: https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault
*/

const submitButton = document.querySelector("form button");
submitButton.addEventListener("click", function () {
  const allInputs = document.querySelectorAll("form input,textarea");
  let allInputsValid = true;
  allInputs.forEach(function (el) {
    if (el.value === "" || (el.type === "email" && !el.value.includes("@"))) {
      el.style.backgroundColor = "red";
      allInputsValid = false;
    }
  });
  if (allInputsValid) {
    alert("Thank you!");
    allInputs.forEach(function (el) {
      el.value = "";
    });
  }
});
