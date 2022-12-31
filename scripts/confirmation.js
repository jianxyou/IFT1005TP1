const nameString = localStorage.getItem('name');
let namee = JSON.parse(nameString).name;
console.log(namee);
document.getElementById('nameSpan').innerHTML = namee;