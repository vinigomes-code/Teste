var paragraph = document.createElement('div');

function clicar(){
    var btn = document.getElementById('text');

    if(paragraph.innerHTML.trim() === ''){ /* método remove espaços em branco de ambos os lados de uma string. */
        var text = '<p id="error" style="color: red; width: 100%;">Please check your email</p>'
        paragraph.innerHTML = text;
        btn.insertAdjacentElement('afterend', paragraph);
    
        style()

        if(window.innerWidth >= 1024){
            var btn2 = document.getElementById('botao_input')
            var btn3 = document.getElementById('error')
            btn2.style.marginBottom = '25px';

            btn3.style.fontSize = '14px';
        }
    }
}

function style(){
    var btn = document.getElementById('text');

    btn.style.borderColor = 'red';
}
