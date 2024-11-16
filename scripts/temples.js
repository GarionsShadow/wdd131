const lastupdated = document.lastModified
const copyrightYear = 2024
 document.getElementById("cyear").innerHTML = copyrightYear
 document.getElementById("lastu").innerHTML = lastupdated

 const hambutton = document.getElementById("ham");
 const mainnav = document.getElementById("nav");


 hambutton.addEventListener('click', () => {
    console.log("lasdh")
	mainnav.classList.toggle('show');
});