// #####################################
// FUNCTION
function addCardMemberTeam(list, section) {
  for (member of list) {
    addCardMember(member, section);
  }
}

function addCardMember(member, section) {
  const { name, role, email, img } = member;
  section.innerHTML += `<div class="col-sm-12 col-md-6 col-lg-4">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-4">
            <img class="img-fluid rounded-start" src="${img}" alt="${name}">
          </div>
          <div class="col-8">
            <div class="card-body vertical-align-middle">
              <h5 class="card-title mt-1">${name}</h5>
              <p class="card-text mb-1">${role}</p>
              <p class="card-text"><small class="text-body-secondary">${email}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

// ##########################################
// INIZIO CODICE
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

// RACCOLTA ELEMENTI DOM
const cardTeamSection = document.getElementById("card-team-section");
const addMemberBtn = document.getElementById("add-new-member");
const formSection = document.getElementById("form-section");
const addMemberForm = document.getElementById("add-member-form");
const inputName = document.getElementById("input-name");
const inputRole = document.getElementById("input-role");
const inputEmail = document.getElementById("input-email");
const inputImg = document.getElementById("input-img");
const sendFormBtn = document.getElementById("send-info-form");
const resetFormBtn = document.getElementById("reset-form");
const closeForm = document.getElementById("close-form");

// INVOCAZIONE FUNZIONE PER AGGIUNGERE CARD
addCardMemberTeam(teamMembers, cardTeamSection);

// TRAMITE UN BUTTON METTIAMO IL FORM A SCHERMO
addMemberBtn.addEventListener("click", () => {
  formSection.classList.remove("d-none");
  addMemberBtn.classList.add("d-none");
});

// TRAMITE UN BUTTON INSERISCO NUOVE CARD
sendFormBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const name = inputName.value;
  const role = inputRole.value;
  const email = inputEmail.value;
  const img = inputImg.value;

  const memberFormInfo = { name, role, email, img };
  teamMembers.push(memberFormInfo);

  formSection.classList.add("d-none");
  addMemberBtn.classList.remove("d-none");
  
  addCardMember(memberFormInfo, cardTeamSection);

  addMemberForm.reset();
});

closeForm.addEventListener("click", (event) => {
  event.preventDefault();
  formSection.classList.add("d-none");
  addMemberBtn.classList.remove("d-none");
});