const btn = document.getElementById('btn');
const h2 = document.getElementById('text');

btn.addEventListener('click',() =>{
    setTimeout(() =>{
        h2.textContent="ボタンをクリックしました";
    },2000);   
});