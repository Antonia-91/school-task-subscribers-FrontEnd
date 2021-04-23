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
          return `<li>${user.email} ${
            user.subscribed
              ? `<i class="fa fa-check-circle" aria-hidden="true"></i>`
              : ""
          }</li>`;
        })}
        </ul>
      
  </div>
    
    `;

  document
    .querySelector(".main-content")
    .insertAdjacentHTML("beforeend", listTamplate);
}
