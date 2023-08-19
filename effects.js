
function data() {

    let From = document.getElementById("from").value
    let To = document.getElementById("To").value
    let Date = document.getElementById("date").value
    console.log(From);
    console.warn(To);
    console.error(Date);
    document.getElementById("from").value=""   
    document.getElementById("To").value=""
    document.getElementById("date").value=""   

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
          document.getElementById("login1").classList.remove("d-none")
          condition1 = false
          
        } else {
            
            document.getElementById("login1").classList.add("d-none")
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

const emails = document.getElementById("emails")
const namep = document.getElementById("name")
const cpassword = document.getElementById("cpassword")
const passwords = document.getElementById("passwords")
const email = document.getElementById("email")
const password = document.getElementById("password")
  const id1 = document.getElementById("signup")
  const id2 = document.getElementById("login")
  let saveemails=""
  let  savecpasswords =""
  function  sinup( ) {
      if (email.value=== saveemails && password.value=== savecpasswords ) {
          id1.classList.add("d-none")
          playercard.classList.remove("d-none")
      } else {
          document.getElementById("warning1").innerHTML = `   <div class="alert alert-danger "  >Invalid account / create account</div>`
          setTimeout(function () {
      document.getElementById("warning1").innerHTML = ""
  }, 3000)
      }
  }
  function handalesubmit() { 
    const saveemail = localStorage.getItem("email")
    const savecpassword = localStorage.getItem("pass")
      
      saveemails=JSON.parse(saveemail)
      savecpasswords =JSON.parse(savecpassword)
                  validation(email)
                  validation(password)
          if (email.value==="" || password.value==="") {
              document.getElementById("warning1").innerHTML = ` <div class="alert alert-danger"  > please Fill The Information</div>`
          setTimeout(function () {
      document.getElementById("warning1").innerHTML = ""

  }, 3000)
          }
          else {
            sinup();
              
          }
                  
  }
  function validation(el) {
      if (el.value === "") {
          el.classList.add("is-invalid")
          el.classList.remove("is-valid")

      } else {

          el.classList.remove("is-invalid")
          el.classList.add("is-valid")
      }
  } function validate() {

      console.log("hellow");
      validation(email)
      validation(password)
  }

 
  function newaccount(){
      id1.classList.add("d-none")
     id2.classList.remove("d-none")
}
  function oddaccount(){
      id2.classList.add("d-none")
     id1.classList.remove("d-none")
  }
 function storage(){
  localStorage.setItem("email", JSON.stringify(emails.value))
    localStorage.setItem("pass", JSON.stringify(cpassword.value))
 }
  function Sigin(){
    cheak();
  }
 function cheak(){
 if(emails.value===""||namep.value==="" ){ 
  document.getElementById("warning1").innerHTML = ` <div class="alert alert-danger"  > please fill email </div>`
          setTimeout(function () {
      document.getElementById("worning1").innerHTML = ""

  }, 3000)
 }
 else if(password.value===""&& cpassword.value===""){
  document.getElementById("warning1").innerHTML = ` <div class="alert alert-danger"> please fill password </div>`
          setTimeout(function () {
      document.getElementById("warning1").innerHTML = ""

  }, 3000)
 }
 else if (passwords.value===cpassword.value ) {
   id2.classList.add("d-none")
   id1.classList.remove("d-none")
   
   
   storage();
  }else {
    document.getElementById("warning1").innerHTML = ` <div class="alert alert-danger"> password don't mach </div>`
            setTimeout(function () {
        document.getElementById("warning1").innerHTML = ""

    }, 2000)
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


