// Attach a single event listener to the main content container
mainContentContainer.addEventListener("click", function (event) {
  const target = event.target;

  // Check if the clicked element is a button inside a book card
  if (target.matches(".btn-info")) {
    const bookCard = target.closest("book-card");
    const bookCardCover = bookCard.querySelector("book-card-cover");
    const bookCardNavBot = bookCard.querySelector("book-card-nav-bot");
    const bookCardInfo = bookCard.querySelector("book-card-info");
    const bookCardNavTop = bookCard.querySelector("book-card-nav-top");

    showInfo(bookCardCover, bookCardNavBot, bookCardInfo, bookCardNavTop);
  } else if (target.matches(".btn-x-out")) {
    const bookCard = target.closest("book-card");
    const bookCardCover = bookCard.querySelector("book-card-cover");
    const bookCardNavBot = bookCard.querySelector("book-card-nav-bot");
    const bookCardInfo = bookCard.querySelector("book-card-info");
    const bookCardNavTop = bookCard.querySelector("book-card-nav-top");

    hideInfo(bookCardCover, bookCardNavBot, bookCardInfo, bookCardNavTop);
  } else if (target.matches(".btn-read")) {
    const bookCard = target.closest("book-card");
    const togNotRead = bookCard.querySelector(".tog-not-read");
    const togRead = bookCard.querySelector(".tog-read");
    const btnRead = target;

    toggleRead(togNotRead, togRead, btnRead);
  } else if (target.matches(".btn-fave")) {
    const bookCard = target.closest("book-card");
    const togNotFave = bookCard.querySelector(".tog-not-fave");
    const togFave = bookCard.querySelector(".tog-fave");
    const btnFave = target;

    toggleFave(togNotFave, togFave, btnFave);
  }
});
