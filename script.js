// const obj = {            //const k aage hee toh likha h hmne obj ko or equals to smne lagaya h 
//     "name":"anshika",
//     "lastName":"aggarwal"
// }
// obj.name=20;

// console.log(obj);


// let arr =[2,3,4,5];
// arr=[6,7,8];
// console.log(arr);

// const arr =[2,3,4,5];
// arr=[6,7,8];
// console.log(arr);   //isme error ayegaaa 


// const  arr =[2,3,4,5];
// arr[10]= 20;
// console.log(arr);        //address 10 ko value mil jyegi 20


// const  arr =[2,3,4,5];
// arr.push(10);
// console.log(arr);  //push help to insert an element in the end 



// const  arr1 =[2,3,4,5];

// console.log(typeof(arr));  //typeof tell type of array 
// console.log(Array.isArray(arr1));


// const obj = {            //const k aage hee toh likha h hmne obj ko or equals to smne lagaya h 
//     "name":"anshika",
//     "lastName":"aggarwal"
// }
// const arr2 =[1,2,3,4,];
// arr[2] =4;
// console.log(Array.isArray(obj));
// console.log(Array.isArray(arr1));     //Array.isArray tell it is array or not 



// function checkIfObject(x){
//    if(Array.isArray(x)){
//     console.log("not object");
//    }
//    else{
//     console.log("object");
//    }

// }
// checkIfObject([]);


// console.log(typeof(null));
// console.log(typeof(umdefined));




// const arr = ['name',2];
// const obj ={
//     'name':"ajay",age :20,1: 'else'

// };
// for(let i=0;i<2;i++){
//     console.log(obj[i]);

// }
// for(let i of arr){
//     console.log(i);

// }
// for(let i of obj){
//     console.log(i);
// }

// for(let i in arr ){
//     console.log(i);
// }

// for(let i in obj){
//     console.log(i);
// }


// console.log(window)
// console.log(window.innerHeight)
// console.log(window.innerWidth)
// console.log(window.document)
// console.dir(window.document)


// const res = document.getElementsByTagName('h3')
// console.log(res)

// const s = document.getElementById('ht1')
// console.log(s)

// const d = document.getElementById('t1')
// console.log(d)

// const f  = document.querySelectorAll('h3');
// console.log(f)

// const g= document.querySelectorAll('h3.c1');
// console.log(g)

// const d = document.getElementById("ht1");
// d.innerText = "hello,world";
// d['innerText']="hello ";
// console.log(d)



// const res = getElementsByTagName("div");


const ne = document.createElement("h3");
console.log(ne);
ne.innerText = "Dynamic Text";
console.log(ne);
document.body.appendChild(ne);




const firstDiv = document.getElementsByTagName('div');
firstDiv[0].appendChild(ne);  //added  the inner text in div by firstDiv[0]



const firDiv = document.getElementsByTagName('div');
firDiv[0].remove(ne);