const openModel = document.querySelector('.open-model');

const closeModel = document.querySelector(".close-model");

const model = document.querySelector('.model-overly');

openModel.onclick = function () {
    model.classList.add("show-model");
};

closeModel.onclick = function () {
    model.classList.remove("show-model");
}