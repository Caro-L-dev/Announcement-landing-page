const toggleMenu = (toggleId, navId) => {
    const toggle_btn = document.getElementById(toggleId),
      nav = document.getElementById(navId);
  
    if (toggle_btn && nav) {
      toggle_btn.addEventListener("click", () => {
        nav.classList.toggle("show");
      });
    }
  };
  
  toggleMenu("menu_toggle_btn", "nav__menu");