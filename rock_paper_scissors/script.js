
 x=0,y=0;
 const moves=["rock","paper","scissor"];
let rock=document.querySelector("#rock");

let paper=document.querySelector("#paper");
let scissor=document.querySelector("#scissor");
let display=document.querySelector("#score");
let cpomment=document.querySelector("#comment");

rock.addEventListener('click',()=>{
const randomIndex = Math.floor(Math.random() * moves.length);
const comp=moves[randomIndex];

if(comp==="rock"){
    display.innerText=
    `you:${x}     comp:${y}`;

comment.innerText="Its draw! try again";
comment.style.backgroundColor="blue";
}
if(comp==="paper"){y++;
 display.innerText=
    `you:${x}   comp:${y}`;

comment.innerText="Better luck next time";
comment.style.backgroundColor="red"
}
if(comp==="scissor"){x++;
    display.innerText=
    `you:${x}    comp:${y}`;

comment.innerText="well done";
comment.style.backgroundColor="green";
}


})
paper.addEventListener('click',()=>{
const randomIndex = Math.floor(Math.random() * moves.length);
const comp=moves[randomIndex];

if(comp==="rock"){x++;
    display.innerText=
    `you:${x}    comp:${y}`;

comment.innerText="well Done!";
comment.style.backgroundColor="green";
}
if(comp==="paper"){
   display.innerText=
    `you:${x}    comp:${y}`;

comment.innerText="Its draw! try again";
comment.style.backgroundColor="blue";
}
if(comp==="scissor"){y++;
    display.innerText=
    `you:${x} comp:${y}`;

comment.innerText="Better luck next time";
comment.style.backgroundColor="red";
}


})
scissor.addEventListener('click',()=>{
const randomIndex = Math.floor(Math.random() * moves.length);
const comp=moves[randomIndex];

if(comp==="rock"){y++;
    display.innerText=
    `you:${x} comp:${y}`;

comment.innerText="Better luck next time";
comment.style.backgroundColor="red";
}
if(comp==="paper"){x++;
   display.innerText=
    `you:${x} comp:${y}`;

comment.innerText="well Done!";
comment.style.backgroundColor="green";
}
if(comp==="scissor"){
   display.innerText=
    `you:${x} comp:${y}`;

comment.innerText="Its draw! try again";
comment.style.backgroundColor="blue";
}


})
