
// declaration 
const res = document.querySelector('.res') ;
 const form =document.querySelector('form');
 const btnSubmit =document.querySelector('#submit') ;
 let inputCrrency =document.querySelector('form input');
 // all dom loaded
document.addEventListener('DOMContentLoaded',()=>{
// disable  button 
	document.querySelector(' button').disabled = true
//  check if input empty 
  document.querySelector('form input').onkeyup =()=>{
 if(inputCrrency.value.length > 0){
    	btnSubmit.disabled = false ;
    }else{
      btnSubmit.disabled = true;
    }}
// on submit
form.onsubmit=()=>{
  	fetch('https://api.exchangerate.host/latest?base=MAD')
    .then(res => res.json())
    .then(data =>{
    	
      const rate = data.rates[inputCrrency.value.toUpperCase()] ;
       if(rate !== undefined){
          res.className="res";
       		res.innerHTML=`
          	1 MAD = ${rate} ${inputCrrency.value.toUpperCase()} ` ;
           inputCrrency.value ='';
       }
       else{
         // add class err to invalid currency
          res.className="err";
          res.innerHTML="Invalid currency";
          inputCrrency.value ='';
       }  
    })
     
    return false ;
  } 
})