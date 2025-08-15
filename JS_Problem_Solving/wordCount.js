var speech = 'Hello this is Muhammad Musfiq. Now I am learning somethings new things!';

var count = 0;
for (let i = 0; i < speech.length; i++) {
    const char = speech[i];
    if (char === ' ' && speech[i-1] != ' ') {
        count++;
    } 
}
count++;
console.log(count); 

