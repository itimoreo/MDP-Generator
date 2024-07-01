const passwordBox = document.getElementById('password');
const lenght = 12;

const uperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'; 
const numbers = '0123456789';
const special = '!@#$%^&*()_+{}:"<>?[];,./`~';

const allChars = uperCase + lowerCase + numbers + special;

function generatePassword() {
    let password = '';
    password += uperCase[Math.floor(Math.random() * uperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += special[Math.floor(Math.random() * special.length)];

    while(lenght > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand('copy');
    alert('Password copied to clipboard');
}