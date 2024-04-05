// const firstNameChange = (e)=>{
//     console.log(e);
//     // console.log(e.target.value);

// }

    const firstNameChange = (e)=>{
        const val = e.target.value;
        if(val.length>3){
            console.log('correct');
        }
    }


    // const submitform = (e) =>{
    //     e.preventDefault();
    //     console.log(e);
    // }
    // function submitForm(e){
    //     e.preventDefault();

        // console.log(e)
        // console.dir(e.target);
        // const t = e.target
        // for(let i=0;i<t.length;i++){
        //     console.dir(t[i] .value);
        //     // console.dir(t[i]);   
        //     console.dir(t[i].type);     
        //  }

    // nextcode
//     for(let i=0;i<t.length;i++){
//        const ty = t[i].type;
//        const vl = t[i].value;
//        console.log(ty,vl);
//        if(ty=='checkbox'){
//         console.log(t[i].checked);
//        }
//     }
// }


// new code
function submitForm(e){
    e.preventDefault();
    const t = e.target;
    const res = {
        hobbies:[],
    };

for(let i=0;i<t.length;i++){
   const ty = t[i].type;
   if(ty!='submit'){
   
   const vl = t[i].value;
   const nm = t[i].name;
   
   
   if(ty== 'checkbox' && t[i].checked){
    res.hobbies.push(vl);

   }

   if(ty != 'checkbox'){
    res[nm] = vl;
   }
}
}
console.log(res);

}



