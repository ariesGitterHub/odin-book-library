// const myLibrary = [
//     {
//         title: "The Hobbit",
//         author: "J.R.R. Tolkien",
//         type: "Fiction",
//         genre: "Young Adult",
//         pages: 256,
//         read: "Yes"
//     }
// ];

const myLibrary = [];

console.log(myLibrary);

class Book {
  constructor(title, author, type, genre, pages, imgsrc, read) {
    this.title = title;
    this.author = author;
    this.type = type;
    this.genre = genre;
    this.pages = pages;
    this.imgsrc = imgsrc;
    this.read = read
  }
}

function addBookToLibrary() {
  // do stuff here
}


btnInfo = document.querySelector("#btn-info");
btnXout = document.querySelector("#btn-xout");

bookCardCover = document.querySelector("book-card-cover");
bookCardNavBot = document.querySelector("book-card-nav-bot");

bookCardInfo = document.querySelector("book-card-info");
bookCardNavTop = document.querySelector("book-card-nav-top");

btnInfo.addEventListener("click", showInfo);
btnXout.addEventListener("click", hideInfo);

function showInfo() {
    bookCardCover.style.display = "none";
    bookCardNavBot.style.display = "none";

    bookCardInfo.style.display = "flex";
    bookCardNavTop.style.display = "flex";
}

function hideInfo() {
    bookCardCover.style.display = "flex";
    bookCardNavBot.style.display = "flex";

    bookCardInfo.style.display = "none";
    bookCardNavTop.style.display = "none";
}


