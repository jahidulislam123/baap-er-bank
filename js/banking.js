
// handle deposit button event 
document.getElementById('deposit-button').addEventListener('click',function(){
    // console.log('deposite button');


    // get the amount deposited 
    const depositInput= document.getElementById('deposit-input');
    const newDepositText =depositInput.value ;
    const newDepositAmount =parseFloat( newDepositText);
    // console.log(depositAmount);
    const depositTotal =document.getElementById("deposit-total");
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = parseFloat(previousDepositAmount+newDepositAmount ) ;
    
    depositTotal.innerText=newDepositTotal;
   // clear the input deposit fiels
   depositInput.value='';

//    update acount  balance 
    const balanceTotal =document.getElementById('balance-total');
    const balanceTotalText =balanceTotal.innerText;
    const previousbalanceTotal=parseFloat(balanceTotalText);
    const newBalanceTotal =previousbalanceTotal+ newDepositAmount;
    balanceTotal.innerText=newBalanceTotal;
    depositInput.value='';

})