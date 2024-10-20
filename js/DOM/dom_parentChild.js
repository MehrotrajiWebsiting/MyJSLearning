let parent=document.querySelector('.parent');
console.log(parent);

// get CHILDREN
console.log(parent.children); //RETURNS HTMLCollection
console.log(parent.children[1].innerHTML); //Tuesday (Second child had Tuesday)

for (let i=0;i<parent.children.length;i++){
    console.log(parent.children[i].innerHTML); //traverses all children
    parent.children[i].style.color="orange";
}

console.log(parent.firstElementChild); //same as parent.children[0]
console.log(parent.lastElementChild);  //same as parent.children[parent.children.length-1]


//CHILD TO PARENT
let day1=document.querySelector('.day'); 
console.log(day1);
let p=day1.parentElement;//Parent
console.log(p);

// SIBLING
console.log(day1.nextElementSibling); //div which had Tuesday

// CHILD NODES gives NodeList with its own text and children tags (line breaks are also considered text node)
console.log("Nodes : ",parent.childNodes); //returns NodeList of size 9 
//(line break + child + line break + child + ...)
// on adding comment it becomes 11 (1 for comment 1 for extra line break after comment)