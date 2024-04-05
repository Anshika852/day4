const res = document.querySelector('div');
// const c = document.querySelector('p');  //romove he first p
const c = document.querySelector('p:nth-of-type(2)'); ///remove the second p
console.log(res);
// res.remove();  //remove the full div

res.removeChild(c); //remove the child element of div 