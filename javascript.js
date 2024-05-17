const mainContentContainer = document.querySelector("main-content-container");

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

function addInitialBookToLibrary(book) {
  myLibrary.push(book);
}

// HARDCODED INITIAL BOOKS

const book1 = new Book( 1, "The Hobbit", "J.R.R. Tolkien", "Fiction", 256, true,  true, "./assets/book-theHobbit.jpg");

const book2 = new Book(2, "The Greatest Knight", "Thomas Asbridge", "Non-fiction", 464, true, true, "./assets/book-theGreatestKnight.jpg");

const book3 = new Book(3, "'Generic Cover' Test", "Rollo Tomassi", "Non-fiction", 1138, false, false, "./assets/book-icon.svg");

const book4 = new Book(4, "Dictionary of Heraldry", "Joseph Foster", "Non-fiction", 256, true, true, "./assets/book-dictionaryOfHeraldry.jpg");

const book5 = new Book(5, "Universal Principles of Design", "William Lidwell, Kritina Holden, Jill Butler", "Non-fiction", 216, true, false, "./assets/book-universalPrinciplesOfDesign.jpg");

const book6 = new Book(6, "The Plantagenets", "Dan Jones", "Non-fiction", 560, true, false, "./assets/book-thePlantagenets.jpg");

const book7 = new Book(7, "Dune", "Frank Herbert", "Fiction", 563, true, true, "./assets/book-dune.jpg"
);

const book8 = new Book(8, "Fritz Leiber's Fafhrd and the Gray Mouser", "Howard Chaykin, Mike Mignola, Al Williamson", "Fiction", 320, true, true, "./assets/book-fafhrdAndTheGrayMouser.jpg");

addInitialBookToLibrary(book1);
addInitialBookToLibrary(book2);
addInitialBookToLibrary(book3);
addInitialBookToLibrary(book4);
addInitialBookToLibrary(book5);
addInitialBookToLibrary(book6);
addInitialBookToLibrary(book7);
addInitialBookToLibrary(book8);

console.log(myLibrary);

// DYNAMICALLY CREATE BOOK CARDS 

function createCard(card) {

const bookCard = document.createElement("book-card");
// bookCard.id = card.id;
bookCard.id = `${card.id}`;
// bookCard.classList.add("fic-non-border-color");

//  INDENTATION BELOW WAS FOR MY OWN CLARITY WHILE CODING THIS UP...

const bookCardContent = document.createElement("book-card-content");

const bookCardNavTop = document.createElement("book-card-nav-top");
    const editBtn = document.createElement("button");
    editBtn.classList.add("bk-btns", "btn-edit");
        const editBtnImg = document.createElement("img");
        editBtnImg.src = "./assets/card-edit.svg";
        editBtnImg.alt = "Edit button";
        editBtn.appendChild(editBtnImg);
    bookCardNavTop.appendChild(editBtn);
    const xOutBtn = document.createElement("button");
    xOutBtn.classList.add("bk-btns", "btn-x-out");
        const xOutBtnImg = document.createElement("img");
        xOutBtnImg.src = "./assets/card-x.svg";
        xOutBtnImg.alt = "Close window button";
        xOutBtn.appendChild(xOutBtnImg);
    bookCardNavTop.appendChild(xOutBtn);
bookCardContent.appendChild(bookCardNavTop);

const bookCardInfo = document.createElement("book-card-info");
    const bkTitle = document.createElement("p");
    bkTitle.classList.add("bk-title");
    bkTitle.innerText = `${card.title}`;
    bookCardInfo.appendChild(bkTitle);
    const bkAuthor = document.createElement("p");
    bkAuthor.classList.add("bk-author");
    bkAuthor.innerText =  `by ${card.author}`;
    bookCardInfo.appendChild(bkAuthor);
    const bkDetails = document.createElement("p");
    bkDetails.classList.add("bk-details");
    bkDetails.innerText = `${card.type}, ${card.pages} pages`;
    bookCardInfo.appendChild(bkDetails);
bookCardContent.appendChild(bookCardInfo);

// SPECIAL EDIT BOOK FORM MODAL, NOT DISPLAYED UNTIL EDIT BTN CLICK

const bookCardNavTopEdit = document.createElement("book-card-nav-top-edit");

    const xOutBtn2 = document.createElement("button");
    xOutBtn2.classList.add("bk-btns", "btn-x-out2");
        const xOutBtnImg2 = document.createElement("img");
        xOutBtnImg2.src = "./assets/card-x.svg";
        xOutBtnImg2.alt = "Close window button";
        xOutBtn2.appendChild(xOutBtnImg2);
    bookCardNavTopEdit.appendChild(xOutBtn2);
bookCardContent.appendChild(bookCardNavTopEdit);

const editBookForm = document.createElement("form");
    editBookForm.classList.add("edit-book-form");

    const editTitleLabel = document.createElement("label");
    editTitleLabel.for = "edit-title";
    editTitleLabel.innerText = "Title";
    editBookForm.appendChild(editTitleLabel);

    const editTitleInput = document.createElement("input");
    editTitleInput.type = "text";
    editTitleInput.classList.add("edit-title");
    editTitleInput.value = `${card.title}`;
    editBookForm.appendChild(editTitleInput);

    const editAuthorLabel = document.createElement("label");
    editAuthorLabel.for = "edit-author";
    editAuthorLabel.innerText = "Author";
    editBookForm.appendChild(editAuthorLabel);

    const editAuthorInput = document.createElement("input");
    editAuthorInput.type = "text";
    editAuthorInput.classList.add("edit-author");
    editAuthorInput.value = `${card.author}`;
    editBookForm.appendChild(editAuthorInput);

    const editPageLabel = document.createElement("label");
    editPageLabel.for = "edit-page";
    editPageLabel.innerText = "Page Number";
    editBookForm.appendChild(editPageLabel);

    const editPageInput = document.createElement("input");
    editPageInput.type = "text";
    editPageInput.classList.add("edit-page");
    editPageInput.value = `${card.pages}`;
    editBookForm.appendChild(editPageInput);
bookCardContent.appendChild(editBookForm);

// ***bookCardNavTop and bookCardInfo, above... vs bookCardCover and bookCardNavBot, below...

const bookCardCover = document.createElement("book-card-cover");
    const bkCoverImg = document.createElement("img");
    bkDetails.classList.add("bk-cover");
    bkCoverImg.src = `${card.imgsrc}`;
    bookCardCover.appendChild(bkCoverImg);
bookCardContent.appendChild(bookCardCover);

const bookCardNavBot = document.createElement("book-card-nav-bot");

    const readBtn = document.createElement("button");
    readBtn.classList.add("bk-btns", "btn-read");
        const readBtnImg1 = document.createElement("img");
        readBtnImg1.classList.add("tog-not-read");
        readBtnImg1.src = "./assets/card-not-read.svg";
        readBtnImg1.alt = "Read button";
        readBtn.appendChild(readBtnImg1);
        const readBtnImg2 = document.createElement("img");
        readBtnImg2.classList.add("tog-read");
        readBtnImg2.src = "./assets/card-read.svg";
        readBtnImg2.alt = "Read button";
        readBtn.appendChild(readBtnImg2);
    bookCardNavBot.appendChild(readBtn);

    const infoBtn = document.createElement("button");
        infoBtn.classList.add("bk-btns", "btn-info");
        const infoBtnImg = document.createElement("img");
        infoBtnImg.src = "./assets/card-info.svg";
        infoBtnImg.alt = "Book info button";
        infoBtn.appendChild(infoBtnImg);
    bookCardNavBot.appendChild(infoBtn);

    const faveBtn = document.createElement("button");
    faveBtn.classList.add("bk-btns", "btn-fave");
        const faveBtnImg1 = document.createElement("img");
        faveBtnImg1.classList.add("tog-not-fave");
        faveBtnImg1.src = "./assets/card-not-fave.svg";
        faveBtnImg1.alt = "Favorite button";
        faveBtn.appendChild(faveBtnImg1);

        const faveBtnImg2 = document.createElement("img");
        faveBtnImg2.classList.add("tog-fave");
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
    mainContentContainer.appendChild(cardElement);
  });

  // document.addEventListener("DOMContentLoaded", function () {
    const bookCards = document.querySelectorAll("book-card");

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

      const btnEdit = bookCard.querySelector(".btn-edit");
      const editBook = bookCard.querySelector(".edit-book-form");
      const bookCardNavTopEdit = bookCard.querySelector("book-card-nav-top-edit");
      const btnXOut2 = bookCard.querySelector(".btn-x-out2");
  
      // I previously had these as none in CSS, but the initial button click failed, putting them here ended that singular lag and now it works without fail.
      //   togRead.style.display = "none";
      //   togFave.style.display = "none";

      // ADD EVENT LISTENERS FOR BOOK-CARD
      
      

      btnEdit.addEventListener("click", function() {
      showEdit(
        bookCardCover,
        bookCardNavBot,
        bookCardInfo,
        bookCardNavTop,
        editBook,
        bookCardNavTopEdit
      );
      })

      btnInfo.addEventListener("click", function () {
        showInfo(
          bookCardCover,
          bookCardNavBot,
          bookCardInfo,
          bookCardNavTop,
          editBook,
          bookCardNavTopEdit
        );
      });

      btnXOut.addEventListener("click", function () {
        showCover(
          bookCardCover,
          bookCardNavBot,
          bookCardInfo,
          bookCardNavTop,
          editBook,
          bookCardNavTopEdit
        );
      });

      btnXOut2.addEventListener("click", function () {
        showCover(
          bookCardCover,
          bookCardNavBot,
          bookCardInfo,
          bookCardNavTop,
          editBook,
          bookCardNavTopEdit
        );
      });

      console.log("btnXOut:", btnXOut);

      btnRead.addEventListener("click", function () {
        toggleRead(togNotRead, togRead, btnRead);
      });

      btnFave.addEventListener("click", function () {
        toggleFave(togNotFave, togFave, btnFave);
      });
    });

    function showCover(
      // hides info
      // hides edit
      bookCardCover,
      bookCardNavBot,
      bookCardInfo,
      bookCardNavTop,
      editBook,
      bookCardNavTopEdit
    ) {
      bookCardCover.style.display = "flex";
      bookCardNavBot.style.display = "flex";
      bookCardInfo.style.display = "none";
      bookCardNavTop.style.display = "none";
      editBook.style.display = "none";
      bookCardNavTopEdit.style.display = "none";
    }

    function showInfo(
      // hides cover
      // hides edit
      bookCardCover,
      bookCardNavBot,
      bookCardInfo,
      bookCardNavTop,
      editBook,
      bookCardNavTopEdit
    ) {
      bookCardCover.style.display = "none";
      bookCardNavBot.style.display = "none";
      bookCardInfo.style.display = "flex";
      bookCardNavTop.style.display = "flex";
      editBook.style.display = "none";
      bookCardNavTopEdit.style.display = "none";
    }

    function showEdit(
      // hides cover
      // hides info
      bookCardCover,
      bookCardNavBot,
      bookCardInfo,
      bookCardNavTop,
      editBook,
      bookCardNavTopEdit
    ) {
      bookCardCover.style.display = "none";
      bookCardNavBot.style.display = "none";
      bookCardInfo.style.display = "none";
      bookCardNavTop.style.display = "none";
      editBook.style.display = "flex";
      bookCardNavTopEdit.style.display = "flex";
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

      function setInitReadFaveState(card) {
        const cardContainer = document.getElementById(card.id);
        // Hitting cardContainer spreads it around...remember this!

        // const ficNonBorderColor = cardContainer.querySelector(".fic-non-border-color");

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

        // INITIAL TYPE STATE
//         if (card.type === "Fiction") {
//           ficNonBorderColor.style.borderColor = "var(--sea)";
// ;        } else if (card.type === "Non-fiction") {
//           ficNonBorderColor.style.borderColor = "var(--candle)";
//         }
      }
      myLibrary.forEach(function (card) {
        setInitReadFaveState(card);
      });

}

renderCards();


// MAKE BOOK-CARD BUTTONS WORK ... COME BACK TO DO EDIT BUTTON VIA ANOTHER MODAL...

// document.addEventListener("DOMContentLoaded", function() {
//   const bookCards = document.querySelectorAll('book-card');

//   bookCards.forEach(function (bookCard, id) {
//   const card = myLibrary[id];

//     const btnInfo = bookCard.querySelector(".btn-info");
//     const btnXOut = bookCard.querySelector(".btn-x-out");
//     const btnRead = bookCard.querySelector(".btn-read");
//     const btnFave = bookCard.querySelector(".btn-fave");
//     const togNotRead = bookCard.querySelector(".tog-not-read");
//     const togRead = bookCard.querySelector(".tog-read");
//     const togNotFave = bookCard.querySelector(".tog-not-fave");
//     const togFave = bookCard.querySelector(".tog-fave");
//     const bookCardCover = bookCard.querySelector("book-card-cover");
//     const bookCardNavBot = bookCard.querySelector("book-card-nav-bot");
//     const bookCardInfo = bookCard.querySelector("book-card-info");
//     const bookCardNavTop = bookCard.querySelector("book-card-nav-top");


//     // I previously had these as none in CSS, but the initial button click failed, putting them here ended that singular lag and now it works without fail.
//     //   togRead.style.display = "none";
//     //   togFave.style.display = "none";

//     // ADD EVENTLISTENERS FOR BOOK-CARD
//     btnInfo.addEventListener("click", function () {
//       showInfo(bookCardCover, bookCardNavBot, bookCardInfo, bookCardNavTop);
//     });

//     btnXOut.addEventListener("click", function () {
//       hideInfo(bookCardCover, bookCardNavBot, bookCardInfo, bookCardNavTop);
//     });

//     btnRead.addEventListener("click", function () {
//       toggleRead(togNotRead, togRead, btnRead);
//     });

//     btnFave.addEventListener("click", function () {
//       toggleFave(togNotFave, togFave, btnFave);
//     });
//   });

//   function showInfo(bookCardCover, bookCardNavBot, bookCardInfo, bookCardNavTop) {
//     bookCardCover.style.display = "none";
//     bookCardNavBot.style.display = "none";
//     bookCardInfo.style.display = "flex";
//     bookCardNavTop.style.display = "flex";
//   }

//   function hideInfo(bookCardCover, bookCardNavBot, bookCardInfo, bookCardNavTop) {
//     bookCardCover.style.display = "flex";
//     bookCardNavBot.style.display = "flex";
//     bookCardInfo.style.display = "none";
//     bookCardNavTop.style.display = "none";
//   }

//   function toggleRead(togNotRead, togRead, btnRead) {
//     if (togRead.style.display === "none") {
//       togNotRead.style.display = "none";
//       togRead.style.display = "flex";
//       btnRead.style.background = "var(--dk-sea)";
//     } else {
//       togNotRead.style.display = "flex";
//       togRead.style.display = "none";
//       btnRead.style.background = "var(--life-jacket)";
//     }
//   }

//   function toggleFave(togNotFave, togFave, btnFave) {
//     if (togFave.style.display === "none") {
//       togNotFave.style.display = "none";
//       togFave.style.display = "flex";
//       btnFave.style.background = "var(--dk-sea)";
//     } else {
//       togNotFave.style.display = "flex";
//       togFave.style.display = "none";
//       btnFave.style.background = "var(--life-jacket)";
//     }
//   }
// })

// MODALS

const addBookDialog = document.querySelector("#add-book-dialog");

const menuBtnAdd = document.querySelector("#menu-btn-add");
  menuBtnAdd.addEventListener("click", function() {
  addBookDialog.showModal();

})

function clearModalFormData() {
  const inputs = document.querySelectorAll("input");
      inputs.forEach(function (input) {
      input.value = "";
      input.checked = false;
    });
}

function closeModal() {
  const btnXOutModal = document.querySelector(".btn-x-out-modal");
  const inputs = document.querySelectorAll("input");
  btnXOutModal.addEventListener("click", function () {
    inputs.forEach(function (input) {
      input.value = "";
      input.checked = false;
    });
    clearModalFormData();
    addBookDialog.close();
  });
}
closeModal();

const addBookEnterBtn = document.querySelector("#add-book-enter-btn");
addBookEnterBtn.addEventListener("click", addFormBookToLibrary)

function addFormBookToLibrary() {

  const idCount = myLibrary.length + 1;
  const inputTitle = document.querySelector("#input-title").value;
  const inputAuthor = document.querySelector("#input-author").value;

  const radioFiction = document.querySelector("#radio-fiction");
  const radioNonFiction = document.querySelector("#radio-non-fiction");
    let valueFicNonFic = null;
    if (radioFiction.checked) {
      valueFicNonFic = radioFiction.value;
    } else if (radioNonFiction.checked) {
      valueFicNonFic = radioNonFiction.value;
    }

  const inputPages = document.querySelector("#input-pages").value;

  const radioReadIt = document.querySelector("#radio-read-it");
  const radioNotReadIt = document.querySelector("#radio-not-read-it");
    let valueReadNotRead = null;
    if (radioReadIt.checked) {
      valueReadNotRead = true;
    } else if (radioNotReadIt.checked) {
      valueReadNotRead = false;
    }

  const radioFave = document.querySelector("#radio-fave");
  const radioNotFave = document.querySelector("#radio-not-fave");
    let valueFaveNotFave = null;
    if (radioFave.checked) {
      valueFaveNotFave = true;
    } else if (radioNotFave.checked) {
      valueFaveNotFave = false;
    }

  const inputCoverUrl = document.querySelector("#input-cover-url");
    let valueCoverUrl = null;
    if (inputCoverUrl.value === "") {
      valueCoverUrl = "./assets/book-icon.svg";
    } else {
      valueCoverUrl = inputCoverUrl.value;
    }

    const titleCheck = document.querySelector("input[name='book-title']");
    const authorCheck = document.querySelector("input[name='book-author']");
    const ficNonFicCheck = document.querySelector("input[name='book-type']:checked");

    const pageCheck = document.querySelector("input[name='book-pages']");

    const readStatusCheck = document.querySelector("input[name='read-status']:checked");

    const faveStatusCheck = document.querySelector("input[name='fave-status']:checked");

  if (
    titleCheck.value === "" ||
    authorCheck.value === "" ||
    !ficNonFicCheck ||
    pageCheck.value === "" ||
    !readStatusCheck ||
    !faveStatusCheck
  ) {
    return false
  } else {
      myLibrary.push(
      new Book(
        idCount,
        inputTitle,
        inputAuthor,
        valueFicNonFic,
        inputPages,
        valueReadNotRead,
        valueFaveNotFave,
        valueCoverUrl
      )
    );
  }

  console.log(myLibrary);

  renderCards();
  addBookDialog.close();
  clearModalFormData();
}

// function showEditForm() {
//   console.log("Edit form btn test...");

//   const editBookDialog = document.querySelector(".edit-book-dialog")
//   editBookDialog.style.
// }

console.log(myLibrary);