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



