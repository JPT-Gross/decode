export function funcFour(numberInput, wordInput){
    numberInput -= 1;
    let charArray = wordInput.split('');
    var answer = charArray.at(numberInput);
    return(answer);
}
