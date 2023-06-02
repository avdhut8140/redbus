// const P= document.getElementById("power").value
// const N=document.getElementById("RPM").value
// const T=document.getElementById("torque").value
const O=60 *1000/6.28
let X=""
function data() {
    const torque = document.querySelector("#torque")
    const RPM=document.querySelector("#RPM").value
    const power = document.querySelector("#power").value
    const gteeth = document.querySelector("#gteeth").value
    const pteeth = document.querySelector("#pteeth").value
    let T= power*9554140.127/RPM
    
    console.log(T);
    torque.innerHTML =T
    let CV=""
    let velocity =""
    const dp=document.querySelector("#dp").value
    const Modul =document.querySelector("#modul").value
    if (dp==="") { 
        velocity= 0.0000523598*Modul*pteeth*RPM
    } else {
        velocity=0.0000523598*dp*RPM
    }
    
    if (velocity>10) {   
        CV=3/3+velocity
        
    } else if ( 20>velocity>10) {  
        CV=6/6+velocity
        
    }else{ CV=5.6/5.6+velocity }
    document.querySelector("#velocity").innerHTML= velocity
    document.querySelector("#CV").innerHTML= CV
    
    let F = ""
    if (dp==="") { 
    F= 2*T/Modul*pteeth
 } else {
    F= 2*T/dp
 }
 document.querySelector("#ptangent").innerHTML=F
}