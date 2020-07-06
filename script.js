const btnReset = document.getElementById('btnReset');
const btnGo = document.getElementById('btnGo');

const textValid = document.getElementById('textValid');

let cmptConfirm = 0;

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

clickEye.addEventListener('click', () => {
    if (passWordValue.type == 'password') {
        passWordValue.type = 'text';
        eyes.className = 'fa fa-eye-slash'
    } else {
        passWordValue.type = 'password';
        eyes.className = "fa fa-eye";
    };
})

btnGo.addEventListener('click', () =>{
    console.log(cmptConfirm);
    if(passWordValue.value == confirmClick.value){
        textValid.textContent="All is good !";
        textValid.style.color = 'green';
        }else{
            textValid.innerHTML=('password invalid !');
            textValid.style.color = 'red';

        }
    
})
btnReset.addEventListener('click', () =>{
    textValid.textContent = "";
    firstConsign.style.color = '#383636';
    thirdConsign.style.color = '#383636';
    fourthConsign.style.color = '#383636';
    fithConsign.style.color = '#383636';
    secondConsign.style.color = '#383636';
    // firstConsign.style.color = 'red'
    // resetConsign.setAttribute.name.color='red';
});

passWordClick.addEventListener('keyup', () => {
    // passWordValue.value.length >3 ? firstOk.style.color = 'green':firstOk.style.color = '#9b9b9b';

    // Test Length Password
    if (passWordValue.value.length >= 9) {
        firstConsign.style.color = 'green'
        firstIcon.style.color = 'green'
        cmptConfirm = cmptConfirm + 1;
        console.log(cmptConfirm);
    } else {
        firstConsign.style.color = '#383636'
        firstIcon.style.color = '#dfd9d9'
    }
    // Test minuscule
    let lowerCaseLetters = /[a-z]/g;
    if (passWordValue.value.match(lowerCaseLetters)) {
        secondConsign.style.color = 'green'
        secondIcon.style.color = 'green'
        cmptConfirm = cmptConfirm + 1;
        console.log(cmptConfirm);

    } else {
        secondConsign.style.color = '#383636'
        secondIcon.style.color = '#dfd9d9'
    }

    // Test majuscule
    let upperCaseLetters = /[A-Z]/g;
    if (passWordValue.value.match(upperCaseLetters)) {
        thirdConsign.style.color = 'green'
        thirdIcon.style.color = 'green'
        cmptConfirm = cmptConfirm + 1;
        console.log(cmptConfirm);

    } else {
        thirdConsign.style.color = '#383636'
        thirdIcon.style.color = '#dfd9d9'
    }

    // Test numbers
    let numberLetters = /[0-9]/g;
    if (passWordValue.value.match(numberLetters)) {
        fourthConsign.style.color = 'green'
        fourthIcon.style.color = 'green'
        cmptConfirm = cmptConfirm + 1;
        console.log(cmptConfirm);

    } else {
        fourthConsign.style.color = '#383636'
        fourthIcon.style.color = '#dfd9d9'
    }
    
    // Test caractère spéciaux
    const tabCaractere = /[% ! @ _ * #]/;
        if (passWordValue.value.match(tabCaractere)){
            fithConsign.style.color = 'green'
            fithIcon.style.color = 'green'
        cmptConfirm = cmptConfirm + 1;
        console.log(cmptConfirm);

        }else{
            fithConsign.style.color = '#383636'
            fithIcon.style.color = '#dfd9d9'
        }

});


