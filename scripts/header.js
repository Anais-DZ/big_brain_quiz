import { fetchUser } from "./api.js";

const user = await fetchUser();

if (user.code) {
    console.log("Erreur", user.error);
}

const firstname = document.getElementById("firstname");
const role = document.getElementById("role");

const roles = JSON.parse(user.roles_user);

if (roles.includes("ROLE_ADMIN")) {
    role.textContent = "Admin";
} else if (roles.includes("ROLE_USER")) {
    role.textContent = "Utilisateur";
}

firstname.textContent = `Bienvenue, ${user.firstname_user}`;
