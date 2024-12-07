const lastupdated = document.lastModified
const copyrightYear = 2024
    document.getElementById("cyear").innerHTML = copyrightYear
    document.getElementById("lastu").innerHTML = lastupdated


let prodnameselect = document.getElementById("prodname")
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
products.forEach(entry => {
    const option = document.createElement("option");
    option.setAttribute("value", entry.id);
    option.innerHTML = entry.name
    prodnameselect.append(option)
})
const submitn = document.getElementById("button")
submitn.addEventListener('click', () => {
    let numVisits = Number(window.localStorage.getItem("vist")) + 1;
    localStorage.setItem("vist", numVisits)
    console.error(localStorage)
});
