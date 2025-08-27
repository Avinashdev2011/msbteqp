const menuIcon = document.getElementById("menu-icon");
    const closeMenu = document.getElementById("close-menu");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIconContainer = document.getElementById("menu-icon-container");
    const closeMenuContainer = document.getElementById("close-menu-container");

    menuIcon.addEventListener("click", () => {
      mobileMenu.classList.remove("hidden");
      setTimeout(() => {
        mobileMenu.classList.remove("translate-y-[-100%]");
      }, 10);
      menuIconContainer.classList.add("hidden");
      closeMenuContainer.classList.remove("hidden");
    });

    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.add("translate-y-[-100%]");
      setTimeout(() => {
        mobileMenu.classList.add("hidden");
      }, 500);
      menuIconContainer.classList.remove("hidden");
      closeMenuContainer.classList.add("hidden");
    });

    function filterDepartments() {
      const filterValue = document.getElementById("department-filter").value;
      const departments = document.querySelectorAll('.department');

      departments.forEach(department => {
        if (filterValue === "" || department.id === filterValue) {
          department.classList.remove('hidden');
        } else {
          department.classList.add('hidden');
        }
      });
    }