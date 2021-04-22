// --- Nav bar media (max-width: 800px) ---//

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

import { printMainContent, printLoginContent } from "./main.js";
import { printLoginForm, getUser } from "./login.js";
import { printSignUpForm, addNew } from "./signUp.js";
import { subsctibtionHandeler } from "./stopSubscribe.js";
import { getAdminInfo, printAdminContent } from "./admin.js";

// -----  GLOBAL VARIABLES ------ //
let userLoggedIn = JSON.parse(localStorage.getItem("userLoggedIn"));
console.log(userLoggedIn);

//-------------- EVENTLISTENERS --------------- //
window.addEventListener("load", () => {
  updateDom();
});

//--------------  GLOBAL EVENTLISTENERS --------------- //
window.addEventListener("click", (e) => {
  if (e.target.matches(".login-btn")) {
    printLoginForm();
  }

  if (e.target.matches(".home-btn")) {
    updateDom();
  }

  if (e.target.matches(".logOut-btn")) {
    localStorage.removeItem("userLoggedIn");
    userLoggedIn = null;
    updateDom();
  }

  if (e.target.matches(".admin-btn")) {
    console.log("click");

    getAdminInfo().then((users) => printAdminContent(users));
  }

  if (e.target.matches(".signUp-btn")) {
    printSignUpForm();
  }

  // --------  eventlisteners submit form -------- //

  if (e.target.matches("#submit-login")) {
    e.preventDefault();
    let userName = document.querySelector("#userName");
    let loginPassword = document.querySelector("#loginPassword");
    //onsole.log(userName, loginPassword);
    console.log("login");

    if (userName.value.trim() != "" && loginPassword.value.trim() != "") {
      let loginUser = {
        userName: userName.value.trim(),
        password: loginPassword.value.trim(),
      };

      getUser(loginUser).then((user) => {
        console.log(user);
        if (user.isUserFound) {
          userLoggedIn = user; // set global variabel to user. user comes from EndpointCall
          localStorage.setItem("userLoggedIn", JSON.stringify(user));
          updateDom(user);
        } else {
          alert("uncorrect nuserName or password!");
        }
      });
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

    localStorage.setItem("userLoggedIn", JSON.stringify(userLoggedIn));
    console.log(userLoggedIn);

    subsctibtionHandeler(userLoggedIn.userLoggedIn[0]._id, subscribtion);
    updateDom();
  }
});

// -------- DOM Functions --------- ///
function updateDom() {
  let navbar = document.querySelector(".navbar-links > ul");

  console.log("print maincontent");

  if (userLoggedIn) {
    let liTamplate = ` 
    <li id="home-btn"><a class="home-btn">Home</a></li>
    <li id="logOut-btn"><a class="logOut-btn">LogOut</a></li>
    ${
      userLoggedIn.userLoggedIn[0].admin
        ? '<li id="admin-btn"><a class="admin-btn">Admin</a></li> '
        : "<li></li> "
    } `;

    navbar.innerHTML = liTamplate;
    printLoginContent(userLoggedIn);
  } else {
    let liTamplate = ` 
          <li id="home-btn"> <a class="home-btn"> Home</a></li>
          <li id="login-btn"><a class="login-btn" >Login</a></li>
          <li id="signUp-btn"><a class="signUp-btn">Sign up</a></li>
          
              `;
    navbar.innerHTML = liTamplate;

    printMainContent();
  }
}
