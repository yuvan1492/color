const colors = ["green","red","rgb(133,122,200)","#f15025"];
const btn = document.getElementById("id1");
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
    const randomnumber = getrandomnumber();

    document.body.style.backgroundColor = colors[randomnumber];
    color.textContent = colors[randomnumber];
});
function getrandomnumber(){
    return Math.floor(Math.random()*colors.length);
}
