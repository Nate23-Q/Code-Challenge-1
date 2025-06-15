function calculateBodaFare() {
    
    let input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?");

    
    let distanceInKm = Number(input);

    
    if (isNaN(distanceInKm) || distanceInKm < 0) {
        console.log("Tafadhali weka idadi ya kilometer yenye maana.");
        return;
    }


    const baseFare = 50;      
    const chargePerKm = 15;   

    
    let totalFare = baseFare + (distanceInKm * chargePerKm);

    
    console.log(`Uko kwote? Io ni ${distanceInKm} km:
    Ukikalia Pikipiki: KES ${baseFare}
    Mpaka Uko: KES ${distanceInKm * chargePerKm}
    Total: KES ${totalFare}
    Panda Pikipiki!`);
}
calculateBodaFare()