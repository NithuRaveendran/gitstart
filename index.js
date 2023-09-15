//GETELEMENTBYID//
console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent='Hello';
headerTitle.innerText='HEY';
console.log(headerTitle.innerText);
headerTitle.innerHTML='<h3>Hello</h3>';
headerTitle.style.borderBottom='solid 3px #000';


var Additems=document.getElementById('title');
console.log(Additems);
Additems.style.fontWeight = 'bold';
Additems.style.color = 'green';


