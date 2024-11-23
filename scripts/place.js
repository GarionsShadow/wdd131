const lastupdated = document.lastModified
const copyrightYear = 2024
 document.getElementById("cyear").innerHTML = copyrightYear
 document.getElementById("lastu").innerHTML = lastupdated
 
/*wind speed*/
 const V = 7
 /*air temp*/
 const T = -18
 
 function windchill (V, T){
    return (35.74 + 0.6215*T - 35.75*(V**0.16) + 0.4275* T* (V**0.16)).toFixed(2)
 }

 document.getElementById("windchill").innerHTML = windchill(15, 0)