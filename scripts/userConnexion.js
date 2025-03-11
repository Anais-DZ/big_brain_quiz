const email = document.getElementById('identifiantConnexion');
const mdp=document.getElementById('motDePasseConnexion')
const btnConnexion = document.getElementById('btnConnexion')

let user;

btnConnexion.addEventListener('click', function(e) {
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

    logUserApi(userData);


    
});




const logUserApi=async function(data){

    const url ="http://127.0.0.1:8081/api/auth/login";

    const body={
        method:"POST",
        Headers:{"Content-Type": "application/json",},
        body: JSON.stringify(data), // convertir l'objet en JSON !
    }

    try{

        const rawData=await fetch(url,body);
        if (!rawData.ok || rawData.status !== 200) {
            console.error("Petite erreur lors de la récupération des données : ", rawData.statusText);
            return;
        }

        const transformedData= await rawData.json()
        if(transformedData.token ){
            document.cookie='';
            console.log("connecté",transformedData)
            localStorage.setItem("session",transformedData.token)

        }else{
            console.log("identifiant invalide ")
        }
        
    }catch(e){
        console.error("Erreur lors de l'appel à l'API : ", e)
    }
    
}

