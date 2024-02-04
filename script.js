let sun=document.querySelector("nav .change-icon i:first-child");
let moon=document.querySelector("nav .change-icon i:last-child");
let project=document.querySelectorAll(".Project div");
console.log(project);
sun.addEventListener("click",()=>{
    document.documentElement.style.setProperty("--text-color","black");
    document.documentElement.style.setProperty("--bg","whitesmoke");
    document.documentElement.style.setProperty("--bg1"," rgba(255, 255, 255, 0.27)");
    document.documentElement.style.setProperty("--other-text"," rgb(60, 58, 58)")
    moon.style.display="block";
    sun.style.display="none";
    project.forEach(change => {
        change.style.backgroundColor="#4f94d0b8";
        
    });
})
moon.addEventListener("click",()=>{
    document.documentElement.style.setProperty("--text-color","white");
    document.documentElement.style.setProperty("--bg","#1b1f24");
    document.documentElement.style.setProperty("--bg1","#191d21");
    document.documentElement.style.setProperty("--other-text","gray");
    moon.style.display="none";
    sun.style.display="block";
    project.forEach(change => {
        change.style.backgroundColor="transparent";
        
    });
})
let nav=document.querySelector("nav");
function updatebackground()
{
    if(window.scrollY> ( window.screen.height)/2)
    {
        nav.classList.add('scrolled');
    }
    else if(window.scrollY<=( window.screen.height)/2){
        nav.classList.remove('scrolled');
    }
}
window.addEventListener("scroll",updatebackground);
function resetbackground()
{
    if(window.scrollY<( window.screen.height)/2)
    {
        nav.classList.add('back_scrolled');
    }
    else if(window.scrollY> ( window.screen.height)/2){
        nav.classList.remove('back_scrolled');
    }
}
window.addEventListener("scroll",resetbackground);

let line_icon = document.querySelector("nav .icon i:first-child");
let cross_icon = document.querySelector("nav .icon i:last-child");
line_icon.addEventListener("click", () => {
    let new_nav = document.querySelector("header .list");
    new_nav.style.display = "block";
    line_icon.style.display = "none";
    cross_icon.style.display = "block";
})
cross_icon.addEventListener("click", () => {
    let new_nav = document.querySelector("header .list");
    new_nav.style.display = "none";
    line_icon.style.display = "block";
    cross_icon.style.display = "none";
})
let marks = document.getElementById("h31").innerText;
let counter = 0;
setInterval(() => {
    if (marks == 70) {
        clearInterval();
    }
    else {
        counter += 2;
        document.getElementById("h31").innerText = counter + "%";
        marks = counter;
    }
}, 120);

let marks_1 = document.getElementById("h32").innerText;
let counter_1 = 0;
setInterval(() => {
    if (marks_1 == 80) {
        clearInterval();
    }
    else {
        counter_1 += 2;
        document.getElementById("h32").innerText = counter_1 + "%";
        marks_1 = counter_1;
    }
}, 120);

let marks_2 = document.getElementById("h33").innerText;
let counter_2 = 0;
setInterval(() => {
    if (marks_2 == 90) {
        clearInterval();
    }
    else {
        counter_2 += 2;
        document.getElementById("h33").innerText = counter_2 + "%";
        marks_2 = counter_2;
    }
}, 130);

let marks_3 = document.getElementById("h34").innerText;
let counter_3 = 0;
setInterval(() => {
    if (marks_3 == 90) {
        clearInterval();
    }
    else {
        counter_3 += 2;
        document.getElementById("h34").innerText = counter_3 + "%";
        marks_3 = counter_3;
    }
}, 130);
let marks_4 = document.getElementById("h35").innerText;
let counter_4 = 0;
setInterval(() => {
    if (marks_4 == 80) {
        clearInterval();
    }
    else {
        counter_4 += 2;
        document.getElementById("h35").innerText = counter_4 + "%";
        marks_4 = counter_4;
    }
}, 120);

let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let btn = document.querySelector("#formbtn");
    btn.className = "succesbtn";
    let h4 = document.createElement("h4");
    h4.innerText = "message successfully sent"
    let form = document.querySelector("form div");
    form.appendChild(h4);
    let input = document.querySelectorAll("form input");
    let txtarea = document.querySelector("form textarea");
    const key = "name";
    const key1 = "email";
    const key2 = "user_message";
    localStorage.setItem(key, input[0].value);
    localStorage.setItem(key1, input[1].value);
    localStorage.setItem(key2, txtarea.value);
    input[0].value = " ";
    input[1].value = " ";
    txtarea.value = " ";
})
