const navbarScroll = () => {
  const navbar = document.querySelector(".navbar-hostit");
  const navLine = document.querySelector(".nav-line");
  const logo = document.querySelector(".brand-logo");
  const avatar = document.querySelector(".avatar-card");
  const dropDown = document.querySelector(".dropdown-hostit");

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 120 ||
      document.documentElement.scrollTop > 120
    ) {
      navbar.style.height = "80px";
      navLine.style.height = "80px";
      logo.style.height = "60px";
      logo.style.width = "80px";
      avatar.style.height = "60px";
      avatar.style.width = "45px";
      dropDown.style.top = "80px";
    } else {
      navbar.style.height = "120px";
      navLine.style.height = "36px";
      logo.style.height = "100px";
      logo.style.width = "130px";
      avatar.style.height = "80px";
      avatar.style.width = "60px";
      dropDown.style.top = "110px";
    }
  };

  window.onscroll = function () {
    scrollFunction();
  };
};

export { navbarScroll };
