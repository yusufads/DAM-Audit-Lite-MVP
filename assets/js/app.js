// =====================
// DAM AUDIT LITE
// APP.JS V1
// =====================

let currentQuestion = 0;

let answers = [];

const totalQuestions = questions.length;

// ELEMENTS

const heroScreen = document.getElementById("hero-screen");
const auditScreen = document.getElementById("audit-screen");
const loadingScreen = document.getElementById("loading-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");

const questionText = document.getElementById("question-text");

const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");

const categoryLabel = document.querySelector(".category-label");

const answerButtons = document.querySelectorAll(".answer-btn");

const scoreNumber = document.getElementById("score-number");
const scoreLevel = document.getElementById("score-level");
const resultComment = document.getElementById("result-comment");

// =====================
// START AUDIT
// =====================

startBtn.addEventListener("click", () => {

    heroScreen.classList.add("hidden");

    auditScreen.classList.remove("hidden");

    loadQuestion();

});

// =====================
// LOAD QUESTION
// =====================

function loadQuestion() {

    const question = questions[currentQuestion];

    if (!question) {

        finishAudit();

        return;
    }

    questionText.textContent = question.question;

    categoryLabel.textContent = question.categoryName;

    progressText.textContent =
        `${currentQuestion + 1} / ${totalQuestions}`;

    const progressPercent =
        ((currentQuestion + 1) / totalQuestions) * 100;

    progressFill.style.width =
        `${progressPercent}%`;

}

// =====================
// ANSWER CLICK
// =====================

answerButtons.forEach(button => {

    button.addEventListener("click", () => {

        const score =
            parseInt(button.dataset.score);

        const question =
            questions[currentQuestion];

        answers.push({

            questionId: question.id,

            category: question.category,

            score: score

        });

        currentQuestion++;

        if (currentQuestion < totalQuestions) {

            loadQuestion();

        } else {

            finishAudit();

        }

    });

});

// =====================
// FINISH AUDIT
// =====================

function finishAudit() {

    auditScreen.classList.add("hidden");

    loadingScreen.classList.remove("hidden");

    const messages = [

        "Digital Memory Signals analiz ediliyor...",
        "Entity yapısı inceleniyor...",
        "AI görünürlük sinyalleri hesaplanıyor...",
        "Önerilme potansiyeli ölçülüyor...",
        "DAM Score oluşturuluyor..."

    ];

    let i = 0;

    const loadingMessage =
        document.getElementById("loading-message");

    const interval = setInterval(() => {

        loadingMessage.textContent =
            messages[i];

        i++;

        if (i >= messages.length) {

            clearInterval(interval);

            setTimeout(() => {

                showResults();

            }, 500);

        }

    }, 700);

}

// =====================
// CALCULATE RESULTS
// =====================

function calculateResults() {

    let totalScore = 0;

    const categoryScores = {

        entity: 0,
        memory: 0,
        authority: 0,
        retrieval: 0,
        recommendation: 0

    };

    answers.forEach(answer => {

        totalScore += answer.score;

        categoryScores[answer.category] +=
            answer.score;

    });

    const normalizedScore =
        Math.round((totalScore / 100) * 100);

    return {

        totalScore: normalizedScore,

        categories: categoryScores

    };

}

// =====================
// SHOW RESULTS
// =====================

function showResults() {

    loadingScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");

    const result =
        calculateResults();

    scoreNumber.textContent =
        result.totalScore;

    let level = "";
    let comment = "";

    if (result.totalScore < 40) {

        level = "Kritik Risk";

        comment =
            "AI sistemleri markanızı yeterince tanımıyor.";

    }

    else if (result.totalScore < 70) {

        level = "Gelişiyor";

        comment =
            "Markanız görünür ancak hafıza sinyalleri zayıf.";

    }

    else if (result.totalScore < 85) {

        level = "Güçlü";

        comment =
            "Markanız güçlü bir dijital algı oluşturmaya başlamış.";

    }

    else {

        level = "Referans Marka";

        comment =
            "Markanız yüksek önerilme potansiyeline sahip.";

    }

    scoreLevel.textContent =
        level;

    resultComment.textContent =
        comment;

    localStorage.setItem(
        "damAuditAnswers",
        JSON.stringify(answers)
    );

    localStorage.setItem(
        "damAuditResult",
        JSON.stringify(result)
    );

    console.log(result);

}
