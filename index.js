let count=0
let dispCount=document.getElementById("count")
let prevEnt=document.getElementById("para")
function increment(){
    count+=1
    dispCount.innerHTML=count
}
function save(){
    let saved=dispCount.innerHTML
    console.log(saved)
    let msg=" "+saved+" - "
    prevEnt.textContent+=msg
    count=0
    dispCount.innerHTML=0

}