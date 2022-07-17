$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header').toggleClass('active');
        $('.header__burger').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


let emailinput = document.getElementById('useremail');
telllinput = document.getElementById('tellinput');
inputname = document.getElementById('nameinput');
textinput = document.getElementById('text_input');

document.querySelector('.butn').onclick = function (e) {
    e.preventDefault();
    let valname = inputname.value;
    if (valname == "") {
        inputname.style.border = '3px solid red';
    } else if (valname != "") {
        inputname.style.border = 'none';
    }

    let valtell = telllinput.value;
    if (valtell == "") {
        telllinput.style.border = '3px solid red';
    } else if (isNaN(valtell)) {
        alert('Введіть номер телефону');
        telllinput.style.border = '3px solid red';
    } else if (!isNaN(valtell)) {
        telllinput.style.border = 'none';
    }

    let valemail = emailinput.value;
    if (valemail == "") {
        emailinput.style.border = '3px solid red';
    } else if (!valemail.includes('@')) {
        alert('Введіть пошту');
        emailinput.style.border = '3px solid red';
    } else if (valemail.includes('@')) {
        emailinput.style.border = 'none';
    }

    let valtext = textinput.value;
    if (valtext == "") {
        textinput.style.border = '3px solid red';
    } else if (valtext != "") {
        textinput.style.border = 'none';
        textinput.style.background = '#fff';
        textinput.style.color = 'black';
    }
}

document.getElementById("text_input").addEventListener("focus", myFocus);

function myFocus() {
    document.getElementById("text_input").style.background = "#36318b";
    document.getElementById("text_input").style.color = "#fff"
    document.getElementById("text_input").style.transition = "all .4s ease";
}


document.getElementById("footercall").addEventListener("keydown", keySlider);

function keySlider() {
    document.getElementById("footercall").style.background = "#00ff03";
    document.getElementById("footercall").style.color = "black"
    document.getElementById("footercall").style.transform = "rotate(180deg)";
    document.getElementById("footercall").style.transition = "all 0.6s ease";
}

document.getElementById("golovna").addEventListener("mousedown", mouseBtn);

function mouseBtn() {
    document.getElementById("golovna").style.paddingLeft = "100px";
    document.getElementById("golovna").style.transition = "all 0.6s ease";
    setTimeout(mouseBtnback, 2500);

    function mouseBtnback() {
        document.getElementById("golovna").style.paddingLeft = "0";
    }
}

document.querySelector('.btn_fone').onclick = function (e) {
    e.preventDefault();
    document.body.style.background = 'url(img/fonewhite.png)';
    document.body.style.color = "black";
    document.querySelector('.btn_fone').style.display = 'none';
    document.getElementById('headerr').style.background = '#ccc';
    document.querySelector('.blackFone').style.display = 'inline';
}
document.querySelector('.blackFone').onclick = function (e) {
    e.preventDefault();
    document.body.style.background = 'url(img/fone.jpg)';
    document.body.style.color = "#fff";
    document.querySelector('.btn_fone').style.display = 'inline';
    document.querySelector('.blackFone').style.display = 'none';
    document.getElementById('headerr').style.background = 'none';
}




























