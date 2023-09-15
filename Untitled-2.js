//GETELEMENTBYCLASSNAME//

var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
console.log(items[2]);


items[1].textContent='Hai';
items[2].style.fontWeight = 'bold';
items[1].style.backgroundColor='grey';

for(var i=0;i<items.length;i++)
{
    items[i].style.backgroundColor ='grey';
}
items[2].style.fontColor='green';



