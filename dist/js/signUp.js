// ---- ENPOINT CALL ----- //

export function addNew(user) {
  fetch("/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  })
    .then((res) => res.json())
    .then((jsonInfo) => console.log(jsonInfo))
    .catch((err) => console.log(err));
}

// ---- DOM funcrtions --- //

export function printSignUpForm() {
  //empty first
  document.querySelector(".main-content").innerHTML = "";

  let signUpForm = `
    <div class="login-wrapper" id="reg-div">
        <form action="" class="form">
          <h2>Regristrate</h2>

          <div class="input-group">
            <input type="text" name="fName" id="fName" required />
            <label for="fName">Firt name</label>
          </div>

          <div class="input-group">
            <input type="text" name="lName" id="lName" required />
            <label for="lName">Last name</label>
          </div>

          <div class="input-group">
            <input type="text" name="userName" id="userName" required />
            <label for="userName">User name</label>
          </div>

          <div class="input-group">
            <input type="text" name="regEmail" id="regEmail" required />
            <label for="regEmail">Email</label>
          </div>

          <div class="input-group">
            <input
              type="password"
              name="regPassword"
              id="regPassword"
              required
            />
            <label for="regPassword">Password</label>
          </div>

          <input
            type="submit"
            value="save"
            class="submit-btn"
            id="submit-new-btn"
          />
        </form>
      </div>
    `;
  document
    .querySelector(".main-content")
    .insertAdjacentHTML("beforeend", signUpForm);
}

export function clearFields() {
  fName.value = "";
  lName.value = "";
  userName.value = "";
  regEmail.value = "";
  regPassword.value = "";
}
