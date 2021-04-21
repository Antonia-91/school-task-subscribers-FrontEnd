// --- main tamplate - Not logged in --- //
export function printMainContent() {
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
export function printLoginContent(user) {
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
       ${
         user.userLoggedIn[0].subscribed
           ? '<button class="stop">STOP SUBRCRIBE</button> '
           : '<button class="stop"> SUBRCRIBE</button> '
       }
        
      </div>
      <div class="bg2">
        <i class="fas fa-user-alt"></i>
        <p>${user.userLoggedIn[0].userName}</p>
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
