const email = document.getElementById('email')
const mdp = document.getElementById('motDePasse')
const mdpComfirm = document.getElementById('motDePasseConfirm')
const btnInscr = document.getElementById('btnIns')
const MessageMdp = document.getElementById('messageMdp')
const nom = document.getElementById('nom')
const prenom = document.getElementById('prenom')

MessageMdp.style.display='none'

const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
const regexMDP = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;


/* REGEX Email*/
email.addEventListener('keyup', ()=>{ 
    
    if (regexMail.test(email.value)){
        email.style.border = 'solid 1px rgb(100, 206, 123)'
        email.style.boxShadow=' 0px 0px 2px rgb(100, 206, 0.12)'
        email.style.background='white'
     
    } else {
        email.style.border= 'solid 2px rgba(220, 135, 135, 0.91)'
        email.style.boxShadow=' 0px 0px 2px rgb(199, 84, 84)' 
    }
})


/* REGEX MDP*/
btnInscr.addEventListener('click',function(e){
    e.preventDefault()


    // const UserDataIns = {
    //     firstname:prenom.value,
    //     lastname:nom.value,
    //     email: email.value,
    //     password: mdp.value,
    //     password_confirm:mdpComfirm.value,

    // }

    
    // return addUserApi(UserDataIns)


    if(regexMDP.test(mdp.value) && regexMDP.test(mdpComfirm.value)){
   
        if(mdp.value===mdpComfirm.value){
           
            
            mdp.style.border = 'solid 1px rgb(100, 206, 123)'
            mdp.style.boxShadow=' 0px 0px 2px rgb(100, 206, 0.12)'

            
            mdpComfirm.style.border = 'solid 1px rgb(100, 206, 123)'
            mdpComfirm.style.boxShadow=' 0px 0px 2px rgb(100, 206, 0.12)'

            MessageMdp.style.display='none'

            console.log('prenom:',prenom.value)
            console.log('nom:',nom.value)
            console.log('mdp:',mdp.value)
            console.log('mdpComf:',mdpComfirm.value)
            console.log('email:',email.value)


            //contacter l'API !!! =>Fetch

            const UserDataIns = {
                firstname:prenom.value,
                lastname:nom.value,
                email: email.value,
                password: mdp.value,
                password_confirm:mdpComfirm.value,

            }

            
            addUserApi(UserDataIns)
          
        }else{
            messageErreur() 
        }
        
    }else{ 
        messageErreur()
    }

})

const messageErreur=function(){
    
    btnInscr.style.marginTop='0'
    MessageMdp.style.display='block'
    MessageMdp.style.fontSize='12px'
    MessageMdp.style.margin='0'
    MessageMdp.style.color='rgb(211, 46, 46)'
    MessageMdp.style.transform='translateY(-14px)'
    mdp.style.border= 'solid 2px rgba(220, 135, 135, 0.91)'
    mdp.style.boxShadow=' 0px 0px 2px rgb(199, 84, 84)' 
 
    mdpComfirm.style.border= 'solid 2px rgba(220, 135, 135, 0.91)'
    mdpComfirm.style.boxShadow=' 0px 0px 2px rgb(199, 84, 84)' 
}



const addUserApi= async function(userData){

    const url ="http://127.0.0.1:8081/api/auth/register";

    const body={
        method:"POST",
        body: JSON.stringify(userData), // convertir l'objet en JSON !
    }
    

    try{
        
        const rawData=await fetch(url,body);
       
        if (!rawData.ok) {
            console.log(rawData.body)
            console.log(await rawData.json())
            console.error("Petite erreur lors de la récupération des données : ", rawData.statusText);
            return;
        }

        const transformedData= await rawData.json()
        console.log("GG utilisateur ajouté avec succès :", transformedData);

    }catch(e){
        console.error("Erreur lors de l'appel à l'API : ", e)
    }
    
}