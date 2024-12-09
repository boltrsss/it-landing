// var backgroundColor = ["rgb(129, 175, 227)", "#219ebc"];
let activeIndex = 0;
let activeIndexForSecondModal = 0;

let questions = document.getElementById("modal-questions");
let secondDom = document.getElementById("second");
let modalQuestionTop = document.getElementById("modalTop");

fixStepIndicator(activeIndex);

// these are the sample data for question and their corresponding answer

var questionList = [
  {
    id: 1,
    question:
      "Molte di queste milf sono mamme single disperate e mogli traditrici in cerca di divertimento. Potrebbero essere i tuoi vicini o qualcuno che conosci. Accetti di mantenere segreta l'identità di queste milf?",
    answer: "",
    englishQuestion:
      "Many of these milfs are desperate single moms and cheating wives looking for some fun. They could be your neighbors or someone you know. Do you agree to keep the identity of these milfs a secret?",
  },
  {
    id: 2,
    question: `Queste milf ci hanno chiesto di non permettere agli uomini che cercano una "relazione". Desiderano solo sesso veloce. Non incontri. Accetti questa richiesta?`,
    answer: "",
    englishQuestion: `These milfs have asked us to not allow men that are seeking a "relationship". They only desire quick sex. Not dating. Do you agree to this request?`,
  },
  {
    id: 3,
    question:
      "Accetti di usare il preservativo quando fai sesso con un partner che incontri sul nostro sito?",
    answer: "",
    englishQuestion:
      "Do you agree to use a condom when having sex with a partner you meet on our site?",
  },
  {
    id: 4,
    question:
      "Ogni giorno che controlli il tuo account avrai probabilmente più richieste di sesso da parte di milf sul nostro sito, ti sentirai a tuo agio con questo?",
    answer: "",
    englishQuestion:
      "Each day that you check your account you will likely have multiple sex requests from milfs on our site, will you be comfortable with this?",
  },
];

var questionListForSecondModal = [
  {
    id: 1,
    question: "Che tipo di corpo ti eccita?",
    englishQuestion: "What type of body turns you on?",
    answerList: [
      { id: 1, Langname: "MILF", name: "MILF" },
      { id: 2, Langname: "Grandi tette", name: "Big Boobs" },
      { id: 3, Langname: "Grande culo", name: "Big Ass" },
      { id: 4, Langname: "BBW", name: "BBW" },
      { id: 5, Langname: "Magra", name: "Skinny" },
      { id: 6, Langname: "Regolare", name: "Regular" },
      { id: 7, Langname: "Altra", name: "Other" },
    ],
    checkedAnswer: [],
  },
  {
    id: 2,
    question: "Qual è l'età della milf che ti si addice di più?",
    englishQuestion: "What age of milf fits you best?",

    answerList: [
      { id: 1, Langname: "18-25", name: "18-25" },
      { id: 2, Langname: "25-32", name: "25-32" },
      { id: 3, Langname: "32-37", name: "32-37" },
      { id: 4, Langname: "37-45", name: "37-45" },
      { id: 5, Langname: "45 e superiori", name: "45 and above" },
    ],
    checkedAnswer: [],
  },
  {
    id: 3,
    question: "Che tipo di relazione stai cercando?",
    englishQuestion: "What type of relationship are you looking for?",
    answerList: [
      { id: 1, Langname: "L'avventura di una notte", name: "One Night Stand" },
      {
        id: 2,
        Langname: "Sesso in più occasioni",
        name: "Sex on multiple occasions",
      },
      { id: 3, Langname: "Sesso normale", name: "Regular sex" },
      { id: 4, Langname: "Datazione", name: "Dating" },
      { id: 5, Langname: "Matrimonio", name: "Marriage" },
    ],
    checkedAnswer: [],
  },
  {
    id: 4,
    question: "Distanza tra te e lei?",
    englishQuestion: "Distance between you and her?",
    answerList: [
      {
        id: 1,
        Langname: "A una distanza raggiungibile a piedi",
        name: "Within Walking distance",
      },
      { id: 2, Langname: "Stessa città", name: "Same city" },
      {
        id: 3,
        Langname: "Le città vicine sono OK",
        name: "Nearby cities are OK",
      },
      { id: 4, Langname: "Stesso paese", name: "Same country" },
      { id: 5, Langname: "Non importa", name: "Doesn't matter" },
    ],
    checkedAnswer: [],
  },
  {
    id: 5,
    question: "Grazie.",
    englishQuestion: "Thank You.",
    answerList: [],
  },
];

// trigger the content change on click on any part of first page
const contentChangeFunction = (e) => {
  e.stopPropagation();
  let body = document.body;

  let firstPage = document.getElementById("firstPage");
  let secondPage = document.getElementById("secondPage");

  firstPage.style.display = "none";
  secondPage.style.display = "flex";
  // body.style.background = backgroundColor[1];

  questions.innerHTML = questionList[activeIndex].question;
};
firstPage.addEventListener("click", contentChangeFunction);

function fixStepIndicator(n) {
  x = document.getElementsByClassName("step");

  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");

    if (i === n) {
      x[n].className += " active";
    }

    if (i > n) {
      x[i].className.replace("active", "");
    }
  }
}

// function that handles the yes no click event

function yesNoHandler(aggree) {
  // user checked data that can be send to backend

  // console.log(questionListForSecondModal, "question list for secondmodal");
  // console.log(questionList, "question list");
  if (activeIndex > 2) {
    var thirdPageContent = document.getElementById("thirdPageContent");

    let activeRadioContent =
      questionListForSecondModal[activeIndexForSecondModal];

    var sampleDom = document.createElement("div");
    var modalButtonDom = document.getElementById("modalButtons");
    var thirdPageChild = document.getElementById("thirdPageContentChild");
    var letButton = document.getElementById("leftButton");
    var rightButton = document.getElementById("rightButton");
    var leftButtonContainer = document.getElementById("leftButtonContainer");
    var thirdPageContentChoose = document.getElementById(
      "thirdPageContentChoose"
    );

    questions.style.display = "none";
    thirdPageContent.style.display = "flex";

    var NextContainer = document.createElement("div");
    var nextImageContainer = document.createElement("div");

    var nextImage = document.createElement("img");
    nextImageContainer.appendChild(nextImage);
    // nextImage.setAttribute("src", "./image/next.png");

    NextContainer.innerHTML = "<div>Prossima</div>";

    NextContainer.appendChild(nextImageContainer);
    nextImage.className = "nextButtonImage";
    secondDom.insertBefore(thirdPageContent, modalButtonDom);
    letButton.innerHTML = `<div id="next"><p>Prossima</p></div> <div id="nextIcon"><img src="arrowIcon.svg"></img></div>`;

    leftButtonContainer.style.flex = "unset";
    leftButtonContainer.style.padding = "8px 10px";
    leftButtonContainer.style.margin = "0 auto";

    rightButton.style.display = "none";

    // To crete the checkbox with corespondng label dynamically

    var datacollect = [];

    var checkBoxAnswerCollect = [];

    for (i = 0; i < activeRadioContent.answerList.length; i++) {
      var checkBox = document.createElement("input");
      var label = document.createElement("label");
      var checkboxContainer = document.createElement("div");
      var label = document.createElement("label");
      checkBox.type = "checkbox";
      checkBox.name = activeRadioContent.answerList[i].name;
      checkBox.value = activeRadioContent.answerList[i].name;
      checkBox.id = activeRadioContent.answerList[i].Langname;
      datacollect.push(checkBox);
      label.id = activeRadioContent.answerList[i].name;
      label.name = activeRadioContent.answerList[i].name;
      label.value = activeRadioContent.answerList[i].Langname;
      label.className = "customCheckbox";
      label.htmlFor = activeRadioContent.answerList[i].Langname;
      label.textContent = activeRadioContent.answerList[i].Langname;
      checkboxContainer.appendChild(checkBox);
      checkboxContainer.appendChild(label);
      checkboxContainer.className = "checkbox-container";
      sampleDom.appendChild(checkboxContainer);
      sampleDom.id = "thirdPageContentChild";
      sampleDom.className = "thirdPage-content-checkBoxList";
    }

    datacollect.forEach((item) => {
      item.addEventListener("change", (el) => {
        if (el.target.checked) {
          questionListForSecondModal[
            activeIndexForSecondModal - 1
          ].checkedAnswer.push(el.target.name);
        }
      });
    });

    if (activeIndexForSecondModal === 0) {
      thirdPageContent.append(thirdPageChild);

      thirdPageChild.replaceWith(sampleDom);
    } else if (activeIndexForSecondModal === 4) {
      thirdPageContentChoose.remove();

      if (activeIndexForSecondModal >= 4) {
        document.getElementById("next").style.display = "none";
        letButton.style.display = "none";
        document.getElementById("nextIcon").style.display = "none";
        document.getElementById("continueButton").style.display = "flex";
      }

      // for thank you paragraph on last section

      thirdPageChild.innerHTML =
        "<p>In base alle tue risposte ora potresti vedere il nostro elenco e le foto delle milf che si trovano nella tua zona. Si prega di mantenere segreta la loro identità</p>" +
        "<p>Fai clic sul pulsante 'Continua' qui sotto per unirti al nostro sito e iniziare a cercare le milf che vivono vicino a te</p>";
    } else {
      thirdPageChild.replaceWith(sampleDom);
    }

    // to change the question content

    modalQuestionTop.innerHTML =
      questionListForSecondModal[activeIndexForSecondModal].question;
    activeIndexForSecondModal = activeIndexForSecondModal + 1;
  }

  // To get the user choosed option

  if (activeIndex < 4) {
    if (aggree === 1) {
      questionList[activeIndex].answer = "yes";
      activeIndex = activeIndex + 1;
    } else if (aggree === -1) {
      questionList[activeIndex].answer = "no";
      activeIndex = activeIndex + 1;
    }

    questions.innerHTML = questionList[activeIndex].question;
  }

  fixStepIndicator(activeIndex);
}
