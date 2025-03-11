const email = document.getElementById('email')
console.log(email)

const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;

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
