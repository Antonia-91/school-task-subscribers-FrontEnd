// --- main tamplate - Not logged in --- //
export function printMainContent() {
  // change to loginBtn
  let loginBtn = document.getElementById("login-btn");
  loginBtn.innerHTML = `<li id="login-btn"><a href="login.html">Login</a></li>`;
  // empty main content
  document.querySelector(".main-content").innerHTML = "";

  let mainContentTamplate = `
      <div class="container">
          <div class="bg1">
            <h2>we<span> love</span></h2>
            <p>Natur</p>
          </div>
          <div class="bg1">
           
          </div>
          <div class="bg2">
            
          </div>
          <div class="bg1">
            <h1><i class="fab fa-instagram"></i></h1>
            <p>Follow</p>
          </div>
          <div class="bg1">
            <p>About us</p>
            <i class="fas fa-user-friends"></i>
          </div>
          <div class="bg2">
            <h2>Gallery</h2>
            <h3><i class="fas fa-images"></i></h3>
          </div>
          <div class="bg1">
            <p>Contact</p>
            <i class="fas fa-phone"></i>
          </div>
          <div class="bg1">
            <h2><i class="fab fa-blogger-b"></i></h2>
            <p>Blog</p>
          </div>
          <div class="bg2">
            <h2><i class="fab fa-github"></i></h2>
            <p>GitHub Projects</p>
          </div>
          <div class="bg2">
            <h2><i class="far fa-newspaper"></i></h2>
            <p>Latest Release</p>
          </div>
          <div class="bg2"></div>
          <div class="bg2"></div>
        </div>
      `;
  // fill main content
  document
    .querySelector(".main-content")
    .insertAdjacentHTML("beforeend", mainContentTamplate);
}

// --- main tamplate -  logged in --- //
export function printLoginContent(username) {
  // change to logOutBtn
  let loginBtn = document.getElementById("login-btn");
  loginBtn.innerHTML = ` <li id="logOut-btn"><a href="#">Log out</a></li>`;
  // empty main content
  document.querySelector(".main-content").innerHTML = "";

  let loggedinTamplate = `
      <div class="container">
      <div class="bg1">
        <h2>we<span> love</span></h2s
        <p>Natur</p>
      </div>
      <div class="bg1">
        <i class="fas fa-envelope-open-text"></i>
        <p>Newsletters</p>
        <button class="stop">STOP SUBRCRIBE</button>
      </div>
      <div class="bg2">
        <i class="fas fa-user-alt"></i>
        <p>${username}</p>
      </div>
      <div class="bg1">
        <h1><i class="fab fa-instagram"></i></h1>
        <p>Follow</p>
      </div>
      <div class="bg1">
        <p>About us</p>
        <i class="fas fa-user-friends"></i>
      </div>
      <div class="bg2">
        <h2>Gallery</h2>
        <h3><i class="fas fa-images"></i></h3>
      </div>
      <div class="bg1">
        <p>Contact</p>
        <i class="fas fa-phone"></i>
      </div>
      <div class="bg1">
        <h2><i class="fab fa-blogger-b"></i></h2>
        <p>Blog</p>
      </div>
      <div class="bg2">
        <h2><i class="fab fa-github"></i></h2>
        <p>GitHub Projects</p>
      </div>
      <div class="bg2">
        <h2><i class="far fa-newspaper"></i></h2>
        <p>Latest Release</p>
      </div>
      <div class="bg2"></div>
      <div class="bg2"></div>
    </div>
      `;
  // fill main content
  document
    .querySelector(".main-content")
    .insertAdjacentHTML("beforeend", loggedinTamplate);
}
