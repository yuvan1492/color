const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const btn= document.getElementById('id1');
const color=document.querySelector('.color');
btn.addEventListener('click',function(){
    let hexcolor='#';
    for (let i=0; i<6; i++)
    {
        hexcolor += hex[getrandomcolor()];
    }
    color.textContent=hexcolor;
    document.body.style.backgroundColor = hexcolor;
})

function getrandomcolor(){
    return Math.floor(Math.random() * hex.length);
}