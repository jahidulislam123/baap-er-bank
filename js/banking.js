
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

});

// handle withdraw evenet handler
document.getElementById('withdraw-button').addEventListener('click',function(){

    const withdrawInput =document.getElementById('withdraw-input');
    const withdrawAmountText =withdrawInput.value;
    const newWithdrawAmount=parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);
    // set withdraw total
    const withdrawTotal =document.getElementById('withdraw-total');
    const previousWithdrawTotalText =withdrawTotal.innerText;
    const previousbalanceTotal=parseFloat(previousWithdrawTotalText);

    const newWithdrawTotal =previousbalanceTotal+newWithdrawAmount;
    withdrawTotal.innerText=newWithdrawTotal;
    
    // update balance after withdraw 
    const balanceTotalww=document.getElementById('balance-total');
    const previousbalancetextw =balanceTotalww.innerText;
    // console.log('clicked');
    const previousbalanceTotalww=parseFloat(previousbalancetextw);
    const newBalanceTotalww=previousbalanceTotalww-newWithdrawAmount;
    balanceTotalww.innerText=newBalanceTotalww;
    withdrawInput.value='';
    


});


// document.getElementById('withdraw-button').addEventListener('click',function(){

//     const withdrawInput =document.getElementById('withdraw-input');
//     const withdrawAmountText =withdrawInput.value;
//     const newWithdrawAmount=parseFloat(withdrawAmountText);
//     console.log(newWithdrawAmount);
//     // set withdraw total
//     // const withdrawTotal =document.getElementById('withdraw-total');
//     // const previousWithdrawTotalText =withdrawTotal.innerText;
//     // const previousbalanceTotal=parseFloat(previousWithdrawTotalText);

//     // const newWithdrawTotal =previousbalanceTotal+newWithdrawAmount;
//     // withdrawTotal.innerText=newWithdrawTotal;
    
//     // update balance after withdraw 
//     const balanceTotal=document.getElementById('balance-total');
//     const previousbalancetext =balanceTotal.innerText;
//     // console.log('clicked');
//     const previousbalanceTotal=parseFloat(previousbalancetext);
//     const newBalanceTotal=previousbalanceTotal-newWithdrawAmount;
//     balanceTotal.innerText=newBalanceTotal;
//     withdrawInput.value='';


// })