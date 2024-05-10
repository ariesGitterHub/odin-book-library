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

// BOOK COVER VS BOOK INFO MODE

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


// OTHER BOOK CARD BTNS



btnRead = document.querySelector("#btn-read");
btnFave = document.querySelector("#btn-fave");

togNotRead = document.querySelector(".tog-not-read");
togRead = document.querySelector(".tog-read");
togNotFave = document.querySelector(".tog-not-fave");
togFave = document.querySelector(".tog-fave");

// I previously had these as none in CSS, but the initial button click failed, putting them here ended that singular lag and now it works without fail.
togRead.style.display = "none";
togFave.style.display = "none";



btnRead.addEventListener("click", toggleRead);
btnFave.addEventListener("click", toggleFave);

function toggleRead() {
    console.log("TTTT");
    if ((togRead.style.display === "none")) {
      togNotRead.style.display = "none";
      togRead.style.display = "flex";
      btnRead.style.background = "var(--dk-sea)"
    } else {
      togNotRead.style.display = "flex";
      togRead.style.display = "none";
    btnRead.style.background = "var(--life-jacket)";
    }
}

function toggleFave() {
    console.log("BBBB");
    if (togFave.style.display === "none") {
        togNotFave.style.display = "none";
        togFave.style.display = "flex";
        btnFave.style.background = "var(--dk-sea)";
    } else {
        togNotFave.style.display = "flex";
        togFave.style.display = "none";
        btnFave.style.background = "var(--life-jacket)";    
    }
}