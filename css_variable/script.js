let inputs = document.querySelectorAll(".controls input");

function handleChange() {
  console.log(this.value);

  let surfix = this.dataset.spacing || "";

  // targeting css variable

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + surfix
  );
}

inputs.forEach((input) => {
  input.addEventListener("change", handleChange);
  input.addEventListener("mousemove", handleChange);
  input.addEventListener("touchmove", handleChange);
});
