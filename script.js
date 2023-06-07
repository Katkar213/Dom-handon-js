// Q4.........

let b=document.getElementById("hello")

b.addEventListener('click',()=>{

b.innerText="Hello World"
})


// Q5.......
let c=document.getElementsByClassName("replace")
function replace(){
c[0].innerText="Welcome To Elevation Academy"
}


// Q6........
let d=document.getElementById("addattributes")
d.addEventListener("click",()=>{
d.style.color="red"
d.setAttribute("id","heading")
})


// Q7....
let parent=document.getElementsByClassName("parent")
let count=false;
function changedirection(){
    if(count){
        parent[0].style.flexDirection="row"
        count=false;
    }
    else{
        parent[0].style.flexDirection="column"
        count=true;
    }
    
    console.log(parent);
    }


// Q.9.....
let start=document.getElementById("starting")
let AMPM="AM"

    function clock(){
  let time= new Date();

  let hrs=time.getHours();
  let min=time.getMinutes();
  let sec=time.getSeconds();
  
if(hrs>12){
    hrs=hrs-12;
    AMPM="PM"
}
if(hrs===0){
    hrs=12;
}
  start.innerText=`${hrs}:${min}:${sec}:${AMPM}`
    }

  setInterval(()=>{
   clock();
  },1000)
  
let ans=function(a,b){
    return a+b;
}

let e=ans(10,20);
console.log(e)

let girl=function(a,b){
    console.log(123)
    return a+b;

}

console.log(girl(10,20))

    

