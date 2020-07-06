let cmptLength = 0;
let cmptLower = 0;
let cmptUpper = 0;
let cmptNumber = 0;
let cmptSpecial = 0;

const btnReset = document.getElementById('btnReset');
const btnGo = document.getElementById('btnGo');

const textValid = document.getElementById('textValid');

const passWordValue = document.getElementById('inputPassword');
const passWordClick = document.getElementById('inputPassword');
const confirmClick = document.getElementById('inputConfirm');

const firstConsign = document.getElementById('consign1');
const firstIcon = document.getElementById('icon1');

const secondConsign = document.getElementById('consign2');
const secondIcon = document.getElementById('icon2');

const thirdConsign = document.getElementById('consign3');
const thirdIcon = document.getElementById('icon3');

const fourthConsign = document.getElementById('consign4');
const fourthIcon = document.getElementById('icon4');

const fithConsign = document.getElementById('consign5');
const fithIcon = document.getElementById('icon5');

//SHOW PASSWORD
const eyes = document.getElementById('iconEyeShowPassword');
const clickEye = document.getElementById('eyeOpen');
const eyesConf = document.getElementById('iconEyeShowPasswordConf');
const clickEyeConf = document.getElementById('eyeOpenConf');

clickEye.addEventListener('click', () => {
    if (passWordValue.type == 'password') {
        passWordValue.type = 'text';
        eyes.className = 'fa fa-eye-slash'
    } else {
        passWordValue.type = 'password';
        eyes.className = "fa fa-eye";
    };
})

clickEyeConf.addEventListener('click', () => {
    if (confirmClick.type == 'password') {
        confirmClick.type = 'text';
        eyesConf.className = 'fa fa-eye-slash'
    } else {
        confirmClick.type = 'password';
        eyesConf.className = "fa fa-eye";
    };
})

// SEND PASSWORD
btnGo.addEventListener('click', () => {
    let totalCmpt = 0;
    totalCmpt = cmptLength + cmptLower + cmptUpper + cmptNumber + cmptSpecial;
    console.log('total ' + totalCmpt);
    if (totalCmpt != 5) {
        textValid.textContent = "Format not good";
        textValid.style.color = 'red';
        return false;
    }
    if (passWordValue.value === confirmClick.value) {
        textValid.textContent = "All is good !";
        textValid.style.color = 'green';
    } else {
        textValid.innerHTML = ('password invalid !');
        textValid.style.color = 'red';
    }
});

// RESET
btnReset.addEventListener('click', () => {
    firstConsign.style.color = '#383636';
    thirdConsign.style.color = '#383636';
    fourthConsign.style.color = '#383636';
    fithConsign.style.color = '#383636';
    secondConsign.style.color = '#383636';
    firstIcon.style.color = '#dfd9d9'
    secondIcon.style.color = '#dfd9d9'
    thirdIcon.style.color = '#dfd9d9'
    fourthIcon.style.color = '#dfd9d9'
    fithIcon.style.color = '#dfd9d9'
    textValid.textContent = "";
    passWordValue.textContent = "";
    confirmClick.textContent = "";
    window.location.reload();
});

////////////////////// TEST //////////////////////////////////////

passWordClick.addEventListener('keyup', () => {
    // Test Length Password
    if (passWordValue.value.length >= 9) {
        firstConsign.style.color = 'green'
        firstIcon.style.color = 'green'
        if (cmptLength === 0) {
            cmptLength = 1;
        }
    } else {
        firstConsign.style.color = '#383636'
        firstIcon.style.color = '#dfd9d9'
        if (cmptLength === 1) {
            cmptLength = 0;
        }
    }
    // Test minuscule
    let lowerCaseLetters = /[a-z]/g;
    if (passWordValue.value.match(lowerCaseLetters)) {
        secondConsign.style.color = 'green'
        secondIcon.style.color = 'green'
        if (cmptLower === 0) {
            cmptLower = 1;
        }
    } else {
        secondConsign.style.color = '#383636'
        secondIcon.style.color = '#dfd9d9'
        if (cmptLower === 1) {
            cmptLower = 0;
        }
    }
    // Test majuscule
    let upperCaseLetters = /[A-Z]/g;
    if (passWordValue.value.match(upperCaseLetters)) {
        thirdConsign.style.color = 'green'
        thirdIcon.style.color = 'green'
        if (cmptUpper === 0) {
            cmptUpper = 1;
        }
    } else {
        thirdConsign.style.color = '#383636'
        thirdIcon.style.color = '#dfd9d9'
        if (cmptUpper === 1) {
            cmptUpper = 0;
        }
    }
    // Test numbers
    let numberLetters = /[0-9]/g;
    if (passWordValue.value.match(numberLetters)) {
        fourthConsign.style.color = 'green'
        fourthIcon.style.color = 'green'
        if (cmptNumber === 0) {
            cmptNumber = 1;
        }
    } else {
        fourthConsign.style.color = '#383636'
        fourthIcon.style.color = '#dfd9d9'
        if (cmptNumber === 1) {
            cmptNumber = 0;
        }
    }
    // Test caractère spéciaux
    const tabCaractere = /[% ! @ _ * #]/;
    if (passWordValue.value.match(tabCaractere)) {
        fithConsign.style.color = 'green'
        fithIcon.style.color = 'green'
        if (cmptSpecial === 0) {
            cmptSpecial = 1;
        }
    } else {
        fithConsign.style.color = '#383636'
        fithIcon.style.color = '#dfd9d9'
        if (cmptSpecial === 1) {
            cmptSpecial = 0;
        }
    }
});