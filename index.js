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


//GETELEMENTBYCLASSNAME//

var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
console.log(items[2]);
console.log(items[2]);


items[3].style.backgroundColor='green';

for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight ='bold';
}

//GETRLEMENTBYTAGNAME//
var li=document.getElementsByTagName('li');
console.log(li);
console.log(items[5]);
for(var i=0;i<items.length;i++)
{
    items[i].style.backgroundColor ='yellow';
}
