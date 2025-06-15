function calculateChaiIngredients() {
    
    let input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
    
<<<<<<< HEAD
    
    let numberOfCups = Number(input);



    
    const waterPerCup = 200;   
    const milkPerCup = 50;     
    const teaLeavesPerCup = 1; 
    const sugarPerCup = 2;     


=======
    let numberOfCups = Number(input);

    if (isNaN(numberOfCups) || numberOfCups <= 0) {
        console.log("Please enter a valid number greater than 0.");
        return; 
    }

    
    const waterPerCup = 200;   
    const milkPerCup = 50;     
    const teaLeavesPerCup = 1;
    const sugarPerCup = 2;     

    
>>>>>>> 8e3871ef6ac3c87e12c62fb369560b078db8bb07
    let totalWater = waterPerCup * numberOfCups;
    let totalMilk = milkPerCup * numberOfCups;
    let totalTeaLeaves = teaLeavesPerCup * numberOfCups;
    let totalSugar = sugarPerCup * numberOfCups;

    
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:
    Water: ${totalWater} ml
    Milk: ${totalMilk} ml
    Tea Leaves (Majani): ${totalTeaLeaves} tablespoons
<<<<<<< HEAD
    Sugar (Sukari): ${totalSugar} teaspoons
    Enjoy your Chai Bora!`);
}


calculateChaiIngredients();
=======
    Sugar (Sukari): ${totalSugar} teaspoons`)
    Enjoy your Chai Bora!
}
>>>>>>> 8e3871ef6ac3c87e12c62fb369560b078db8bb07
