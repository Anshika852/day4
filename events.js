// function getInfo (){
//     console.log("Btn clicked");
//     const d = document.querySelector("div");
//     // const el = document.querySelector("")
//     // el.innerText = "my name is anshika ";
//     d.prepend("my name is anshika ");
//     console.log("btn clicked");      //btn click krne p koi text ayegaa  

// }

function getInfo(e){
    console.log(e);

    // e.target.setAttribute('style','color')
    // e.target.setAttribute('style', 'background-color:green')
    e.target.style.backgroundColor= 'green';
    e.target.style.Color= 'red';

}
