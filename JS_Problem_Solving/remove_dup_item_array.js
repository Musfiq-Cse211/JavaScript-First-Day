var arr = [34, 65, 77, 34, 98, 14, 45, 65, 34];
var uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    var index = uniqueArr.indexOf(element);
    if (index == -1) {
        uniqueArr.push(element)
    }
}
console.log(uniqueArr);