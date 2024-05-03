// Unit 2 Assessment: js-dom.js
// This file is imported as a script by `js-dom.html`.
// Refer to `js-dom.html` to see the HTML elements you will be interacting with.

// Log in/log out button
//
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out". If a user clicks on the button again, its text
// should switch from "Log Out" to "Log In".

/// TODO: replace this with your code
const loginBTN = document.querySelector(`#auth`) 
const toggleLogin = () => {
    loginBTN.innerText === `Log in` ? 
    loginBTN.innerText = 'Log out' : loginBTN.innerText =`Log in` 
}

loginBTN.addEventListener(`click`, toggleLogin)

// Send an alert
//
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.

/// TODO: replace this with your code
const alertForm = document.querySelector(`#send-alert`)
const alertMSG = document.querySelector(`#alert-message`) 

alertForm.addEventListener(`submit`, () => {alert(alertMSG.value)})


// Add an item
//
// This is a pretty silly feature -- when a user clicks on the
// button (the one that says "Double-ulick to add an item"), a new list
// item should appear.
//
// In other words, whenever a user clicks on the button, just
// add another <li>Item</li>. So, a user has clicked on the
// button once, the list should look like this:
//
//   <ol id="list">
//     <li>Item</li>  <!-- This list item was already here -->
//     <li>Item</li>  <!-- This was added after double-clicking -->
//   </ol>

/// TODO: replace this with your code
const addBTN = document.querySelector(`#item-adder`)  
const sillyList = document.querySelector(`#list`)  
const addItem = () => {
    //  sillyList.innerHTML += `<li>Item</li>`
    const newLi = document.createElement('li')
    newLi.textContent = 'Item'
    sillyList.appendChild(newLi)

}

addBTN.addEventListener(`dblclick`, addItem)

// Change colors
//
// Users should be able to change the color of any element with the
// class, "changes-colors", by clicking on the "Turn Stuff Red" button
// or "Turn Stuff Blue" button.
//
// Clicking on "Turn Stuff Red" should make text red and clicking on "Turn
// Stuff Blue" should make text blue.

/// TODO: replace this with your code
const stylish = document.querySelectorAll(`.changes-colors`)

const blueBTN = document.querySelector(`#blue`)  
const costumeChangeBlue = () => {
    stylish.forEach((element) => element.style.color = `blue`)
}
blueBTN.addEventListener(`click`, costumeChangeBlue)


const redBTN = document.querySelector(`#red`)  
const costumeChangeRed = () => {
    stylish.forEach((element) => element.style.color = `red`)
}
redBTN.addEventListener(`click`, costumeChangeRed)


// Calculate factorial
//
// The factorial of a number is the product of an integer and all the integers
// below it. For example, the factorial of 4 is equal to 4 * 3 * 2 * 1 = 24. The
// factorial of 6 is 6 * 5 * 4 * 3 * 2 * 1 = 720.
//
// Write the following code to calculate the factorial of a positive integer (you
// don't need to worry about negative numbers).
//
// Write a function that calculates the factorial of a positive number Add an
// event listener that catches when someone clicks on the "calculate" button and:
//   - gets whatever number is inside the input field
//   - calls your function that calculates a factorial
//   - puts the result of the function inside the "result" span

/// TODO: replace this with your code

const positiveNumEntry = document.querySelector(`#factorial-input`)
const factorialForm = document.querySelector(`#factorial-calculator`)
const resultSpan = document.querySelector(`#result`)

let num = positiveNumEntry.value
const pushFact = (num) => {
    product = num
        for (let i = 1; i < num; i++) {
            product = product * (num - i)
        }
        console.log(product)
    resultSpan.innerText = product 
}
factorialForm.addEventListener(`submit`, (e) => {e.preventDefault() 
    pushFact(positiveNumEntry.value)})

// Validate a form
//
// This form is used to collect word recommendations from users. However, it
// only accepts words that are at least four characters long. Add code that
// checks the length of the text entered into the <textarea> when the user
// submits the form.
//
//  If the text is three or more characters long, change
//  the feedback text to say "Thanks for your submission!" and change
//  the color of the text to green.
//
// If the text is less than three characters long, change
// the feedback text to say "The word must be at least 4 characters long." and
// change the color of the text to red..

/// TODO: replace this with your code
const longWord = document.querySelector(`#word`)
const wordForm = document.querySelector(`#recommend-word`)
const formFeedback = document.querySelector(`.form-feedback`)
const feedback = (word) => {
    word = longWord.value
    let length = word.length
    if (length > 3) {
        formFeedback.innerText = "Thanks for your submission!"
        formFeedback.style.color = `green` 
    }
}
wordForm.addEventListener(`submit`, (e) => {e.preventDefault() 
    feedback(word)})