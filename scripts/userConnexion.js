import { loginUser } from "./api";


const email = document.getElementById('identifiantConnexion');
const mdp=document.getElementById('motDePasseConnexion')
const btnConnexion = document.getElementById('btnConnexion')

btnConnexion.addEventListener('click', async function(e) {
    e.preventDefault();

    if (!email.value || !mdp.value) {
        console.log("Tous les champs doivent être remplis !");
        return;
    }
    const EmailValue=email.value
    const mdpValue=mdp.value
    // console.log('Email:', EmailValue);
    // console.log('Mot de passe:', mdpValue);


    const userData={
        email:EmailValue,
        password:mdpValue,
    }

    await loginUser(userData);
});



