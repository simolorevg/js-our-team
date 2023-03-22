const teamPeople=[
    {
        name: 'Wayne Barnett',
        task: 'Founder & CEO',
        imgSelf:'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        task: 'Chief Editor',
        imgSelf:'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon' ,
        task: 'Office Manager',
        imgSelf: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez' ,
        task: 'Social Media Manager',
        imgSelf: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada' ,
        task: 'Developer',
        imgSelf: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos' ,
        task: 'Graphic Designer',
        imgSelf: 'barbara-ramos-graphic-designer.jpg'
    }
];
/////MILESTONE 1
for(let i = 0; i < teamPeople.length; i++){
    let currentPerson = teamPeople[i];
    console.log(currentPerson.name, currentPerson.task, currentPerson.imgSelf);
};
/////MILESTONE 2
let teamList=document.getElementById('team-list');
for(let x = 0; x < teamPeople.length; x++){
    let currentPerson = teamPeople[x];
    teamList.innerHTML += `<li>${currentPerson.name}, ${currentPerson.task}, ${currentPerson.imgSelf}</li>`;
}