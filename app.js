let html = document.getElementById('html');
let change_btn = document.getElementById('change_btn');
let change_img = document.getElementById('change_img');

change_btn.addEventListener("click", ()=>{
    html.classList.toggle("dark");

if(change_img.src.includes("img/moon-01.png")){
    change_img.src = "img/sun.png";
}else{
    change_img.src = "img/moon-01.png";
}
});

let change_btn2 = document.getElementById('change_btn2');
let change_img2 = document.getElementById('change_img2');

change_btn2.addEventListener("click", ()=>{
    html.classList.toggle("dark");

if(change_img2.src.includes("img/moon-01.png")){
    change_img2.src = "img/sun.png";
}else{
    change_img2.src = "img/moon-01.png";
}
});

//Mobile Menu

let main_menu = document.getElementById('main_menu');
let mobile_btn = document.getElementById('mobile_btn');

mobile_btn.addEventListener("click", ()=>{
    main_menu.classList.toggle("hidden");
});



// let main_menu = document.getElementById('main_menu');
// let close_menu = document.getElementById('close_menu');
// let open_menu = document.getElementById('open_menu');

// close_menu.addEventListener('click', () =>{
// main_menu.classList.toggle('hidden');
// });

// open_menu.addEventListener('click', () =>{
//     main_menu.classList.toggle('hidden');
//     });