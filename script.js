function atualizarInterfaceUsuario(mensagem, cor) {
    var texto = '<p id="error" style="color: ' + cor + '; width: 100%;">' + mensagem + '</p>';
    paragraph.innerHTML = texto;
    btn.insertAdjacentElement('afterend', paragraph);
    aplicarEstilo();
}

function clicar() {
    var btn = document.getElementById('text');
    if (btn.value === 'p@gmail.com') {
        atualizarInterfaceUsuario('CONFIRMER', 'green');
    } else {
        atualizarInterfaceUsuario('Verifique seu e-mail, por favor', 'red');
    }

    if (window.innerWidth >= 1024) {
        var btn2 = document.getElementById('botao_input');
        var btn3 = document.getElementById('error');
        btn2.style.marginBottom = '25px';
        btn3.style.fontSize = '14px';
    }
}

function aplicarEstilo() {
    var btn = document.getElementById('text');
    if (btn.value === 'p@gmail.com') {
        btn.style.borderColor = 'green';
    } else {
        btn.style.borderColor = 'red';
    }
}
