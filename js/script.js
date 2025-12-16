const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// SETUP
const teamContainer = document.querySelector(".container-team");


rederTeam(teamMembers, teamContainer)







// FUNZIONI

// Funzione che genera la card e prende le info dall'array
function createTeamCard(obj) {
  const card = `
            <div class="col-12 col-md-4 ">

                <div class="bg-dark d-flex">

                    <img src="${obj.img}" alt="${obj.name}">

                    <div class="d-flex flex-column align-items-start">

                        <h3 class="text-light my-3 ms-2">${obj.name}</h3>
                        <p class="text-light my-3 ms-2">${obj.role}</p>
                        <a class="my-3 ms-2" href="#">${obj.email}</a>

                    </div>

                </div>

            </div>
  `;
  return card;
}

//Funzione che serve a fare il rendering delle diverse card dentro l'html grazie ad un ciclo for

// function showCards(array, outputEl){

//   let cards = '';

//   for (let index = 0; index < array.length; index++) {

//     const member = array[index];

//     cards += createTeamCard(member);
//   }

// }



function rederTeam(arraRef, outputEL) {
    // mi creo var che accumulerà gli elementi di ouput
    let cards = "";

    // output di prova ciclando l'array di oggetti
    for (let index = 0; index < arraRef.length; index++) {
        // estrapoliamo ogni volta un oggetto membro divero
        const memberTeam = arraRef[index];

        // destrutturiamo l'oggetto
        // const { name, image, role } = memberTeam;

        // andiamo ad ogni giro ad incrementare il contenuto dell'output
        cards += createTeamCard(memberTeam);
    }

    // inseriamo la stringa completa che innerHTML trasformerà, nell'elemento di output
    outputEL.innerHTML = cards;
}