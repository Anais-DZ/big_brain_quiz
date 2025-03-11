const titre = document.querySelector('.titre');
console.log(titre);
const question = document.querySelector('.question');
console.log(question);
const radio = document.querySelectorAll('input[type="radio"]')
const radioTb = Array.from(radio) 

const lis = document.querySelectorAll('.reponseLi');
const liTableau = Array.from(lis);

console.log(liTableau);

for(let i=0 ; i<liTableau.length;i++){
    console.log(liTableau[i].textContent);

    liTableau[i].addEventListener("click",function(){
        console.log("click",liTableau[i].textContent)
        
        radioTb[i].checked = true;
        
    })
}

