export function funcFive (str){
//step 1 turns the letters into individual letters
    var splitString = str.split("");
//step 2 reverses the words
    var reverseArray = splitString.reverse();
//step 3 joins the words together
    var joinArray = reverseArray.join(""); 
// step 4 gives the final product
    return joinArray;
}
funcFive("nedyaj xela nitsuj");