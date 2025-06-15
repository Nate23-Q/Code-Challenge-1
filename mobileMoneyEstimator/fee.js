function estimateTransactionFee() {
    
    let input = prompt("Unatuma Ngapi? (KES):");

    
    let amountToSend = Number(input);


    if (isNaN(amountToSend) || amountToSend <= 0) {
        console.log("Tafadhali weka kiasi cha pesa halali.");
        return;
    }

    
    let calculatedFee = amountToSend * 0.015;

    
    let finalFee = Math.max(10, Math.min(70, calculatedFee));

    
    finalFee = Math.round(finalFee); 

    
    let totalDebit = amountToSend + finalFee;


    console.log(`Sending KES ${amountToSend}:
    Calculated Transaction Fee: KES ${finalFee}
    Total amount to be debited: KES ${totalDebit}
    Send Money Securely!`);
}
