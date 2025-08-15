function megaFriend(names) {
    if (!Array.isArray(names)) {
        return 'Invalid Input!';
    }
    let longestName = '';
    let longestNameLength = 0;

    for (let i = 0; i < names.length; i++) {
        if (typeof names[i] !== 'string') {
            return 'Invalid Input';
        }
        const currentNameLength = names[i].length;
        
        if (currentNameLength > longestNameLength) {
            longestName = names[i];
            longestNameLength = currentNameLength;
        }
    }
    return longestName;
}
let names = ["Akter", "Jakir", "Shozib", "Naeem", "Romi"];
console.log(megaFriend(names));

//------------------------------------------------------------------------>>>
// function megaFriend(names) {
//     let nameLength = [];        //stores length of each name
//     let invalidCheck = 0;       //checks for invalid input
//     for (let i = 0; i < names.length; i++) {
//         let singleName = names[i];
//         if (typeof (singleName) == "string") {
//             nameLength.push(singleName.length);
//             console.log(names[i], names[i].length);
//         } else {
//             invalidCheck = -1;
//         }
//     }
//     if (invalidCheck == 0) {        // invalidCheck = 0 means no invalid input arrive
//         console.log("Name Lengths: " + nameLength);
//         let largeLength = nameLength[0];
//         let largeIndex = 0;
//         for (let i = 0; i < nameLength.length; i++) {
//             if (nameLength[i] > largeLength) {
//                 largeLength = nameLength[i];
//                 largeIndex = i;
//             }
//         }
//         console.log("Large index: " + largeIndex, "Large length: " + largeLength);
//         return names[largeIndex];
//     } else {
//         return "Invalid Input";
//     }
// }

// let names = ["Ashraful", "Akhi", "Shukhy", "Naeem", "Tom"];
// console.log(megaFriend(names));



