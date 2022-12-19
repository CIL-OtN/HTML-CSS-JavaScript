
const flashcards = document.querySelectorAll(".flashcards")[0];
const createBox = document.querySelectorAll(".create-box")[0];

const showCreateCardBox = document.querySelector(".showCreateCardBox");
const delFlashcards = document.querySelector(".delFlashcards");

const addFlashcard = document.querySelector(".addFlashcard");
const hideCreateBox = document.querySelector(".hideCreateBox");

const question = document.querySelector("#question");
const answer = document.querySelector("#answer");

let contentArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

showCreateCardBox.addEventListener("click", () => {
  createBox.style.display = "block";
});

delFlashcards.addEventListener("click", () => {
  localStorage.clear();
  flashcards.innerHTML = "";
  contentArray = [];
});

// contentArray.forEach(divMaker);

const divMaker = (text) => {
// function divMaker(text) {
  const div = document.createElement("div");
  const h2_question = document.createElement("h2");
  const h2_answer = document.createElement("h2");

  div.className = "flashcard";

  h2_question.setAttribute(
    "style",
    "border-top: 1px solid red; padding: 15px; margin-top: 30px;"
  );
  h2_question.innerHTML = text.my_question;

  h2_answer.setAttribute(
    "style",
    "text-align: center; display: none; color: red;"
  );
  h2_answer.innerHTML = text.my_answer;

  div.appendChild(h2_question);
  div.appendChild(h2_answer);

  div.addEventListener("click", () => {
    if ((h2_answer.style.display = "none")) {
      h2_answer.style.display = "block";
    } else {
      h2_answer.style.display = "none";
    }
  });

  flashcards.append(div);
};

contentArray.forEach(divMaker);


addFlashcard.addEventListener("click", () => {
  let flashcard_info = {
    my_question: question.value,
    my_answer: answer.value,
  };

  contentArray.push(flashcard_info);
  localStorage.setItem("items", JSON.stringify(contentArray));

  divMaker(contentArray[contentArray.length - 1]);
  question.value = "";
  answer.value = "";
});

hideCreateBox.addEventListener("click", () => {
  createBox.style.display = "none";
});
