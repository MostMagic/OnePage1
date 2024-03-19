
addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", scrollY > 0)
})



const navbar = document.querySelector(".nav-bar");
    const menuButton = document.querySelector(".botao-menu");

    menuButton.addEventListener('click', () => {
      navbar.classList.toggle("show-menu");
    });


// function ativarAnimacao() {
//     var elemento = document.getElementsByTagName('Label');
//     elemento.classList.toggle('animation-linha');
//   }
  

