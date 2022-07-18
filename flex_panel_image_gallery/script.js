let panels = document.querySelectorAll(".panel");

      function handleOpen(e) {
        this.classList.toggle("open");
      }

      function handleTransationend(e) {
        console.log(e.propertyName);
        if (e.propertyName.includes("flex")) {
          this.classList.toggle("active");
        }
      }

      panels.forEach((panel) => {
        panel.addEventListener("click", handleOpen);
      });

      panels.forEach((panel) => {
        panel.addEventListener("transitionend", handleTransationend);
      });