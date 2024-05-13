
const myLibrary = [
  {
    id: "1",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    type: "Fiction",
    pages: 256,
    read: true,
    fave: true,
    imgsrc: "./assets/book-theHobbit.jpg",
  },

  {
    id: "2",
    title: "The Greatest Knight",
    author: "Thomas Asbridge",
    type: "Non-fiction",
    pages: 464,
    read: true,
    fave: true,
    imgsrc: "./assets/book-theGreatestKnight.jpg",
  },

  {
    id: "3",
    title: "Dictionary of Heraldry",
    author: "joseph Foster",
    type: "Non-fiction",
    pages: 256,
    read: true,
    fave: true,
    imgsrc: "./assets/book-dictionaryOfHeraldry.jpg",
  },

  {
    id: "4",
    title: "Universal Principles of Design",
    author: "William Lidwell, Kritina Holden, Jill Butler",
    type: "Non-fiction",
    pages: 216,
    read: true,
    fave: false,
    imgsrc: "./assets/book-universalPrinciplesOfDesign.jpg",
  },

  {
    id: "5",
    title: "The Plantagenets",
    author: "Dan Jones",
    type: "Non-fiction",
    pages: 560,
    read: true,
    fave: false,
    imgsrc: "./assets/book-thePlantagenets.jpg",
  },

  {
    id: "6",
    title: "Dune",
    author: "Frank Herbert",
    type: "Fiction",
    pages: 563,
    read: true,
    fave: true,
    imgsrc: "./assets/book-dune.jpg",
  },
];

// console.log(myLibrary);

class Book {
  constructor(id, title, author, type, pages, read, fave,
      imgsrc) {
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

const modalToggle = document.querySelector(".modal-toggle");

const menuBtnAdd = document.querySelector("#menu-btn-add");
const modalAdd = document.querySelector("#modal-add");
menuBtnAdd.addEventListener("click", addBookToLibrary);

const btnXOutModal = document.querySelector(".btn-x-out-modal");
btnXOutModal.addEventListener("click", hideModal);
const inputs = document.querySelectorAll("input");

function hideModal() {
    console.log("Close modals...");
    modalToggle.style.display = "none";
    modalAdd.style.display = "none";
    inputs.forEach(function(input) {
        input.value = "";
    });
}

function addBookToLibrary() {
    console.log("Add book...");
    modalToggle.style.display = "block";
    modalAdd.style.display = "block";
}

function createCard(card) {
    return `
        <book-card id="${card.id}">
            <book-card-content>
                <book-card-nav-top>
                    <button class="bk-btns btn-edit">
                        <img src="./assets/card-edit.svg" alt="">
                    </button>
                    <button class="bk-btns btn-x-out">
                        <img src="./assets/card-x.svg" alt="">
                    </button>
                </book-card-nav-top>
                <book-card-info>
                    <p class="bk-title">${card.title}</p> 
                    <p class="bk-author">${card.author}</p>
                    <p class="bk-details">${card.type}, ${card.pages} pages </p>
                </book-card-info> 
                <book-card-cover>
                    <img src="${card.imgsrc}" alt="">
                </book-card-cover>  
                <book-card-nav-bot>
                    <button class="bk-btns btn-read">
                        <img class="tog-not-read" src="./assets/card-not-read.svg" alt="">
                        <img class="tog-read" src="./assets/card-read.svg" alt="">
                    </button>
                    <button class="bk-btns btn-info">
                        <img src="./assets/card-info.svg" alt="">
                    </button>
                    <button class="bk-btns btn-fave">
                        <img class="tog-not-fave" src="./assets/card-not-fave.svg" alt="">
                        <img class="tog-fave" src="./assets/card-fave.svg" alt="">
                    </button>
                </book-card-nav-bot>
            </book-card-content>
        </book-card>
    `;
    
}



function renderCards() {
    const mainContentContainer = document.querySelector("main-content-container");

    mainContentContainer.innerHTML = "";

    myLibrary.forEach(function(card) {
        const cardHtml = createCard(card);
        mainContentContainer.innerHTML += cardHtml;
    })

}

renderCards()




// BOOK-CARD BTNS
// Get all book card elements
const bookCards = document.querySelectorAll('book-card');



// FOREACH LOOP THROUGH EACH BOOK-CARD
bookCards.forEach(function(bookCard, id) {

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

  function setInitReadState() {

    const card = myLibrary[id];  

    if (card.read === true) {
      togNotRead.style.display = "none";
      togRead.style.display = "flex";
      btnRead.style.background = "var(--dk-sea)";
    } else if (card.read === false) {
      togNotRead.style.display = "flex";
      togRead.style.display = "none";
      btnRead.style.background = "var(--life-jacket)";
    }
  }

  setInitReadState();

    function setInitFaveState() {
      const card = myLibrary[id];

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

    setInitFaveState();


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
    if (togRead.style.display === 'none') {
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
    if (togFave.style.display === 'none') {
        togNotFave.style.display = "none";
        togFave.style.display = "flex";
        btnFave.style.background = "var(--dk-sea)";
    } else {
        togNotFave.style.display = "flex";
        togFave.style.display = "none";
        btnFave.style.background = "var(--life-jacket)";
    }
}
