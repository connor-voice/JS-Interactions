axios.get("https://reqres.in/api/users?page=2")
    .then((result) => {
        console.log(result);

        const users = result.data.data;

        for (let user of users) {
            console.log(user);
            const userDiv = document.createElement("div");

            const userId = document.createElement("p");
            userId.innerText = `ID: ${user.id}`;
            userDiv.appendChild(userId);

            const email = document.createElement("p");
            email.innerText = `Email: ${user.email}`;
            userDiv.appendChild(email);

            const firstName = document.createElement("p");
            firstName.innerText = `First Name: ${user.first_name}`;
            userDiv.appendChild(firstName);

            const lastName = document.createElement("p");
            lastName.innerText = `Last Name: ${user.last_name}`;
            userDiv.appendChild(email);

            const avatar = document.createElement("img");
            avatar.innerHTML = user.avatar;
            userDiv.appendChild(avatar);
        }

    }).catch((err) => {
        console.error(err);
    })

    const userOutput = document.querySelector("#getUsers");
    
    const getAllUsers = () => {
        axios.get(`https://reqres.in/api/users?page=2`)
        .then(result => {
            const peoples = result.data.data;

            getAllUsers.innerHTML = "";

            peoples.forEach(person => renderPerson(person, getAllUsers));
        }).catch((err) => {
            console.error(err);
        })
    }

    const renderPerson = (person) => {
        const personColumn = document.createElement("div");
        personColumn.classList.add("col");

    const personCard = document.createElement("div");
    personCard.classList.add("card");
    personColumn.appendChild(personCard);

    const newPerson = document.createElement("div");
    newPerson.classList.add("card-body");

    const personName = document.createElement("h3");
    personName.innerText = `${person.first_name} ${person.last_name}`;
    personName.classList.add("card-title");
    newPerson.appendChild(personName);

    const personEmail = document.createElement("h3");
    personEmail.innerText = person.email;
    personEmail.classList.add("card-text");
    newPerson.appendChild(personEmail);

    personCard.appendChild(newPerson);

    userOutput.appendChild(personColumn);
}





getAllUsers();


function getUser() {
    axios.get("https://reqres.in/api/users/2")
        .then((result) => {
            console.log(result);
        }).catch((err) => {
            console.error(err);
        })
}

function create() {
    axios.post("https://reqres.in/api/users")
        .then((result) => {
            console.log(result);
        }).catch((err) => {
            console.error(err);
        })
}