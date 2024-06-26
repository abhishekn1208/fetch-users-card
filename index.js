let btn = document.querySelector("button").addEventListener("click",function(){
    GetUsers()
})


function displayUsers(users){
const userDetails = document.getElementById("user-details");
userDetails.innerHTML = "";
users.forEach((user)=>{
    const card = document.createElement("div");
    card.classList.add("users-details")

    card.innerHTML = `
    <img src="${user.avatar}" alt="${user.first_name } ${user.last_name}" />
   <h3>${user.first_name } ${user.last_name}</h3>
   <p>${user.email}</p>
   `

   userDetails.appendChild(card)
})
}



async function GetUsers(){
    try {
       let f1 = await fetch(`https://reqres.in/api/users`)
        let data = await f1.json();
        console.log(data.data)
        displayUsers(data.data)
    } catch (error) {
        console.log("Something went wrong")
    }
}
