
function data() {

    let From = document.getElementById("from").value
    let To = document.getElementById("To").value
    let Date = document.getElementById("date").value
    console.log(From);
    console.warn(To);
    console.error(Date);

    if (From === "" || To === "" || Date === "") {

        document.getElementById("msg").innerHTML = ` <div class="alert alert-danger animate__animated animate__bounceIn animate__infinet  "> please enter your location and date </div>`
        setTimeout(function () {
            document.getElementById("msg").innerHTML = ""
        }, 2000)

    } else {
        document.getElementById("msg").innerHTML = ` <div class="alert alert-info animate__animated animate__fadeIn animate__infinet  "> Your responce save successfully✅✅ </div>`

        setTimeout(function () {
            document.getElementById("msg").innerHTML = ""
        }, 3000)
    }


}

function contact() {
    let contact = document.getElementById("contact")
    console.log(contact.nodeType);

    if (contact === "") {

        document.getElementById("contactwarna").innerHTML = ` <div class="alert alert-success "> Your responce save successfully✅✅ </div>`
        setTimeout(function () {
            document.getElementById("contactwarna").innerHTML = ""
        }, 2000)
    } else {

        document.getElementById("contactwarna").innerHTML = ` <div class="alert alert-danger "> please enter your contact number </div>`
        setTimeout(function () {
            document.getElementById("contactwarna").innerHTML = ""
        }, 3000)
    }

}
 let condition1 = true
function login() {
      if (condition1) {
          document.getElementById("login").classList.remove("d-none")
          condition1 = false
          
        } else {
            
            document.getElementById("login").classList.add("d-none")
            condition1 = true
      }

}
function logup() {

    let email = document.getElementById("email").value
    let pword = document.getElementById("pword").value
    console.log(email);
    console.warn(pword);

    if (email === "" || pword === "") {

        document.getElementById("warning").innerHTML = `<div class="alert alert-danger animate__animated animate__rubberBand animate__infinet "> please fill the Information </div>`
        setTimeout(function () {
            document.getElementById("warning").innerHTML = ""
        }, 2000)

    } else {

        document.getElementById("login").classList.add("d-none")
        document.getElementById("warning1").innerHTML = `<div class="alert alert-success animate__animated animate__fadeInDown animate__infinet  "> your login successfully </div>`
        setTimeout(function () {
            document.getElementById("warning1").innerHTML = ""
        }, 3000)

    }


}
let condition = true
function ryde(){   
    if (condition) {
        console.log("hi");
        document.getElementById("ryde").classList.remove("d-none")
        document.getElementById("ogpage").classList.add("d-none")
        condition = false

    } else {

        console.log("bye");
        document.getElementById("ryde").classList.add("d-none")
        document.getElementById("ogpage").classList.remove("d-none")
        condition = true
    }
    
}


gsap.from(".navbar-brand",{y:-50, opacity:0,duration:1, delay:0.1 , stagger: 0.5})
gsap.from(".navbar-nav",{y:-50, opacity:0,duration:1, delay:0.1 , stagger: 0.5})
    gsap.from(".text-p",{y:-50, opacity:0,duration:1, delay:0.1 , stagger: 0.5})
    gsap.from(".text-o",{y:-50, opacity:0,duration:1, delay:0.1 , stagger: 0.5})
    gsap.from(".text-A",{y:-50, opacity:0,duration:1, delay:0.1 , stagger: 0.5})
    gsap.from(".text-B",{y:-50, opacity:0,duration:1, delay:0.1 , stagger: 0.5})
    gsap.from(".text-C",{y:-50, opacity:0,duration:1, delay:0.1 , stagger: 0.5})
    gsap.from(".text-D",{y:-50, opacity:0,duration:1, delay:0.1 , stagger: 0.5})


