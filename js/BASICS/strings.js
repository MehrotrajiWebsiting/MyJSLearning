let a='om'
let b="om"
console.log(a+b);
console.log(`${a} ${b}`); //string interpolation
// backticks `` is on left of 1 key

a=new String('om')
console.log(a);//String('om')

console.log(a[0]);//o
console.log(a.__proto__);//String('')
console.log(a.length);//2
console.log(a.toUpperCase());//OM
console.log(a.charAt(1));//m
console.log(a.indexOf('m'));//1
a='mehrotra'
console.log(a.substring(1,5));//ehro (-VE IGNORED)
console.log(a.slice(-5,-1));//rotr (-VE FOR RIGHT TO LEFT)

a=' mehrotra    '
console.log(a.trim());//mehrotra

console.log(a.replace('ro','bro'));//mehbrotra
console.log(a);// mehrotra     
console.log(a.includes('ro'));//true
a='o-gadf-feg-gdag'

let arr=a.split('-')
console.log(arr);//['o', 'gadf', 'feg', 'gdag']












