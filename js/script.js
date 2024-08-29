document.forms["form"].addEventListener("submit", function(event) {
    event.preventDefault();
    ValidateForm();
});

function ValidateForm() {
    const name = document.forms["form"]["input-name"].value;
    const birth = document.forms["form"]["input-birth"].value;
    const gender = document.forms["form"]["gender"].value;
    let message = document.forms["form"]["message-input"].value;
    const errpopup = document.getElementById("errorpopup");
    const sucpopup = document.getElementById("sucesspopup");
    const getDay = new Date().toLocaleString();

    if (name == "" || birth == "" || gender == "" || message == "") {
        showpopup(errpopup);
    } else {
        showpopup(sucpopup);
        SetSender(name, birth, gender, message, getDay);
        
        setTimeout(function() {
            document.forms["form"].reset();
        }, 500);
    }
}



function SetSender(name, birth, gender, message, time) {
    document.getElementById("name").innerHTML = name;
    document.getElementById("name-input").innerHTML = name;
    document.getElementById("birth-input").innerHTML = birth;
    document.getElementById("gender-input").innerHTML = gender;
    document.getElementById("message-input").innerHTML = message;
    document.getElementById("time-input").innerHTML = time;
}

function showpopup(ShowPopUp) {
    ShowPopUp.classList.add("open-popup");
    ShowPopUp.scrollIntoView({behavior: "smooth", block: "center"});

    let closebtn = ShowPopUp.querySelector(".close-button");

    closebtn.addEventListener("click", function() {
        ShowPopUp.classList.remove("open-popup");
    }, {once: true});
}

let indexSlide = 1;
showDivs(indexSlide);

function plusDivs(n) {
    showDivs((indexSlide += n));
}

function showDivs(n) {
    let i;
    let imglist = document.getElementsByClassName("img");
    if (n > imglist.length) {
        indexSlide = 1;
    } else if (n < 1) {
        indexSlide = imglist.length;
    }

    for (let i = 0; i < imglist.length; i++) {
        imglist[i].classList.remove("active");
    }

    imglist[indexSlide - 1].classList.add("active");
}

setInterval(() => {
    plusDivs(1);
}, 2000);

