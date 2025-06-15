function calculateChaiIngredients() {
    
    let input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
    
    
    let numberOfCups = Number(input);



    
    const waterPerCup = 200;   
    const milkPerCup = 50;     
    const teaLeavesPerCup = 1; 
    const sugarPerCup = 2;     


    let totalWater = waterPerCup * numberOfCups;
    let totalMilk = milkPerCup * numberOfCups;
    let totalTeaLeaves = teaLeavesPerCup * numberOfCups;
    let totalSugar = sugarPerCup * numberOfCups;

    
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:
    Water: ${totalWater} ml
    Milk: ${totalMilk} ml
    Tea Leaves (Majani): ${totalTeaLeaves} tablespoons
    Sugar (Sukari): ${totalSugar} teaspoons
    Enjoy your Chai Bora!`);
}


calculateChaiIngredients();