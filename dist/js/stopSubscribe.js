// fetch

//
export function subsctibtionHandeler(id, subscriberd) {
  fetch(`https://awesome-pictures.herokuapp.com/users/update/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(subscriberd),
  })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
