var TeamCont = document.querySelector(".team-container");
var cardBox = document.querySelector(".card-image");
var cardText = document.querySelector(".card-text")

// VAR INPUT
const addMemberBtn = document.getElementById("addMemberButton");


let img;
let h3;

//  ADD MEMBER
addMemberBtn.addEventListener("click", 
    function () {

        let  inputName = document.getElementById("name").value;
        let  inputRole = document.getElementById("role").value;
        let  inputImg = document.getElementById("image").value;
        // console.log(inputName);
        // console.log(inputRole);
        // console.log(inputImg);
        let newMember = {
            "immagine":(inputImg),
            "nome" : (inputName),
            "ruolo": (inputRole)            
        };

        console.log(newMember);
        arrTeam.push(newMember);
        console.log(arrTeam);
        
        TeamCont.innerHTML += `
        <div class="team-card">
            <div class="card-image">
                <img
                    src="${inputImg}"
                    alt="${inputName}"
                />
                </div>
                <div class="card-text">
                <h3>${inputName}</h3>
                <p>${inputRole}</p>
                </div>
            </div>
        </div>`
    }
);

// creo l'array con i 6 oggetti del team inseriti
const arrTeam = [
    {   
        "immagine":"img/wayne-barnett-founder-ceo.jpg",
        "nome" : 'Wayne Barnett',
        "ruolo": 'Founder & CEO'
    },
    
    {
        "immagine":"img/angela-caroll-chief-editor.jpg",
        "nome" : 'Angela Carol',
        "ruolo": 'Chief Editor'
    },

    {
        "immagine":"img/walter-gordon-office-manager.jpg",
        "nome" : 'Walter Gordon',
        "ruolo": 'Office Manager'
    },

    {
        "immagine":"img/angela-lopez-social-media-manager.jpg",
        "nome" : 'Angela Lopez',
        "ruolo": 'Social Media Manager'
    },

    {
        "immagine":"img/scott-estrada-developer.jpg",
        "nome" : 'Scoot Estrada',
        "ruolo": 'Developer'
    },

    {
        "immagine":"img/barbara-ramos-graphic-designer.jpg",
        "nome" : 'Barbara Ramos',
        "ruolo": 'Graphic Designer'
    },


];
// stampo il contenuto dell'array log
console.log(arrTeam);

for (let i = 0; i < arrTeam.length; i++) {
    let dataName="";
    let dataRole="";
    let dataImg="";
    let objTeam = arrTeam[i];
    
    for (let key in objTeam) {
        console.log((key, objTeam[key]));
        dataName=arrTeam[i].nome;
        dataRole=arrTeam[i].ruolo;
        dataImg=arrTeam[i].immagine;


    }
    TeamCont.innerHTML += `
        <div class="team-card">
            <div class="card-image">
                <img
                    src="${dataImg}"
                    alt="${dataName}"
                />
                </div>
                <div class="card-text">
                <h3>${dataName}</h3>
                <p>${dataRole}</p>
                </div>
            </div>
        </div>`

    
}



// FUNZIONI
function addName(nome) {
    var name = document.createElement('h3');
    name.append(nome);
    cardText.appendChild(name);
    return name

}

function addRole(ruolo) {
    var role = document.createElement('p');
    role.append(ruolo);
    cardText.appendChild(role);
    return role

}

function addImg(link) { 
	var img = document.createElement('img'); 
    img.src = link; 
	cardBox.appendChild(img);
    return img
}