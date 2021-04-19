const navHolder = document.querySelector(".nav-holder");

// if no one are logged in
export function printNavMain() {
  navHolder.innerHTML = "";

  let navTamplate = `
    
    <nav class="navbar">
    <div class="brand-title">Awesome pictures</div>

    <a href="#" class="toggle-button">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </a>
    <div class="navbar-links">
      <ul>
        <li id="home-btn"><a href="#">Home</a></li>
        <li id="login-btn"><a href="#">Login</a></li>
        <li id="singUp-btn"><a href="#">Sign up</a></li>
       
      </ul>
    </div>
  </nav>
    
    `;

  navHolder.insertAdjacentElement("beforeend", navTamplate);
}
// if user are logged in
export function printNavUser() {
  navHolder.innerHTML = "";

  let navTamplate = `
      
      <nav class="navbar">
      <div class="brand-title">Awesome pictures</div>
  
      <a href="#" class="toggle-button">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </a>
      <div class="navbar-links">
        <ul>
          <li id="home-btn"><a href="#">Home</a></li>
          <li id="logOut-btn"><a href="#">LogOut</a></li>
          <li id="singUp-btn"><a href="#">Sign up</a></li>
          
        </ul>
      </div>
    </nav>
      
      `;

  navHolder.insertAdjacentElement("beforeend", navTamplate);
}

// if admin
export function printNavAdmin() {
  navHolder.innerHTML = "";

  let navTamplate = `
      
      <nav class="navbar">
      <div class="brand-title">Awesome pictures</div>
  
      <a href="#" class="toggle-button">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </a>
      <div class="navbar-links">
        <ul>
          <li id="home-btn"><a href="#">Home</a></li>
          <li id="login-btn"><a href="#">Login</a></li>
          <li id="singUp-btn"><a href="#">Sign up</a></li>
          <li id="admin-btn"><a href="#">Admin</a></li>
        </ul>
      </div>
    </nav>
      
      `;

  navHolder.insertAdjacentElement("beforeend", navTamplate);
}
