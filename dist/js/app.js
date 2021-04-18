console.log("hej");

// GLOBAL VARIABLES
let userLoggedIn = localStorage.getItem("userLoggedIn");


// import { printMainContent, printLoginContent } from "./main.js";
import { getUser, printLoginForm } from "./login.js";
import { clearFields, printSignUpForm, addNew } from "./signUp.js";
/*import { printAdminTamplate, getSubscribers, getUserId } from "./admin.js";
import {} from "./stopSubscribe.js";*/

//-------------- EVENTLISTENERS --------------- //

let homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", ()=>{
  // if(userLoggedIn){

  // }
})
let loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", ()=>{
  console.log("LOGIN FORM")
  printLoginForm()
});
let signUp = document.getElementById("singUp-btn");
signUp.addEventListener("click", ()=>printSignUpForm());
let adminBtn = document.getElementById("admin-btn");
adminBtn.addEventListener("click", ()=>printAdminContent());

window.addEventListener("click", (e) => {
  // --------  eventlisteners submit form -------- //
  if (e.target.matches("#submit-login")) {
    if (userName.value.trim() != "" && loginPassword.value.trim() != "") {
      let loginUser = {
        userName: userName.value.trim(),
        password: loginPassword.value.trim(),
      };
      getUser(loginUser);
      // printLoginContent(user.userName);
    } else {
      alert("you must complete all necessary fields");
    }
  }

  // --------  eventlisteners SignUp  form -------- //
  if (e.target.matches("#submit-new-btn")) {
    e.preventDefault();

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
        lName: lName.value.trim(),
        userName: userName.value.trim(),
        email: regEmail.value.trim(),
        password: regPassword.value.trim(),
        admin: false,
      };
      //clear all fields
      clearFields();

      addNew(newUser);
      printSignUpForm();
    } else {
      alert("you must complete all necessary fields");
    }
  }
  // --------  eventlisteners Stop subrscribe -------- //
});

// -------- ENDPOINT CALLS -------- //

// ---- DOM Functions ---- ///
