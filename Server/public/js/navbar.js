function loadNavbar() {
  const nav = document.getElementById("navbar");
  nav.innerHTML += 
    `<header class='logoContainer'>
        <img class='websiteIcon' src='/images/dog.png' alt='logo'>
        <a class='logo' href='http://localhost:3000/'>
          AdoptADog
        </a>
      </header>
      <ul class='navbarList' id='navbarList'>
        <li class='listItem'><a href='http://localhost:3000/' class='active'>Home</a></li>
        <li class='listItem'><a href='http://localhost:3000/dogs'>Adoption</a></li>
      </ul>
      <nav class='phoneMenu' id='toggleMenu'>
        <nav class='menuLine'></nav>
        <nav class='menuLine'></nav>
        <nav class='menuLine'></nav>
      </nav>`;

  const toggleMenu = document.getElementById("toggleMenu");
  const navbarList = document.getElementById("navbarList");

  toggleMenu.addEventListener("click", () => {
    navbarList.classList.toggle("active");
  });
}
