const generate_randomcolors = () => {
  // ============ rgb color code lies between 0 to 255 & math.ceil is converting the random number to nearest integer ============
  let first_rgba_colorcode = Math.ceil(0 + Math.random() * 255);
  let second_rgba_colorcode = Math.ceil(0 + Math.random() * 255);
  let third_rgba_colorcode = Math.ceil(0 + Math.random() * 255);
  return `rgb(${first_rgba_colorcode}, ${second_rgba_colorcode}, ${third_rgba_colorcode})`;
};

const all_boxes = document.querySelectorAll(".box");
all_boxes.forEach((each_box) => {
  each_box.style.backgroundColor = generate_randomcolors();
  each_box.textContent = generate_randomcolors();
});
