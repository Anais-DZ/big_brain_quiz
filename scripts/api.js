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

export { fetchUser };
