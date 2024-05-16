// GLOBALS

const mainContentContainer = document.querySelector("main-content-container");

// const btnRead = document.querySelector(".btn-read");
// const togNotRead = document.querySelector(".tog-not-read");
// const togRead = document.querySelector(".tog-read");
// const togNotFave = document.querySelector(".tog-not-fave");
// const togFave = document.querySelector(".tog-fave");





// ALL TEMP BOOK DATA
const myLibrary = [];

// ADD NEW BOOKS VIA A CONSTRUCTOR AND ADD-BOOK FORM

class Book {
  constructor(id, title, author, type, pages, read, fave, imgsrc) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.type = type;
    this.pages = pages;
    this.read = read;
    this.fave = fave;
    this.imgsrc = imgsrc;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

// HARDCODED BOOKS
const book1 = new Book( 1, "The Hobbit", "J.R.R. Tolkien", "Fiction", 256, true,  false, "./assets/book-theHobbit.jpg");

const book2 = new Book(2, "The Greatest Knight", "Thomas Asbridge", "Non-fiction", 464, false, true, "./assets/book-theGreatestKnight.jpg");

addBookToLibrary(book1);
addBookToLibrary(book2);


console.log(myLibrary);


// DYNAMICALLY CREATE BOOK CARDS 

function createCard(card) {

const bookCard = document.createElement("book-card");
// bookCard.id = card.id;
bookCard.id = `${card.id}`;
// bookCard.className = "fic-non-border-color";


const bookCardContent = document.createElement("book-card-content");

const bookCardNavTop = document.createElement("book-card-nav-top");
    const editBtn = document.createElement("button");
    editBtn.className = "bk-btns btn-edit";
        const editBtnImg = document.createElement("img");
        editBtnImg.src = "./assets/card-edit.svg";
        editBtnImg.alt = "Edit button";
        editBtn.appendChild(editBtnImg);
    bookCardNavTop.appendChild(editBtn);
    const xOutBtn = document.createElement("button");
    xOutBtn.className = "bk-btns btn-x-out";
        const xOutBtnImg = document.createElement("img");
        xOutBtnImg.src = "./assets/card-x.svg";
        xOutBtnImg.alt = "Close window button";
        xOutBtn.appendChild(xOutBtnImg);
    bookCardNavTop.appendChild(xOutBtn);
bookCardContent.appendChild(bookCardNavTop);

const bookCardInfo = document.createElement("book-card-info");
    const bkTitle = document.createElement("p");
    bkTitle.className = "bk-title";
    bkTitle.innerText = `${card.title}`;
    bookCardInfo.appendChild(bkTitle);
    const bkAuthor = document.createElement("p");
    bkAuthor.className = "bk-author";
    bkAuthor.innerText =  `${card.author}`;
    bookCardInfo.appendChild(bkAuthor);
    const bkDetails = document.createElement("p");
    bkDetails.className = "bk-details";
    bkDetails.innerText = `${card.type}, ${card.pages} pages`;
    bookCardInfo.appendChild(bkDetails);
bookCardContent.appendChild(bookCardInfo);

// ***top and info, above... vs cover and bot, below...

const bookCardCover = document.createElement("book-card-cover");
    const bkCoverImg = document.createElement("img");
    bkDetails.className = "bk-cover";
    bkCoverImg.src = `${card.imgsrc}`;
    bookCardCover.appendChild(bkCoverImg);
bookCardContent.appendChild(bookCardCover);


const bookCardNavBot = document.createElement("book-card-nav-bot");

    const readBtn = document.createElement("button");
    readBtn.className = "bk-btns btn-read";
        const readBtnImg1 = document.createElement("img");
        readBtnImg1.className = "tog-not-read";
        readBtnImg1.src = "./assets/card-not-read.svg";
        readBtnImg1.alt = "Read button";
        readBtn.appendChild(readBtnImg1);
        const readBtnImg2 = document.createElement("img");
        readBtnImg2.className = "tog-read";
        readBtnImg2.src = "./assets/card-read.svg";
        readBtnImg2.alt = "Read button";
        readBtn.appendChild(readBtnImg2);
    bookCardNavBot.appendChild(readBtn);

    const infoBtn = document.createElement("button");
        infoBtn.className = "bk-btns btn-info";
        const infoBtnImg = document.createElement("img");
        infoBtnImg.src = "./assets/card-info.svg";
        infoBtnImg.alt = "Book info button";
        infoBtn.appendChild(infoBtnImg);
    bookCardNavBot.appendChild(infoBtn);

    const faveBtn = document.createElement("button");
    faveBtn.className = "bk-btns btn-fave";
        const faveBtnImg1 = document.createElement("img");
        faveBtnImg1.className = "tog-not-fave";
        faveBtnImg1.src = "./assets/card-not-fave.svg";
        faveBtnImg1.alt = "Favorite button";
        faveBtn.appendChild(faveBtnImg1);

        const faveBtnImg2 = document.createElement("img");
        faveBtnImg2.className = "tog-fave";
        faveBtnImg2.src = "./assets/card-fave.svg";
        faveBtnImg2.alt = "Favorite button";
        faveBtn.appendChild(faveBtnImg2);
    bookCardNavBot.appendChild(faveBtn);

bookCardContent.appendChild(bookCardNavBot);

bookCard.appendChild(bookCardContent);

return bookCard;
}

// THEN RENDER BOOK CARDS IN MAIN-CONTENT-CONTAINER

function renderCards() {
  mainContentContainer.innerHTML = "";
  myLibrary.forEach(function (card) {
    const cardElement = createCard(card);
    mainContentContainer.appendChild(cardElement); // Change innerHTML to appendChild
  });
}

renderCards();




// Reference only, delete when done...
    // if (card.read === false) {
    //   togNotRead.style.display = "flex";
    //   togRead.style.display = "none";
    //   btnRead.style.background = "var(--life-jacket)";
    // } else if (card.read === true) {
    //   togNotRead.style.display = "none";
    //   togRead.style.display = "flex";
    //   btnRead.style.background = "var(--dk-sea)";
    // }


// document.addEventListener("DOMContentLoaded", function () {
// function setInitReadFaveState(card) {


//     const btnRead = document.querySelector(".btn-read");
//     const togNotRead = document.querySelector(".tog-not-read");
//     const togRead = document.querySelector(".tog-read");
//     const btnFave = document.querySelector(".btn-fave");
//     const togNotFave = document.querySelector(".tog-not-fave");
//     const togFave = document.querySelector(".tog-fave");

//         console.log(myLibrary);
//         // console.log("togNotRead:", togNotRead);
//         // console.log("togRead:", togRead);
//         // console.log("btnRead:", btnRead);

//     // READ STATE
//     if (card.read === true) {
//         togNotRead.style.display = "none";
//         togRead.style.display = "flex";
//         btnRead.style.background = "var(--dk-sea)";
//     } else if (card.read === false) {
//         togNotRead.style.display = "flex";
//         togRead.style.display = "none";
//         btnRead.style.background = "var(--life-jacket)";
//     }

//     // FAVE STATE
//         if (card.fave === true) {
//           togNotFave.style.display = "none";
//           togFave.style.display = "flex";
//           btnFave.style.background = "var(--dk-sea)";
//         } else if (card.fave === false) {
//           togNotFave.style.display = "flex";
//           togFave.style.display = "none";
//           btnFave.style.background = "var(--life-jacket)";
//         }
// }

//     myLibrary.forEach(function(card) {
//         setInitReadFaveState(card);
//     });
// });

// ChatGPT said: 
// To fix this issue, you need to ensure that you're selecting the elements within the context of each card, rather than selecting globally from the entire document. One way to achieve this is by selecting the elements relative to each card within the setInitReadFaveState function.


document.addEventListener("DOMContentLoaded", function () {
  function setInitReadFaveState(card) {
    const cardContainer = document.getElementById(card.id);
    // Hitting cardContainer spreads it around...remember this!

    const btnRead = cardContainer.querySelector(".btn-read");
    const togNotRead = cardContainer.querySelector(".tog-not-read");
    const togRead = cardContainer.querySelector(".tog-read");
    const btnFave = cardContainer.querySelector(".btn-fave");
    const togNotFave = cardContainer.querySelector(".tog-not-fave");
    const togFave = cardContainer.querySelector(".tog-fave");

    // INITIAL READ STATE
    if (card.read === true) {
      togNotRead.style.display = "none";
      togRead.style.display = "flex";
      btnRead.style.background = "var(--dk-sea)";
    } else if (card.read === false) {
      togNotRead.style.display = "flex";
      togRead.style.display = "none";
      btnRead.style.background = "var(--life-jacket)";
    }

    // INITIAL FAVE STATE
    if (card.fave === true) {
      togNotFave.style.display = "none";
      togFave.style.display = "flex";
      btnFave.style.background = "var(--dk-sea)";
    } else if (card.fave === false) {
      togNotFave.style.display = "flex";
      togFave.style.display = "none";
      btnFave.style.background = "var(--life-jacket)";
    }

  }

  myLibrary.forEach(function (card) {
    setInitReadFaveState(card);
  });
});


// Get all book card elements
const bookCards = document.querySelectorAll('book-card');

bookCards.forEach(function (bookCard, id) {
const card = myLibrary[id];

  const btnInfo = bookCard.querySelector(".btn-info");
  const btnXOut = bookCard.querySelector(".btn-x-out");
  const btnRead = bookCard.querySelector(".btn-read");
  const btnFave = bookCard.querySelector(".btn-fave");
  const togNotRead = bookCard.querySelector(".tog-not-read");
  const togRead = bookCard.querySelector(".tog-read");
  const togNotFave = bookCard.querySelector(".tog-not-fave");
  const togFave = bookCard.querySelector(".tog-fave");
  const bookCardCover = bookCard.querySelector("book-card-cover");
  const bookCardNavBot = bookCard.querySelector("book-card-nav-bot");
  const bookCardInfo = bookCard.querySelector("book-card-info");
  const bookCardNavTop = bookCard.querySelector("book-card-nav-top");


  // I previously had these as none in CSS, but the initial button click failed, putting them here ended that singular lag and now it works without fail.
  //   togRead.style.display = "none";
  //   togFave.style.display = "none";

  // ADD EVENTLISTENERS FOR BOOK-CARD
  btnInfo.addEventListener("click", function () {
    showInfo(bookCardCover, bookCardNavBot, bookCardInfo, bookCardNavTop);
  });

  btnXOut.addEventListener("click", function () {
    hideInfo(bookCardCover, bookCardNavBot, bookCardInfo, bookCardNavTop);
  });

  btnRead.addEventListener("click", function () {
    toggleRead(togNotRead, togRead, btnRead);
  });

  btnFave.addEventListener("click", function () {
    toggleFave(togNotFave, togFave, btnFave);
  });
});

function showInfo(bookCardCover, bookCardNavBot, bookCardInfo, bookCardNavTop) {
  bookCardCover.style.display = "none";
  bookCardNavBot.style.display = "none";
  bookCardInfo.style.display = "flex";
  bookCardNavTop.style.display = "flex";
}

function hideInfo(bookCardCover, bookCardNavBot, bookCardInfo, bookCardNavTop) {
  bookCardCover.style.display = "flex";
  bookCardNavBot.style.display = "flex";
  bookCardInfo.style.display = "none";
  bookCardNavTop.style.display = "none";
}

function toggleRead(togNotRead, togRead, btnRead) {
  if (togRead.style.display === "none") {
    togNotRead.style.display = "none";
    togRead.style.display = "flex";
    btnRead.style.background = "var(--dk-sea)";
  } else {
    togNotRead.style.display = "flex";
    togRead.style.display = "none";
    btnRead.style.background = "var(--life-jacket)";
  }
}

function toggleFave(togNotFave, togFave, btnFave) {
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

const modalToggle = document.querySelector(".modal-toggle");

const menuBtnAdd = document.querySelector("#menu-btn-add");
const modalAdd = document.querySelector("#modal-add");
menuBtnAdd.addEventListener("click", showAddBookModal);

const btnXOutModal = document.querySelector(".btn-x-out-modal");
btnXOutModal.addEventListener("click", hideModal);

const inputs = document.querySelectorAll("input");

function showAddBookModal() {
  console.log("Add book...");
  modalToggle.style.display = "block";
  modalAdd.style.display = "block";
}

function hideModal() {
  console.log("Close modal...");
  modalToggle.style.display = "none";
  modalAdd.style.display = "none";
  inputs.forEach(function (input) {
    input.value = "";
  });
}

const formEnterBtn = document.querySelector(".form-enter-btn");
formEnterBtn.addEventListener("click", addBookToLibrary);

console.log(myLibrary);





console.log(myLibrary);