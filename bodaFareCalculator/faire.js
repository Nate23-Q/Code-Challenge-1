function calculateBodaFare() {
    
    let input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?");

<<<<<<< HEAD
    
=======

>>>>>>> 8e3871ef6ac3c87e12c62fb369560b078db8bb07
    let distanceInKm = Number(input);

    
    if (isNaN(distanceInKm) || distanceInKm < 0) {
        console.log("Tafadhali weka idadi ya kilometer yenye maana.");
        return;
    }

<<<<<<< HEAD

    const baseFare = 50;      
    const chargePerKm = 15;   

=======
    
    const baseFare = 50;      
    const chargePerKm = 15;   

>>>>>>> 8e3871ef6ac3c87e12c62fb369560b078db8bb07
    
    let totalFare = baseFare + (distanceInKm * chargePerKm);

    
<<<<<<< HEAD
    console.log(`Uko kwote? Io ni ${distanceInKm} km:
    Ukikalia Pikipiki: KES ${baseFare}
    Mpaka Uko: KES ${distanceInKm * chargePerKm}
    Total: KES ${totalFare}
    Panda Pikipiki!`);
}
calculateBodaFare()
=======
    console.log(`Uko kwote? Io ni ${distanceInKm} km:;
    Ukikalia Pikipiki: KES ${baseFare}
    Mpaka Uko: KES ${distanceInKm * chargePerKm}
    Total: KES ${totalFare}`);
    Panda Pikipiki!;
}
>>>>>>> 8e3871ef6ac3c87e12c62fb369560b078db8bb07
