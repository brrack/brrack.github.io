const polyatomicIons = [
    ["OH-", "Hydroxide"],
    ["CN-", "Cyanide"],
    ["C2H3O2-", "Acetate"],
    ["MnO4-", "Permanganate"],
    ["OCN-", "Cyanate"],
    ["SCN-", "Thiocyanate"],
    ["NO3-", "Nitrate"],
    ["NO2-", "Nitrite"],
    ["ClO4-", "Perchlorate"],
    ["ClO3-", "Chlorate"],
    ["ClO2-", "Chlorite"],
    ["ClO-", "Hypochlorite"],
    ["BrO4-", "Perbromate"],
    ["BrO3-", "Bromate"],
    ["BrO2-", "Bromite"],
    ["BrO-", "Hypobromite"],
    ["IO4-", "Periodate"],
    ["IO3-", "Iodate"],
    ["IO2-", "Iodite"],
    ["IO-", "Hypoiodite"],
    ["HCO3-", "Hydrogen carbonate"],
    ["HCO3-", "bicarbonate"],
    ["HSO4-", "Hydrogen sulfate"],
    ["HSO4-", "bisulfate"],
    ["HSO3-", "Hydrogen sulfite"],
    ["HSO3-", "bisulfite"],
    ["H2PO4-", "Dihydrogen phosphate"],
    ["O22-", "Peroxide"],
    ["SiO32-", "Silicate"],
    ["CO32-", "Carbonate"],
    ["C2O42-", "Oxalate"],
    ["SO42-", "Sulfate"],
    ["SO32-", "Sulfite"],
    ["S2O32-", "Thiosulfate"],
    ["CrO42-", "Chromate"],
    ["Cr2O72-", "Dichromate"],
    ["WO42-", "Tungstate"],
    ["HPO42-", "Hydrogen phosphate"],
    ["PO43-", "Phosphate"],
    ["PO33-", "Phosphite"],
    ["AsO43-", "Arsenate"],
    ["AsO33-", "Arsenite"],
    ["H3O+", "Hydronium"],
    ["Hg22+", "Mercury(I)"],
    ["NH4+", "Ammonium"]
];

const correctVoicelines = [
    "NIIIIIICE!!",
    "WOW you are such a genius Amelia!",
    "Holy Cow someone get this girl a Nobel Prize!",
    "Smarty Pants over here",
    "Your brain is so big",
    "Bet you won't get the next one right (you probably will)",
    "You're making these look easy",
    "Do you even need this game?",
    "Umm okay GENIUS",
    "I wish I was as smart as you",
    "You're gonna ace that test",
    "Smart and Pretty?"
];

const incorrectVoicelines = [
    "WHAT?!?!??",
    "I probably coded it wrong",
    "Nah that had to be a miss type, right?",
    "Come on you can do it",
    "DONT GIVE UP!!",
    "Can't get them all right",
    "No big deal",
    "Wait what?",
    "You'll get the next one right",
    "Hopefully you never see this voiceline",
    "Don't forget I love you"
];

function newQuestion() {
    const randomIon = polyatomicIons[Math.floor(Math.random() * polyatomicIons.length)];

    const questionPick = Math.floor(Math.random() * 2) + 1;

    let question;
    let answer;

    if (questionPick === 1) {
        question = randomIon[0];
        answer = randomIon[1];
    } else {
        question = randomIon[1];
        answer = randomIon[0];
    }

    document.getElementById("question").textContent = question;

    return answer;
}

let currentAnswer = newQuestion();

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value;

    const result = document.getElementById("result");

    if (userAnswer.toLowerCase() === currentAnswer.toLowerCase()) {
        result.textContent = "Correct! Well done!";
    } else {
        result.textContent = "Incorrect. The correct answer is: " + currentAnswer;
    }
}

console.log("GAME.JS IS WORKING");

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value;
    const result = document.getElementById("result");

    if (userAnswer.toLowerCase() === currentAnswer.toLowerCase()) {
        result.textContent = "Correct! Well done!\n" + correctVoicelines[Math.floor(Math.random() * correctVoicelines.length)];
    } else {
        result.textContent = "Incorrect. The correct answer is: " + currentAnswer + "\n" + incorrectVoicelines[Math.floor(Math.random() * incorrectVoicelines.length)];
    }

    currentAnswer = newQuestion();

    document.getElementById("answer").value = "";
}