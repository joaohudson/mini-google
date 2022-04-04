(function(){

const generatorButton = document.getElementById('generatorButton');
const passwordLabel = document.getElementById('passwordLabel');

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

generatorButton.onclick = () => {
    const pass = generatePassword(26);
    passwordLabel.innerText = pass;
}

})();