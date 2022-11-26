let btnLogin = document.getElementById('btn-login');
let form = document.forms[0];
let btnsClose = document.querySelectorAll('.btn-close');

btnLogin.addEventListener('click', e => {
    form.style.display = 'grid';
});

btnsClose.forEach(btn => {
    btn.onclick = () => {
        form.style.display = 'none';
    };
});

// password - config hide / unhide
let inputUnHidePass = document.getElementById('unHidePass');
let inputPass = document.getElementById('password');

inputUnHidePass.onclick = () => {
    if (inputUnHidePass.checked) {
        inputPass.type = 'text';
    } else {
        inputPass.type = 'password';
    }
};