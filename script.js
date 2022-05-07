// get all buttons
const quoteGenerator = document.getElementById("Quote-generator");
// const soccerQuiz = document.getElementById("soccer-quiz");
const Fylo = document.getElementById("Fylo");
const Netflix = document.getElementById("Netflix");
const google = document.getElementById("google");

// get screen preview
const quoteGeneratorView = document.getElementById("quote-generator-view");
const soccerQuizView = document.getElementById("soccer-quiz-view");
const FyloView = document.getElementById("fylo-view");
const NetflixView = document.getElementById("netflix-view");
const googleView = document.getElementById("google-view");

// set all views to hidden
quoteGeneratorView.style.display = "none";
soccerQuizView.style.display = "none";
FyloView.style.display = "none";
NetflixView.style.display = "none";
googleView.style.display = "none";

// console.log(Fylo);
function toggleViewDisplay() {

  quoteGenerator.addEventListener("click", () => {
    quoteGeneratorView.style.display = "block";
    soccerQuizView.style.display = "none";
    FyloView.style.display = "none";
    NetflixView.style.display = "none";
    googleView.style.display = "none";
  });

  google.addEventListener("click", () => {
    quoteGeneratorView.style.display = "none";
    soccerQuizView.style.display = "none";
    FyloView.style.display = "none";
    NetflixView.style.display = "none";
    googleView.style.display = "block";
  });

  // soccerQuiz.addEventListener("click", () => {
  //   quoteGeneratorView.style.display = "none";
  //   soccerQuizView.style.display = "block";
  //   FyloView.style.display = "none";
  //   NetflixView.style.display = "none";
  //   googleView.style.display = "none";
  // });

  Fylo.addEventListener("click", () => {
    quoteGeneratorView.style.display = "none";
    soccerQuizView.style.display = "none";
    FyloView.style.display = "block";
    NetflixView.style.display = "none";
    googleView.style.display = "none";
  });

  Netflix.addEventListener("click", () => {
    quoteGeneratorView.style.display = "none";
    soccerQuizView.style.display = "none";
    FyloView.style.display = "none";
    NetflixView.style.display = "block";
    googleView.style.display = "none";
  });
}

toggleViewDisplay();
