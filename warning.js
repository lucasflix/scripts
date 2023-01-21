function anchorString(input) {
    return `<a href="https://buy.stripe.com/${input}" style="color: rgb(var(--accent))" target="_blank">`;
}

(function() {
    'use strict';

    if (!window.localStorage.getItem('warning') && window.location.toString().endsWith('home.html')) {
        let msg = document.createElement('div');
        msg.style.width = '25em';
        msg.style.background = 'rgb(var(--accent))';
        msg.style.boxShadow = '.2em .2em .2em rgba(0,0,0,0.2)';
        msg.style.position = 'absolute';
        msg.style.top = '45%';
        msg.style.left = '50%';
        msg.style.transform = 'translate(-50%, -50%)';
        msg.style.borderRadius = '5px';
        msg.style.padding = '2em';
        msg.style.boxSizing = 'border';
        msg.style.zIndex = '100';

        let bg = document.createElement('div');
        bg.style.position = 'absolute';
        bg.style.top = bg.style.left = '0';
        bg.style.background = 'rgba(0,0,0,0.9)';
        bg.style.borderRadius = '5px';
        bg.style.width = bg.style.height = '100%';
        bg.style.zIndex = '-1';

        msg.appendChild(bg);

        let title = document.createElement('div');
        title.innerHTML = 'Aviso';
        title.style.fontSize = '3em';
        title.style.fontWeight = 'bolder';
        title.style.width = '100%';
        title.style.textAlign = 'center';
        title.style.textShadow = 'none';
        title.style.marginBottom = '.5em';

        let text = document.createElement('div');
        text.innerHTML = 'Se você estiver interessado em apoiar o Lucasflix de alguma forma (e quer que ele continue a existir/expandir), você pode realizar uma assinatura opcional nos valores de ' +
            anchorString('00gdS0gDt8anfqo5kk') + '5 reais<\a>, ' + anchorString('28oaFOfzpcqD920aEF') + '10 reais</a> ou ' + anchorString('4gwcNW1Iz4YbguscMO') + '20 reais</a>.';
        text.style.fontSize = '1.1em';
        text.style.width = '100%';
        text.style.textAlign = 'center';
        text.style.textShadow = 'none';

        let secondaryText = document.createElement('div');
        secondaryText.innerHTML = 'Assinantes  de qualquer valor podem vincular sua conta do Letterboxd com o Lucasflix e ter todos os filmes da sua watchlist adicionados' +
            ' automaticamente, além de poderem pedir séries com mais de 2 temporadas (séries muito grandes custam muito para serem armazenadas).';
        secondaryText.style.fontSize = '0.8em';
        secondaryText.style.width = '100%';
        secondaryText.style.textAlign = 'center';
        secondaryText.style.textShadow = 'none';
        secondaryText.style.marginTop = '1em';

        let close = document.createElement('div');
        close.style.fontSize = '1.4em';
        close.style.position = 'absolute';
        close.style.fontWeight = 'bolder';
        close.style.top = '.3em';
        close.style.right = '.3em';
        close.style.cursor = 'pointer';
        close.classList.add('material-icons', 'close');

        close.onclick = () => {
            msg.remove();
            window.localStorage.setItem('warning', true);
        }

        msg.appendChild(title);
        msg.appendChild(text);
        msg.appendChild(secondaryText);
        msg.appendChild(close);
        document.body.appendChild(msg);
    }
})();
