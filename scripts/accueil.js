
const vignette= document.getElementsByClassName('theme')
const vignetteTableau = Array.from(vignette)
const listeD = document.getElementById('categorie')
console.log(listeD)


const apiFetch = async(url, body)=> { 
    try{
        const rawData = await fetch(url, body);
    
        if (!rawData.ok || rawData.status !== 200) {
            console.error("Petite erreur lors de la récupération des données : ", rawData.statusText);
            return;
        }

        const transformedData = await rawData.json();
        console.log(transformedData);
        return(transformedData);
    }
    catch (error) {
        console.error("Erreur lors de l'appel à l'API : ", error);
    }
}

let arrayQuizz = await apiFetch("https://quizz.adrardev.fr/api/quizzs/all", {method:"GET"});

console.log(arrayQuizz);



for(let i=0; i<arrayQuizz.length;i++){

   for(let i =0; i<arrayQuizz[i].categories.length;i++){
        
        const option= document.createElement('option');
        option.textContent=`${arrayQuizz[i].categories[i].title}`;
        listeD.appendChild(option);
        console.log('tout à bien marché')
    }
   
}

for(let i=0; i<arrayQuizz.length;i++ ){
   
    const titre = vignetteTableau[i].querySelector('h3');
    titre.textContent=`${arrayQuizz[i].title}`;
} 

vignetteTableau.forEach(vignette =>{
 
    vignette.addEventListener('click',function(){
        console.log('click')
        window.location='./question.html'

    })
});


// const option = document.getElementsByName('option')
// const optionTb = Array.from(option)
// console.log(optionTb)

const quizApi=async function(){

    const url ="";//"API" !!!
    try{

        const rawData=await fetch(url);
        if (!rawData.ok || rawData.status !== 200) {
            console.error("Petite erreur lors de la récupération des données : ", rawData.statusText);
            return;
        }

        const transformedData= await rawData.json()
        console.log(" récuperation des connecté avec succès : ", transformedData);


        // retourne les données :
        return transformedData;

    }catch(e){
        console.error("Ah dommage ,erreur lors de l'appel a l'API : ", e)
    }
    
}