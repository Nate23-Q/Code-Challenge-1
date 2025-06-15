function estimateTransactionFee() {
    
    let input = prompt("Unatuma Ngapi? (KES):");

    
    let amountToSend = Number(input);


    if (isNaN(amountToSend) || amountToSend <= 0) {
        console.log("Tafadhali weka kiasi cha pesa halali.");
        return;
    }

    
    let calculatedFee = amountToSend * 0.015;

<<<<<<< HEAD
=======
    
>>>>>>> 8e3871ef6ac3c87e12c62fb369560b078db8bb07
    let finalFee = Math.max(10, Math.min(70, calculatedFee));

    
    finalFee = Math.round(finalFee); 

    
    let totalDebit = amountToSend + finalFee;

<<<<<<< HEAD
    
    console.log(`Sending KES ${amountToSend}
=======

    console.log(`Sending KES ${amountToSend}:
>>>>>>> 8e3871ef6ac3c87e12c62fb369560b078db8bb07
    Calculated Transaction Fee: KES ${finalFee}
    Total amount to be debited: KES ${totalDebit}
    Send Money Securely!`);
}
<<<<<<< HEAD
estimateTransactionFee()
=======
>>>>>>> 8e3871ef6ac3c87e12c62fb369560b078db8bb07
