let API_URL = "http://127.0.0.1:8081";

async function fetchUser() {
    const url = `${API_URL}/api/user/me`;

    const body = {
        method: "GET",
        headers: {
            Authorization: localStorage.getItem("session"),
            "Content-Type": "application/json",
        },
    };

    const rawData = await fetch(url, body);
    if (!rawData.ok) {
        console.error("Petite erreur lors de la récupération des données : ", rawData.statusText);
        return { error: "Impossible de récup ton profil", code: "ERROR_UNKNOWN" };
    }

    return await rawData.json();
}


async function logoutUser() {
    const url = `${API_URL}/api/auth/logout`;

    const body = {
        method: "POST",
        headers: {
            Authorization: localStorage.getItem("session"),
            "Content-Type": "application/json",
        },
    };

    const rawData = await fetch(url, body);

    if (!rawData.ok) {
        return { error: "Impossible de te déco", code: "ERROR_LOGOUT_USER" };
    }

    return await rawData.json()
}

async function loginUser(data) {

    const url = `${API_URL}/api/auth/login`;

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
            console.log("connecté",transformedData)
            localStorage.setItem("session",transformedData.token)
            return true;
        }else{
            console.log("identifiant invalide ")
            return false;
        }
        
    }catch(e){
        console.error("Erreur lors de l'appel à l'API : ", e)
    }
}


export { fetchUser,logoutUser,loginUser };
