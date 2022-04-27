// function getRequestBodyFromValues(formValues) {
//     let result = {};
//     formValues.forEach(function (x) {
//         result[x.field] = x.value;
//     })
//     return result;
// }
// var formValue = [
//     { field: "name", value: "Sơn Đặng" },
//     { field: "age", value: 18 },
//     { field: "address", value: "Hà Nội" },
// ];

// console.log(getRequestBodyFromValues(formValue));
// function checkPositiveNumbers(numbers) {
//     var result =  numbers.every(function(item){
//       return item > 0 
//     })
//     return result 

// }
// var numbers = [1,2,3,4,56,5]
// console.log(checkPositiveNumbers(numbers));
// var monters = [
//     {
//         name: 'Cá heo',
//         attack: 50,
//         speed: 100,
//         hitpoint: 100,
//     },
//     {
//         name: 'Khủng long',
//         attack: 150,
//         speed: 80,
//         hitpoint: 180,
//     },

// ]
// function findAMonsterByAttack(monsters) {
//     return monsters.find(function(item){
//       return item.attack == 150
//     })
// }
// var result = monters.find(function (item) {
//     return item.attack == 150
// })
// if (result == undefined) {
//     console.log(null);
// } if (result !== undefined) {
//     console.log(result);
// }
// function findStringsInArrayByKeyword(keyword, strings) {
      
//     return strings.filter(function(e){
//        return e.slice(e.indexOf(keyword),(keyword.length + e.indexOf(keyword))) === keyword;
//     })
  
// }
var arr1 = [1,2,3,4,5,6]
var arr2 = [2,4,6]
var arr = arr1.filter(function(item){
    return arr2.includes(item)
})
console.log(arr);