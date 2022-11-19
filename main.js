let users = [];

function addUser() {
    const name = document.querySelector('#userName').value;
    const identificationNumber = document.querySelector('#identificationtNumber').value;
    const bornDate = document.querySelector('#bornDate').value;
    const userEmail = document.querySelector('#userEmail').value;
    const cityResidence = document.querySelector('#cityResidence').value;
    const cityOrigin = document.querySelector('#cityOrigin').value;
    const author1 = document.querySelector('#author1').value;
    const song1 = document.querySelector('#song1').value;
    const author2 = document.querySelector('#author2').value;
    const song2 = document.querySelector('#song2').value;
    const author3 = document.querySelector('#author3').value;
    const song3 = document.querySelector('#song3').value;

    const user = {
        name,
        identificationNumber,
        bornDate,
        userEmail,
        cityResidence,
        cityOrigin,
        author1,
        song1,
        author2,
        song2,
        author3,
        song3
    }

    users.push(user);

    alert('La información ha sido agregada');
}

function searchUser() {

const index = document.querySelector('#userIndex').value;
const userData = users[index];

const dataToShow = `
<p>name: ${userData.name}</p><br>
<p>name: ${userData.identificationNumber}</p><br>
<p>name: ${userData.bornDate}</p><br>
<p>name: ${userData.userEmail}</p><br>
<p>name: ${userData.cityResidence}</p><br>
<p>name: ${userData.cityOrigin}</p><br>
<p>name: ${userData.author1}</p><br>
<p>name: ${userData.song1}</p><br>
<p>name: ${userData.author2}</p><br>
<p>name: ${userData.song2}</p><br>
<p>name: ${userData.author3}</p><br>
<p>name: ${userData.song3}</p><br>
`;

const showUserData = document.querySelector('#showUserData').innerHTML = dataToShow;

}

;
