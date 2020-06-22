const dealy = (a)=>{
    return new Promise(
        (resolve) =>{ 
            setTimeout(resolve,a*1000 );
        } );
}

let first =dealy(2);
let seond1 =dealy(4);
let third =dealy(6);
const three = Promise.all([first,seond1,third])
.then((result)=>{
console.log('execute');

});

console.log(three);

const seond = async()=>{
    await dealy(2);
    console.log('check this after some dealy');
    await dealy('second');
    console.log('check this after some dealy');
}

//seond();
//console.log('xero second execution');
//dealy(2).then(()=> console.log('after two second'));
//console.log('after some second');