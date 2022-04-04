(function(){

const generatorButton = document.getElementById('generatorButton');
const passwordLabel = document.getElementById('passwordLabel');
const infoDiv = document.getElementById('infoDiv');

function generatePassword(size){
    const data = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*,.';
    let pass = '';
    const seed = new Date().getMilliseconds();

    for(let i = 0; i < size; i++){
        const index = Math.floor(Math.random() * seed * data.length) % data.length; 
        pass += data.charAt(index);
    }

    return pass;
}

function displayCopyInfoMessage(enable){
    if(enable){
        infoDiv.style.display = 'block';
    }else{
        infoDiv.style.display = 'none';
    }
}

generatorButton.onclick = () => {
    const pass = generatePassword(26);
    passwordLabel.innerText = pass;
    displayCopyInfoMessage(false);
}

passwordLabel.onclick = () => {
    displayCopyInfoMessage(true);
    navigator.clipboard.writeText(passwordLabel.innerText);
}

})();