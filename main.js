let users = [];

function addUser() {
     console.log('add user');
    const name = document.querySelector('#userName').value;
 console.log("name ", name);
    const identificationNumber = document.querySelector('#identificationtNumber').value;
 console.log("identificationNumber ", identificationNumber);
    const bornDate = document.querySelector('#bornDate').value;
 console.log("bornDate ", bornDate);
    const userEmail = document.querySelector('#userEmail').value;
 console.log("userEmail ", userEmail);
    const cityResidence = document.querySelector('#cityResidence').value;
 console.log("cityResidence ", cityResidence);
    const cityOrigin = document.querySelector('#cityOrigin').value;
 console.log("cityOrigin ", cityOrigin);
    const author1 = document.querySelector('#author1').value;
 console.log("author1 ", author1);
    const song1 = document.querySelector('#song1').value;
 console.log("song1 ", song1);
    const author2 = document.querySelector('#author2').value;
 console.log("author2 ", author2);
    const song2 = document.querySelector('#song2').value;
 console.log("song2 ", song2);
    const author3 = document.querySelector('#author3').value;
 console.log("author3 ", author3);
    const song3 = document.querySelector('#song3').value;
 console.log("song3 ", song3);

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

    
 console.log("user ", user);
    
    users.push(user);
 console.log("users ", users);


}

function searchUser() {

const index = document.querySelector('#userIndex').value;
console.log("index  ", index );

const userData = users[index];
console.log("userData ", userData);

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
