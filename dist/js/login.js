//Imports
import { printLoginContent } from "./main";

// post

// OBS export

// -------- ENDPOINT CALLS -------- //
export function getUser(user) {
  fetch("http://localhost:3000/users/login/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((user) => {
      console.log(user);
      localStorage.setItem("userLoggedIn", JSON.stringify(user));
      printLoginContent(user.userName)
    })
    .catch((err) => console.log(err));
}

//--- DOM Funktion --//
export function printLoginForm() {
  document.querySelector(".main-content").innerHTML = "";

  let loginForm = `
  <div class="login-wrapper" id="login-div">
        <form action="" class="form">
          <h2>Login</h2>

          <div class="input-group">
            <input type="text" name="userName" id="userName" required />
            <label for="userName">User Name</label>
          </div>
          <div class="input-group">
            <input
              type="password"
              name="loginPassword"
              id="loginPassword"
              required
            />
            <label for="loginPassword">Password</label>
          </div>

          <input type="submit" value="Login" class="submit-btn" id="submit-login"/>
          <a href="#forgot-pw" class="forgot-pw">Forgot Password?</a>
        </form>

        <div id="forgot-pw">
          <form action="" class="form">
            <a href="#" class="close">&times;</a>
            <h2>Reset Password</h2>
            <div class="input-group">
              <input type="email" name="email" id="email" required />
              <label for="email">Email</label>
            </div>
            <input type="submit" value="Submit" class="submit-btn" />
          </form>
        </div>
      </div>
  `;

  document
    .querySelector(".main-content")
    .insertAdjacentHTML("beforeend", loginForm);
}

// module.exports = {
//   getUser,
//   printLoginForm
// }
