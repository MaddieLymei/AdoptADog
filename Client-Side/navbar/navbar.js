function loadNavbar() {
    document.write("<nav class='navbar'><header class='logoContainer'><a href='#home'><img class='websiteIcon' src='../navbar/dog.png' alt='logo'></a><a class='logo' href='#home'>AdoptADog</a> </header><ul class='navbarList' id='navbarList'><li class='listItem'><a href='#home' class='active'>Home</a></li><li class='listItem'><a href='#news'>Adoption</a></li></ul><nav class='phoneMenu' id='toggleMenu'><nav class='menuLine'></nav><nav class='menuLine'></nav><nav class='menuLine'></nav></nav></nav>");
    const toggleMenu = document.getElementById("toggleMenu");
    const navbarList = document.getElementById("navbarList");

    toggleMenu.addEventListener('click', () => {
        navbarList.classList.toggle('active');
    });

}

