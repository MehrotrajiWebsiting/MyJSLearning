/* NodeList and HTMLCollection are NOT Arrays
    You can use forEach in NodeList
    Normal for loop can work 
    You can convert them to Array to apply Array Functions - 
    Array.from(variable_name)
*/
// USE THIS IF WRITING SCRIPT TAG IN HEAD 
// IT IS NOT REQUIRED WHEN SCRIPT TAG IS AT END OF BODY
document.addEventListener("DOMContentLoaded",
    (event) => {

    let a = document.getElementById('title')

    let b = document.getElementsByClassName('odd_heading') /*returns HTMLCollection of elements so can't be used
        for styling and other things (you need to loop over them) source - stackOverflow */
    let c = document.getElementsByTagName('h1') /*returns HTMLCollection of elements so can't be used
        for styling and other things (you need to loop over them) source - stackOverflow */

    //get id
    console.log(a.id);//title
    //get class
    console.log(a.className);//heading
    //get id
    console.log(a.getAttribute('id'));//title
    //get class
    console.log(a.getAttribute('class'));//heading

    //OVERWRITE value of attribute class (removes previous value)
    a.setAttribute('class','test')
    console.log(a.getAttribute('class'));//test
    //give multiple classes
    a.setAttribute('class','test heading')
    console.log(a.getAttribute('class'));//test heading


    // INSERTING STYLE
    a.style.color="blue";
    a.style.fontWeight = "100";
    a.style.padding="15px";

    //using className
    Array.from(b).forEach(
        function (i){
            i.style.color="pink";
            i.style.padding="10px"
        }
    )

    // GET CONTENT

    // innerText = content that is actually VISIBLE 
    // textContent = Entire text (even if not visible on page)
    //innerHTML = HTML along with text (child tags are included)

    console.log(a.innerText); //'DOM Learning'
    console.log(a.textContent); // 'DOM Learning test text '
    console.log(a.innerHTML); //'DOM Learning <span style="display: none;">test text</span> '


    //querySelector - return first element'
    // SELECTS using all the CSS selectors

    let q=document.querySelector('h2'); //first h2 only
    q.style.color="brown";

    q=document.querySelector('#title'); //selection on basis of id
    q.style.color="yellow";

    q=document.querySelector('.heading'); //selection on basis of class
    q.style.color="red";

    q=document.querySelector('input[type=password]');
    q.style.backgroundColor="blue";

    // querySelector within another querySelector
    let myul=document.querySelector('ul');
    let myli=myul.querySelector('li');
    myli.style.backgroundColor="yellow";
    myli.style.padding="20px";
    // change text
    myli.innerText="five"


    // querySelectorAll - selects ALL elements which matches - It returns NodeList
    let myol=document.querySelector('ol');
    myli=myol.querySelectorAll('li');//returns NodeList
    // cannot write myli.style.backgroundColor as it gives error
    myli[0].style.backgroundColor="green";//first li (index[0])

    // loop over all elements
    myli.forEach(element => {
        element.style.color="brown";
    }

);});