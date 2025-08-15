
function WoodCFTCalculate(lengthInches, baseInches, heightInches) {
    
    const lengthFeet = parseFloat(lengthInches / 12);
    const baseFeet = parseFloat(baseInches / 12);
    const heightFeet = parseFloat(heightInches / 12);

    const cft = lengthFeet * baseFeet * heightFeet;
            
    // Formula 02 -> lengthFeet(ft) * baseFeet(inch) * heightFeet(inch) / 144 ;
    // Formula 03 : 1.5*30*60 inch^3 / 1728 [All are converted in Inchi];

    return cft;
}

var totalResult = WoodCFTCalculate(60, 30, 1.5);
console.log('TOTAL CFT/KB WOOD NEEDED: ' + totalResult);
        