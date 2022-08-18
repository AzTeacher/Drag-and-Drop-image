let itemImages = document.querySelectorAll(".itemImage");
let box = document.querySelectorAll(".box");

for (let i = 0; i < itemImages.length; i++) {
    itemImages[i].addEventListener("dragstart", dragStart);
    itemImages[i].addEventListener("dragend", dragEnd);
}


function dragStart() {
    setTimeout(() => (this.className = "none"), 0);
}

function dragEnd() {
    setTimeout(() => (this.className = "itemImage"), 0);
    alert("Secdiyiniz resmi bos qutuya yerlesdirmediniz. Tekrar edin");
}

for (let j = 0; j < box.length; j++) {
    box[j].addEventListener("dragover", dragOver);
    box[j].addEventListener("dragenter", dragEnter);
    box[j].addEventListener("dragleave", dragLeave);
    box[j].addEventListener("drop", dragDrop);

    box[j].addEventListener("dragstart", dragStartBox);

    function dragStartBox(e) {
        e.preventDefault();
        alert("Yerlesdirilen Sekili bir daha Drag Ede bilmezsiniz");

    }
}


function dragOver(e) {
    e.preventDefault();
    this.className += " dashed";

}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {
    this.classList.remove('dashed');
}

function dragDrop() {
    let img = document.querySelector("div.selectImage > div.none > img");
    this.className = "itemImage";
    this.append(img);
}