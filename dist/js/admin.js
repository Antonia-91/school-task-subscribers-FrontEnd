// -------- ENDPOINT CALLS -------- //

export function getAdminInfo() {
  return fetch("https://awesome-pictures.herokuapp.com/users")
    .then((res) => res.json())
    .then((users) => {
      console.log(users);
      return users;
    })
    .catch((err) => console.log(err));
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
          console.log(user.email);
          return ` <li> ${user.subscribed ? user.email : ""} </li>`;
        })}
        </ul>
      
  </div>
    `;
  //subscribers.appendChild(userEmail);

  document
    .querySelector(".main-content")
    .insertAdjacentHTML("beforeend", listTamplate);
}

//` <li>${user.email}</li> `;
