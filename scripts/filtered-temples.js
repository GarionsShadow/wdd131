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
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 24",
        area: "382207",
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    },
    {
        templeName: "Logan Utah",
        location: "Logan, Utah, United States",
        dedicated: "1884, May, 19",
        area: "119619",
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-40550-main.jpg"
    },
    {
        templeName: "Draper Utah Temple",
        location: "Draper, Utah, United States",
        dedicated: "2009, March, 22",
        area: "58300",
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/draper-utah-temple/draper-utah-temple-38937-main.jpg"
    }
  ];

  function MakeCards(templo) {
    document.getElementById("section").innerHTML = "";
    console.error(templo.length);
    templo.forEach(temple => {
        
    
    const card = document.createElement("div");
    const name = document.createElement("p");
    const location = document.createElement("p");
    const dedicated = document.createElement("p");
    const area = document.createElement("p");
    const image = document.createElement("img");

    name.textContent = temple.name
    location.textContent = `Located in: ${temple.location}`;
    dedicated.textContent = `Dedicated in ${temple.dedicated}`;
    area.textContent = `Area: ${temple.area} sqr ft`;
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", `${temple.name}`);
    image.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(image);

    document.getElementById("section").append(card);

    
        

});
    
  }
  MakeCards(temples);

  let old = document.getElementById("old");

  old.addEventListener("click", () => {
    console.error(temples.length)
    MakeCards(temples.filter(temple => Number(temple.dedicated.substring(0,4)) < 1900))
  });

  let home = document.getElementById("home");
  
  home.addEventListener("click", () => MakeCards(temples));

  let neww = document.getElementById("neww");
  neww.addEventListener("click", () => {
    MakeCards(temples.filter(temple => Number(temple.dedicated.substring(0,4)) > 2000))
  });

  let large = document.getElementById("large");
  large.addEventListener("click", () => {
    MakeCards(temples.filter(temple => Number(temple.area) > 90000))
  });

  let small = document.getElementById("small")
  small.addEventListener("click", () => {
    MakeCards(temples.filter(temple => Number(temple.area) < 10000))
  });



