
let elem = document.getElementById("target");

for(let i=0; i <=7;i++)
{
    for(let k=0; k<=7;k++)
    {
    console.log(k);
    elem.append(k + " ");
}
let br = document.createElement('br');
elem.appendChild(br);
// elem.append(br); works same
 }