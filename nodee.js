var cel=document.getElementById("cel");
var fah=document.getElementById("fah");
var kel=document.getElementById("kel");



cel.addEventListener('input',function(){
    let c=this.value;
    let f=(c*9/5)+32;
    let a=(c++ + 273.15);
    var k=(a);
    fah.value=f;
    kel.value=k;
    
})
fah.addEventListener('input',function(){
    let f=this.value;
   let c=(f-32)*5/9;
    let k= (f+459.67)*5/9;
    cel.value=c;
    kel.value=k;
})
kel.addEventListener('input',function(){
   let k=this.value;
   let f=1.8*(k-273)+32;
   let c=k-273.15;
    cel.value=c;
    fah.value=f;
})

// add Event listner
