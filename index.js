
const vowels = "aeiou"
const submitButton = document.getElementById('submit')

submitButton.addEventListener('click', function(){
    const inputWord = document.getElementById('inputText').value.toLowerCase();
    let vowelCount = 0;

    for(let i = 0; i < inputWord.length; i++){
        if(vowels.includes(inputWord[i])){
            vowelCount++
            
        }
    }alert(`Your words has ${vowelCount} vowels.`)
})