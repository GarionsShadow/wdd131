let answer = localStorage.getItem("militaryisyes");
if(answer){
document.getElementById("h2").innerHTML = "You Guessed Correctly, The USA Military did not think it was practical enough compared to modern weaponry."

} else {
    document.getElementById("h2").innerHTML = "You Guessed Wrong, Feel free to try again!"
}