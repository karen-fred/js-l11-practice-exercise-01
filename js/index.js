const selectUserNumber = document.querySelector(".num-users");

const randomFolks = document.querySelector(".random-peeps");

const getData = async function  () {
    const usersRequest = await fetch("https://randomuser.me/api?results=5");
    const data = await usersRequest.json();

    const userResults = data.results; 
    dispalyUsers(userResults);
};

getData(1);

const displayUsers = async function (userResults) {
    randomFolks.innerHTML = "";

    for (const user of userResults) {
        const country = user.location.country;
        const name = user.name.first;
        const imageUrl = user.picture.medium;
        const userDiv = document.createElement("div");

        userDiv.innerHTML = `
        <h3>${name}</h3>
        <p>${country}</p>
        <img src=${imageUrl} alt="User avata" />
        `;
        randomFolks.append(userDiv);
    }

};

selectUserNumber.addEventListener("change", function (e) {
    const numUsers = e.target.value;
    getData(numUsers); 
});