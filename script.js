const checkButton = document.querySelector('#check-btn');
const resultParagraph = document.querySelector('#result');
const inputField = document.querySelector('#text-input');

function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

checkButton.addEventListener('click', (e) => {
    e.preventDefault();
    const userInput = inputField.value.trim();

    if (userInput === '') {
        alert('Please input a value');
        return;
    }

    if (isPalindrome(userInput)) {
        resultParagraph.innerText = `${userInput} is a palindrome.`;
    } else {
        resultParagraph.innerText = `${userInput} is not a palindrome.`;
    }
});