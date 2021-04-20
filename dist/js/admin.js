// -------- ENDPOINT CALLS -------- //
// behöver TVÅ Fetch. En som hämtar info om inloggad user. om admin = true -> Fetch som hämtar alla subscribers email och print adminTamplate ->

// ----------  DOM FUNCTIONS  --------- //

function checkAdmin(user) {
  let user = user[0].admin;
  if (user) {
    // if true
    printAdminContent();
  }
}

export function printAdminContent(users) {
  document.querySelector(".main-content").innerHTML = "";

  //let subscribers = document.querySelector(".subscribers");

  let listTamplate = `
    <div class="login-wrapper">
    <div class="admin form">
      <div>
        <h1>Admin</h1>
        <p>subscribers</p>
      </div>
      <div>
        <ul class="subscribers">
        ${users.map((user) => {
          return `<li>${user.email}</li>`;
        })}
        </ul>
      </div>
      <button class="admin-btn">New Post</button>
    </div>
  </div>
    `;
  //subscribers.appendChild(userEmail);

  document
    .querySelector(".main-content")
    .insertAdjacentHTML("berforeend", listTamplate);
}
