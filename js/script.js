const images = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

const showImage = () => {
  images.forEach((img) => img.classList.add("show"));
};

const hideImage = () => {
  images.forEach((img) => img.classList.remove("show"));
};

const hideItems = () => {
  listItems.forEach((item) => item.classList.remove("active"));
};

listItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    hideImage();
    hideItems();

    item.classList.add("active");
    images[index].classList.add("show");
  });
});
