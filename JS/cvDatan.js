fetch("cvData.json") //Använder fetch för att hämta data från min json-fil
.then(respone => respone.json()) //Omvandlat den hämtade datan till json-format.
.then(data=> {

    //Hämtar elementen som jag vill visa min json-data i
    const educations = document.getElementById("education");
    const experiences = document.getElementById("workExperience");

    //Hämtar datan ur education-arrayen och skriver ut den i en ny p-tagg
    educations.innerHTML = data.education.map(element =>
        `<p>${element.school} - ${element.program} - ${element.years}</p>`).join("");
        

    //Hämtar datan ur workExperience-arrayen och skriver ut den i en ny p-tagg
        experiences.innerHTML = data.workExperience.map(element =>
        `<p>${element.company} - ${element.position}          vc ${element.years}</p>`).join("");  
        
    })
    //Loggar i consolen om något går fel i hämtning av datan
    .catch(error => console.error(error));


