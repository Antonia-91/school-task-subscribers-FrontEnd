// --- Nav bar media (max-width: 800px) ---//

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// -----  GLOBAL VARIABLES ------ //
let userLoggedIn = JSON.parse(localStorage.getItem("userLoggedIn"));
console.log(userLoggedIn);

import { printMainContent, printLoginContent } from "./main.js";
import { printLoginForm, getUser } from "./login.js";
import { printSignUpForm, addNew } from "./signUp.js";
import { subsctibtionHandeler } from "./stopSubscribe.js";
// import { printNavMain, printNavUser, printNavAdmin } from "./nav";
/*import { printAdminTamplate, getSubscribers, getUserId } from "./admin.js";
import {} from "./stopSubscribe.js";*/

//-------------- EVENTLISTENERS --------------- //
window.addEventListener("load", () => {
  updateDom();
});
// handels homeBtn
let homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", () => {
  updateDom();
});
//handel loginform
let loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", (e) => {
  console.log(e.target);
  console.log("LOGIN FORM");

  printLoginForm();
});
// handels signupform
let signUp = document.getElementById("singUp-btn");
signUp.addEventListener("click", () => printSignUpForm());
let adminBtn = document.getElementById("admin-btn");
adminBtn.addEventListener("click", () => printAdminContent());

//--------------  GLOBAL EVENTLISTENERS --------------- //
window.addEventListener("click", (e) => {
  // --------  eventlisteners submit form -------- //

  if (e.target.matches("#submit-login")) {
    let userName = document.querySelector("#userName");
    let loginPassword = document.querySelector("#loginPassword");
    console.log(userName, loginPassword);

    if (userName.value.trim() != "" && loginPassword.value.trim() != "") {
      let loginUser = {
        userName: userName.value.trim(),
        password: loginPassword.value.trim(),
      };
      getUser(loginUser).then((user) => {
        userLoggedIn = user; // set global variabel to user. user comes from EndpointCall
        updateDom(user);
      });

      //printLoginContent(user.userName);
    } else {
      alert("you must complete all necessary fields");
    }
  }

  // --------  eventlisteners SignUp  form -------- //
  if (e.target.matches("#submit-new-btn")) {
    e.preventDefault();

    let fName = document.querySelector("#fName");
    let lName = document.querySelector("#lName");
    let userName = document.querySelector("#userName");
    let regEmail = document.querySelector("#regEmail");
    let regPassword = document.querySelector("#regPassword");
    let checkbox = document.querySelector("#checkbox");

    if (
      fName.value.trim() !== "" &&
      lName.value.trim() !== "" &&
      userName.value.trim() !== "" &&
      regEmail.value.trim() !== "" &&
      regPassword.value.trim() !== ""
    ) {
      //new user object using user input
      let newUser = {
        fName: fName.value.trim(),
        lastName: lName.value.trim(),
        userName: userName.value.trim(),
        email: regEmail.value.trim(),
        password: regPassword.value.trim(),
        admin: false,
        subscribed: checkbox.checked,
      };
      //clear all fields
      //clearFields();

      addNew(newUser);
      updateDom();
    } else {
      alert("you must complete all necessary fields");
    }
  }
  // --------  eventlisteners Stop subrscribe -------- //
  if (e.target.matches(".stop")) {
    console.log(e.target);
    let subscribtion = {
      subscribed: userLoggedIn.userLoggedIn[0].subscribed ? false : true,
    };
    //ls
    let LSuser = JSON.parse(localStorage.getItem("userLoggedIn"));
    console.log(LSuser);

    //update
    userLoggedIn.userLoggedIn[0].subscribed = userLoggedIn.userLoggedIn[0]
      .subscribed
      ? false
      : true;

    // if (JSON.stringify(LSuser) === JSON.stringify(userLoggedIn)) {
    //   console.log("hej");
    // } else {
    //   console.log(userLoggedIn);
    // }

    localStorage.setItem("userLoggedIn", JSON.stringify(userLoggedIn));
    console.log(userLoggedIn);

    subsctibtionHandeler(userLoggedIn.userLoggedIn[0]._id, subscribtion);
    updateDom();
  }
});

// -------- ENDPOINT CALLS -------- //

// ---- DOM Functions ---- ///
function updateDom() {
  console.log("print maincontent");

  if (userLoggedIn) {
    printLoginContent(userLoggedIn);
  } else {
    printMainContent();
  }
}
