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