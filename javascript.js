const mainContentContainer = document.querySelector("main-content-container");


// ALL TEMP BOOK DATA

let myLibrary = [];

function alphabetizeLibrary() {
  const alphabetical = myLibrary.sort((a, b) => {
    // Function to remove the, a , an from titles
    const removeLeadingArticle = (title) => {
      const articles = ["the", "a", "an"];
      const words = title.split(/\s+/);
      if (articles.includes(words[0].toLowerCase())) {
        return words.slice(1).join(" ");
      }
      return title;
    };

    // Removes articles / compare titles
    const titleA = removeLeadingArticle(a.title);
    const titleB = removeLeadingArticle(b.title);
    return titleA.localeCompare(titleB);
  });
//  console.log("Alphabetical is " + alphabetical);

}
alphabetizeLibrary();

// NEW BOOKS CONSTRUCTOR 

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
  alphabetizeLibrary();
}


// HARDCODED INITIAL BOOKS

const book1 = new Book("b0", "The Hobbit", "J.R.R. Tolkien", "Fiction", 256, true,  true, "./assets/book-theHobbit.jpg");

const book2 = new Book("b1", "The Greatest Knight", "Thomas Asbridge", "Non-fiction", 464, true, true, "./assets/book-theGreatestKnight.jpg");

const book3 = new Book("b2", "This is just 'Generic Book Cover' Test (it works!)", "Rollo Tomassi", "Non-fiction", 1138, false, false, "./assets/book-icon.svg");

const book4 = new Book("b3", "Dictionary of Heraldry", "Joseph Foster", "Non-fiction", 256, true, true, "./assets/book-dictionaryOfHeraldry.jpg");

const book5 = new Book("b4", "Universal Principles of Design", "William Lidwell, Kritina Holden, Jill Butler", "Non-fiction", 216, true, false, "./assets/book-universalPrinciplesOfDesign.jpg");

const book6 = new Book("b5", "The Plantagenets", "Dan Jones", "Non-fiction", 560, true, false, "./assets/book-thePlantagenets.jpg");

const book7 = new Book("b6", "Dune", "Frank Herbert", "Fiction", 563, true, true, "./assets/book-dune.jpg"
);

const book8 = new Book("b7", "Fritz Leiber's Fafhrd and the Gray Mouser", "Howard Chaykin, Mike Mignola, Al Williamson", "Fiction", 320, true, true, "./assets/book-fafhrdAndTheGrayMouser.jpg");

const book9 = new Book("b8", "A Confederacy of Dunces", "John Kennedy Toole", "Fiction", 405, true, true, "./assets/book-aConfederacyOfDunces.jpg");

addInitialBookToLibrary(book1);
addInitialBookToLibrary(book2);
addInitialBookToLibrary(book3);
addInitialBookToLibrary(book4);
addInitialBookToLibrary(book5);
addInitialBookToLibrary(book6);
addInitialBookToLibrary(book7);
addInitialBookToLibrary(book8);
addInitialBookToLibrary(book9);

console.log(myLibrary);


// STICKY HEADER ON SCROLL

const buttonCtrlContainer = document.querySelector("button-ctrl-container");

// Get the offset position of the header, READ MORE ABOUT THIS TOO...
const sticky = buttonCtrlContainer.offsetTop;

// Function toggles .sticky based on scroll position
function toggleSticky() {
  // Cache the scroll position? What?
  const scrollPosition = window.scrollY;
  
  // This toggles the .sticky based on scroll position
  buttonCtrlContainer.classList.toggle("sticky", scrollPosition > sticky);
}

// Debounce function to improve performance, STUDY UP ON THIS MORE...
function debounce(func, delay) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}

// Add event listener for scroll event with debouncing
window.addEventListener("scroll", debounce(toggleSticky, 10));


// DYNAMICALLY CREATE BOOK CARDS 

function createCard(card) {
  const bookCard = document.createElement("book-card");
  bookCard.id = `${card.id}`;

    const bookCardNavTop = document.createElement("book-card-nav-top");
      const editBtn = document.createElement("button");
      editBtn.classList.add("book-card-round-btns", "btn-edit");
        const editBtnImg = document.createElement("img");
        editBtnImg.src = "./assets/card-edit.svg";
        editBtnImg.alt = "Edit button";
      editBtn.appendChild(editBtnImg);
    bookCardNavTop.appendChild(editBtn);

      const xOutBtn = document.createElement("button");
      xOutBtn.classList.add("book-card-round-btns", "btn-x-out");
        const xOutBtnImg = document.createElement("img");
        xOutBtnImg.src = "./assets/card-x.svg";
        xOutBtnImg.alt = "Close window button";
      xOutBtn.appendChild(xOutBtnImg);
    bookCardNavTop.appendChild(xOutBtn);

  bookCard.appendChild(bookCardNavTop);

    const bookCardInfo = document.createElement("book-card-info");
      const bkTitle = document.createElement("p");
      bkTitle.classList.add("bk-title");
      bkTitle.innerText = `${card.title}`;
    bookCardInfo.appendChild(bkTitle);
      const bkAuthor = document.createElement("p");
      bkAuthor.classList.add("bk-author");
      bkAuthor.innerText = `by ${card.author}`;
    bookCardInfo.appendChild(bkAuthor);
      const bkDetails = document.createElement("p");
      bkDetails.classList.add("bk-details");
      bkDetails.innerText = `${card.type}, ${card.pages} pages`;
    bookCardInfo.appendChild(bkDetails);

  bookCard.appendChild(bookCardInfo);

  // SPECIAL EDIT BOOK FORM MODAL, NOT DISPLAYED UNTIL EDIT BTN CLICKED
    const bookCardNavTopEdit = document.createElement("book-card-nav-top-edit");
      const flexDiv2 = document.createElement("div");
        flexDiv2.classList.add("flex-div2");
        const deleteBookBtn = document.createElement("button");
        deleteBookBtn.type = "button";
        deleteBookBtn.classList.add("other-btn");
        deleteBookBtn.id = "delete-book";
        deleteBookBtn.innerText = "Delete";
      flexDiv2.appendChild(deleteBookBtn);
        const updateBookBtn = document.createElement("button");
        updateBookBtn.type = "button";
        updateBookBtn.classList.add("other-btn");
        updateBookBtn.id = "update-book";
        updateBookBtn.innerText = "Update";
      flexDiv2.appendChild(updateBookBtn);
      const xOutBtn2 = document.createElement("button");
        xOutBtn2.classList.add("book-card-round-btns", "btn-x-out2");
          const xOutBtnImg2 = document.createElement("img");
          xOutBtnImg2.src = "./assets/card-x.svg";
          xOutBtnImg2.alt = "Close window button";
        xOutBtn2.appendChild(xOutBtnImg2);
      flexDiv2.appendChild(xOutBtn2);
    bookCardNavTopEdit.appendChild(flexDiv2);

  bookCard.appendChild(bookCardNavTopEdit);

    const editBookForm = document.createElement("form");
    editBookForm.classList.add("edit-book-form");
      const editTitleLabel = document.createElement("label");
      editTitleLabel.classList.add("non-radio-edit-label");
      editTitleLabel.htmlFor = `edit-title${card.id}`;
      editTitleLabel.innerText = "Title";
    editBookForm.appendChild(editTitleLabel);
      const editTitleInput = document.createElement("input");
      editTitleInput.type = "text";
      editTitleInput.classList.add("edit-title");
      editTitleInput.id = `edit-title${card.id}`;
      editTitleInput.value = `${card.title}`;
    editBookForm.appendChild(editTitleInput);
      const editAuthorLabel = document.createElement("label");
      editAuthorLabel.classList.add("non-radio-edit-label");
      editAuthorLabel.htmlFor = `edit-author${card.id}`;
      editAuthorLabel.innerText = "Author";
    editBookForm.appendChild(editAuthorLabel);
      const editAuthorInput = document.createElement("input");
      editAuthorInput.type = "text";
      editAuthorInput.classList.add("edit-author");
      editAuthorInput.id = `edit-author${card.id}`;
      editAuthorInput.value = `${card.author}`;
    editBookForm.appendChild(editAuthorInput);

      const flexDiv1 = document.createElement("div");
      flexDiv1.classList.add("flex-div1");
        const editTypeFicInput = document.createElement("input");
        editTypeFicInput.type = "radio";
        editTypeFicInput.classList.add("edit-type");
        editTypeFicInput.id = `edit-fiction${card.id}`;
        editTypeFicInput.name = "edit-type";
        editTypeFicInput.checked = card.type === "Fiction"; // Set checked to true if card.type is "Fiction"
        editTypeFicInput.value = "Fiction";
      flexDiv1.appendChild(editTypeFicInput);
        const editTypeFicLabel = document.createElement("label");
        // editTypeFicLabel.classList.add("label-radio");
        editTypeFicLabel.classList.add("radio-edit-label");
        editTypeFicLabel.htmlFor = `edit-fiction${card.id}`;
        editTypeFicLabel.innerText = "Fiction";
      flexDiv1.appendChild(editTypeFicLabel);
        const editTypeNonInput = document.createElement("input");
        editTypeNonInput.type = "radio";
        editTypeNonInput.classList.add("edit-type");
        editTypeNonInput.id = `edit-non-fiction${card.id}`;
        editTypeNonInput.name = "edit-type";
        editTypeNonInput.checked = card.type === "Non-fiction"; // Set checked to true if card.type is "Non-fiction"
        editTypeNonInput.value = "Non-fiction";
      flexDiv1.appendChild(editTypeNonInput);
        const editTypeNonLabel = document.createElement("label");
        // editTypeNonLabel.classList.add("label-radio");
        editTypeNonLabel.classList.add("radio-edit-label");
        editTypeNonLabel.htmlFor = `edit-non-fiction${card.id}`;
        editTypeNonLabel.innerText = "Non-fiction";
      flexDiv1.appendChild(editTypeNonLabel);
    editBookForm.appendChild(flexDiv1);

      const editPageLabel = document.createElement("label");
      editPageLabel.classList.add("non-radio-edit-label");
      editPageLabel.htmlFor = `edit-page${card.id}`;
      editPageLabel.innerText = "Pages";
    editBookForm.appendChild(editPageLabel);
      const editPageInput = document.createElement("input");
      editPageInput.type = "number";
      editPageInput.classList.add("edit-page"); //Unused class? DELETE?
      editPageInput.id = `edit-page${card.id}`;
      editPageInput.value = `${card.pages}`;
    editBookForm.appendChild(editPageInput);

  bookCard.appendChild(editBookForm);
// END OF SPECIAL EDIT BOOK FORM MODAL

    const bookCardCover = document.createElement("book-card-cover");
      const bkCoverImg = document.createElement("img");
      bkDetails.classList.add("bk-cover");
      bkCoverImg.src = `${card.imgsrc}`;
      bookCardCover.appendChild(bkCoverImg);
  bookCard.appendChild(bookCardCover);

    const bookCardNavBot = document.createElement("book-card-nav-bot");
      const readBtn = document.createElement("button");
      readBtn.classList.add("book-card-round-btns", "btn-read");
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
      infoBtn.classList.add("book-card-round-btns", "btn-info");
        const infoBtnImg = document.createElement("img");
        infoBtnImg.src = "./assets/card-info.svg";
        infoBtnImg.alt = "Book info button";
      infoBtn.appendChild(infoBtnImg);
    bookCardNavBot.appendChild(infoBtn);

      const faveBtn = document.createElement("button");
      faveBtn.classList.add("book-card-round-btns", "btn-fave");
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

  bookCard.appendChild(bookCardNavBot);

  return bookCard;
}


// THEN RENDER BOOK CARDS IN MAIN-CONTENT-CONTAINER

function renderCards() {
  mainContentContainer.innerHTML = "";
  myLibrary.forEach(function (card) {
    const cardElement = createCard(card);
    mainContentContainer.appendChild(cardElement);
  });

  const bookCards = document.querySelectorAll("book-card");

    bookCards.forEach(function (bookCard, id) {
      const card = myLibrary[id];

      const bookCard2 = bookCard.querySelector("book-card"); // FIX THIS? REMOVE?

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
      const btnDeleteBook = bookCard.querySelector("#delete-book");
      const btnUpdateBook = bookCard.querySelector("#update-book");


// ADD EVENT LISTENERS FOR BOOK-CARD

btnEdit.addEventListener("click", function () {
  showEdit(
    bookCardCover,
    bookCardNavBot,
    bookCardInfo,
    bookCardNavTop,
    editBook,
    bookCardNavTopEdit
  );
});

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

btnDeleteBook.addEventListener("click",  deleteFromLibrary);

function deleteFromLibrary() {
  // console.log(card.id);
  myLibrary = myLibrary.filter((item) => item.id !== card.id);

  let removeElement = document.querySelector(`#${card.id}`);
  if (removeElement) {
    removeElement.remove();
  }
}

// console.log(`YYY${myLibrary}`);

btnUpdateBook.addEventListener("click", updateBookInLibrary);


// BOOKS NOW UPDATE...code works
function updateBookInLibrary() {
  console.log(card.id); // This works
  let editTitle = document.getElementById(`edit-title${card.id}`);
  let editAuthor = document.getElementById(`edit-author${card.id}`);

  let editFictionType = document.getElementById(`edit-fiction${card.id}`)
  let editNonFictionType = document.getElementById(`edit-non-fiction${card.id}`);
  
  let editPage = document.getElementById(`edit-page${card.id}`);

  console.log(editTitle.value); // This works
  console.log(editAuthor.value); // This works
  console.log(editPage.value); // This works

  let bookId = card.id;

  // Find the book in myLibrary with the matching ID
  const bookInfoFinder = myLibrary.find((book) => book.id === bookId);

  // Check if the book is found
  if (bookInfoFinder) {
    // Update the properties if they are different
    if (bookInfoFinder.title !== editTitle.value) {
      bookInfoFinder.title = editTitle.value;
      console.log(`Title updated to: ${bookInfoFinder.title}`);
    }

    if (bookInfoFinder.author !== editAuthor.value) {
      bookInfoFinder.author = editAuthor.value;
      console.log(`Author updated to: ${bookInfoFinder.author}`);
    }

    if (bookInfoFinder.type !== editFictionType.value) {
      bookInfoFinder.type = editFictionType.value;
      console.log(`Type updated to: ${bookInfoFinder.type}`);
    } else if (bookInfoFinder.type !== editNonFictionType.value) {
      bookInfoFinder.type = editNonFictionType.value;
    }

//ABOVE WORKS

    if (bookInfoFinder.pages !== editPage.value) {
      bookInfoFinder.pages = editPage.value;
      console.log(`Pages updated to: ${bookInfoFinder.pages}`);
    }

    console.log("Book information updated.");
  } else {
    console.log(`Book with ID ${bookId} not found.`);
  }
  renderCards();
}

// console.log(myLibrary);

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
  // bookCard2,
  bookCardCover,
  bookCardNavBot,
  bookCardInfo,
  bookCardNavTop,
  editBook,
  bookCardNavTopEdit
) {
  // bookCard2.style.border = ".15rem solid var(--candle)";
  bookCardCover.style.display = "none";
  bookCardNavBot.style.display = "none";
  bookCardInfo.style.display = "none";
  bookCardNavTop.style.display = "none";
  editBook.style.display = "flex";
  // editBook.style.background = "var(--candle)";
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


}
myLibrary.forEach(function (card) {
  setInitReadFaveState(card);
});

}

renderCards();


// MODALS

const addBookDialog = document.querySelector("#add-book-dialog");

const menuBtnAdd = document.querySelector("#menu-btn-add");
  menuBtnAdd.addEventListener("click", function() {
  clearModalFormData();
  addBookDialog.showModal();
})

// NEW MENU BTNS

const statsDialog = document.querySelector("#stats-dialog");

const menuBtnStats = document.querySelector("#menu-btn-stats");
menuBtnStats.addEventListener("click", function () {
  clearModalFormData();
  statsDialog.showModal();
});

const sortDialog = document.querySelector("#sort-dialog");

const menuBtnSort = document.querySelector("#menu-btn-sort");
menuBtnSort.addEventListener("click", function () {
  clearModalFormData();
  sortDialog.showModal();
});

const searchDialog = document.querySelector("#search-dialog");

const menuBtnSearch = document.querySelector("#menu-btn-search");
menuBtnSearch.addEventListener("click", function () {
  clearModalFormData();
  searchDialog.showModal();
});


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
    // location.reload();
    renderCards(); // IS THIS STOPPING THE DELETION OF TEXT IN THE EDIT-FORM?
  });
}

closeModal();

const addBookEnterBtn = document.querySelector("#add-book-enter-btn");
addBookEnterBtn.addEventListener("click", addFormBookToLibrary)

function addFormBookToLibrary() {

  const idCount = `b${myLibrary.length}`;
  const inputTitle = document.querySelector("#input-title").value;
  const inputAuthor = document.querySelector("#input-author").value;

  const radioFiction = document.querySelector("#radio-fiction");
  const radioNonFiction = document.querySelector("#radio-non-fiction");
    let valueFicNonFic = null;

// This block of  code stopped working properly and was not adding "Fiction" or "Non-fiction"

    // if (radioFiction.checked) {
    //   valueFicNonFic = "radioFiction.value";
    // } else if (radioNonFiction.checked) {
    //   valueFicNonFic = radioNonFiction.value;
    // }
// Below is my work around...

    if (radioFiction.checked) {
      valueFicNonFic = "Fiction";
    } else if (radioNonFiction.checked) {
      valueFicNonFic = "Non-fiction";
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
alphabetizeLibrary();
addBookDialog.close();
renderCards();

// clearModalFormData();
// location.reload();
// closeModal();
}

console.log(myLibrary);

// const alphabetical = myLibrary.sort((a, b) => {
//   if (a.title > b.title) {
//     return 1;
//   } else {
//     return -1;
//   }
// })

// console.log(alphabetical);


// function alphabetizeMyLibrary() {
//   const alphabetical = myLibrary.sort((a, b) => {
//     // Function to remove the, a , an from titles
//     const removeLeadingArticle = (title) => {
//       const articles = ["the", "a", "an"];
//       const words = title.split(/\s+/);
//       if (articles.includes(words[0].toLowerCase())) {
//         return words.slice(1).join(" ");
//       }
//       return title;
//     };

//     // Removes articles / compare titles
//     const titleA = removeLeadingArticle(a.title);
//     const titleB = removeLeadingArticle(b.title);
//     return titleA.localeCompare(titleB);
//   });
// console.log(alphabetical);
// }

// alphabetizeMyLibrary(); 

const bookTotal = document.querySelector("#book-total");

const ficTotal = document.querySelector("#fic-total");
const nonFicTotal = document.querySelector("#non-fic-total");

const readTotal = document.querySelector("#read-total");
const pagesReadTotal = document.querySelector("#pages-read-total");

const notReadTotal = document.querySelector("#not-read-total");
const pagesNotReadTotal = document.querySelector("#pages-not-read-total");

const faveTotal = document.querySelector("#fave-total");

function tallyBookStats() {
  bookTotal.innerText = myLibrary.length;

  const ficVal = "Fiction";
  const ficNum = myLibrary.reduce((count, item) => {
    if (item.type === ficVal) {
      count++;
    }
    return count;
  }, 0);
  ficTotal.innerText = ficNum;

  const nonFicVal = "Non-fiction";
  const nonFicNum = myLibrary.reduce((count, item) => {
    if (item.type === nonFicVal) {
      count++;
    }
    return count;
  }, 0);
  nonFicTotal.innerText = nonFicNum;

  const readVal = true;
  const readNum = myLibrary.reduce((count, item) => {
    if (item.read === readVal) {
      count++;
    }
    return count;
  }, 0);
  readTotal.innerText = readNum;

  // read pages here
    pagesReadTotal.innerText = "EGGS";

  const notReadVal = false;
  const notReadNum = myLibrary.reduce((count, item) => {
    if (item.read === notReadVal) {
      count++;
    }
    return count;
  }, 0);
  notReadTotal.innerText = notReadNum;

  // not read pages here

  pagesNotReadTotal.innerText = "EGGS";

  const faveVal = true;
  const faveNum = myLibrary.reduce((count, item) => {
    if (item.fave === faveVal) {
      count++;
    }
    return count;
  }, 0);
  faveTotal.innerText = faveNum;
}

tallyBookStats()