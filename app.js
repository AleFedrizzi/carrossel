"use strict";

const images = [
    {"id": "1", "url":"./img/foto-1.jpg"},
    {"id": "2", "url":"./img/foto-2.jpg"},
    {"id": "3", "url":"./img/foto-3.jpg"},
    {"id": "4", "url":"./img/foto-4.jpg"},
    {"id": "5", "url":"./img/foto-5.jpg"},
    {"id": "6", "url":"./img/foto-6.jpg"},
    {"id": "7", "url":"./img/foto-7.jpg"},
    {"id": "8", "url":"./img/foto-8.jpg"},
]

const containerItems = document.querySelector("#container-itens");

const loadImages = (images, container) => {
    images.forEach (image => {
        container.innerHTML +=`
            <div class="item">
                <img src = "${image.url}"
            </div>
        `
    })
}


loadImages(images, containerItems);

let items = document.querySelectorAll(".item");

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll(".item");
}

const next = () => {
    const lastItems = items[items.length -1];
    containerItems.insertBefore(lastItems, items[0]);
    items = document.querySelectorAll(".item");
}


document.querySelector("#previous").addEventListener("click", previous);
document.querySelector("#next").addEventListener("click", next);