import { fetchUser, logoutUser } from "./api.js";

const user = await fetchUser();

if (user.code) {
    console.log("Erreur", user.error);
}

const firstname = document.getElementById("firstname");
const role = document.getElementById("role");
const roles = JSON.parse(user.roles_user);
const authButton = document.getElementById('authButton');

const ulNav= document.querySelector('.contenaire');

    authButton.textContent='Deconnexion';

    authButton.addEventListener('click', async () => {
        await logoutUser();
        localStorage.removeItem("session")
    })

    if (roles.includes("ROLE_ADMIN")) {
        role.textContent = "Admin";
    } else if (roles.includes("ROLE_USER")) {
        role.textContent = "Utilisateur";
        const li = document.createElement('li');
        li.style.listStyleType = 'none'
        const a = document.createElement('a');
        a.classList.add('navHeader');
        a.textContent = 'Mon compte';
        a.href = './user.html';
        li.appendChild(a);
        ulNav.appendChild(li);
        ulNav.append(authButton);
    }

    console.log(user)
    firstname.textContent = `Bienvenue, ${user.firstname_user}`;


