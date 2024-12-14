const lastupdated = document.lastModified
const copyrightYear = 2024
    function GEBI(id, newvalue){
        return document.getElementById(id).innerHTML = newvalue
    }
    GEBI(`cyear`, copyrightYear);
    GEBI(`lastu`, lastupdated);
    
    let yes = document.getElementById("button")
    if(yes){
    yes.addEventListener("click", () => {
        localStorage.setItem("militaryisyes", ``)
        if (document.getElementById("bun2").checked) {
            localStorage.setItem("militaryisyes", `yes`)
        }
    })
}

    const tungstenTrivia = [
        {
          fact: "Tungsten has the highest melting point of any metal at 3,422°C (6,192°F)."
        },
        {
          fact: "The chemical symbol for tungsten, W, comes from its German name, 'Wolfram.'"
        },
        {
          fact: "Tungsten is often used in light bulb filaments because it can withstand high temperatures."
        },
        {
          fact: "Tungsten is one of the densest elements, with a density of 19.25 grams per cubic centimeter."
        },
        {
          fact: "Tungsten is highly resistant to corrosion, making it valuable in industrial applications."
        },
        {
          fact: "In its pure form, tungsten is a shiny, silvery-white metal."
        },
        {
          fact: "Tungsten carbide, a compound of tungsten and carbon, is used in cutting tools and jewelry."
        },
        {
          fact: "Tungsten was first isolated as a metal in 1783 by Spanish chemists Juan José and Fausto Elhuyar."
        },
        {
          fact: "Tungsten is commonly used in the aerospace industry for its strength and high melting point."
        },
        {
          fact: "The name 'tungsten' comes from the Swedish words 'tung sten,' meaning 'heavy stone.'"
        },
        {
          fact: "Tungsten is used in armor-piercing ammunition because of its extreme hardness."
        },
        {
          fact: "Tungsten alloys are used in electrical contacts and arc-welding electrodes."
        },
        {
          fact: "Tungsten is found naturally in minerals such as scheelite and wolframite."
        },
        {
          fact: "Despite its strength, tungsten is brittle and can shatter when struck."
        },
        {
          fact: "Tungsten is often used in the production of X-ray tubes due to its ability to handle intense heat and radiation."
        }
      ];
    
      function randoindex() {
        return Math.random() * (15 - 0) + 0;
      }
        console.log(randoindex(), tungstenTrivia[(randoindex())])
     document.getElementById("ranfac").addEventListener("click", () => {
        GEBI(`factgen`, tungstenTrivia[Math.round(randoindex())].fact)
        
    })
