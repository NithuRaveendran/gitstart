
var itemList=document.querySelector('#items')

// PARENTELEMENT//
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='grey';


//LASTELEMENTCHILD//
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='hey';

//LASTCHILD//
console.log(itemList.lastChild);

//FIRSTELEMENTCHILD//
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='hey';

//FIRSTCHILD//
console.log(itemList.firstChildChild);
itemList.firstChild.backgroundColor='yellow';

//NEXTSIBLING//
console.log(itemList.nextSibling);
itemList.nextSibling.textContent='Hello';

//NEXTELEMENTSIBLING//
console.log(itemList.nextElementSibling);
//itemList.nextElementSibling.textContent='Hello';

//PREVIOUSSIBLING//
console.log(itemList.previousSiblingtSibling);
itemList.previousSibling.textContent='Hello';

//PREVIOUSELEMENTSIBLING//
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.textContent='Hello';

//CREATEELEMENT//
//create div
var newDiv = document.createElement('div');
//add class
newDiv.className='hello';
//add id
newDiv.id='hello1';
//add attribute
newDiv.setAttribute('title','Hello Div');
//create text node
var newDivText=document.createTextNode('Hello World');
//add text to div
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize='30px';

container.insertBefore(newDiv,h1);
