const url = 'https://mescaule.github.io/AtividadeJson/irineu.json';

let data = new XMLHttpRequest();
data.open('get', url);
data.responseType = "json";
data.send();

data.onload = function () {
    let value = data.response;
    let body = document.querySelector('body');

    const header = document.querySelector('header');
    let storeName = document.createElement('h1');
    storeName.innerHTML = 'Irineu Store Gameplays';
    header.append(storeName);

    const section = document.querySelector('section');
    section.style.display = 'flex';
    section.style.justifyContent = 'space-around';
    let article1 = document.createElement('articule');
    let article2 = document.createElement('articule');
    let article3 = document.createElement('articule');
    article1.innerHTML = `<h2>Notebook</h2>`;
    article2.innerHTML = `<h2>Celulares</h2>`;
    article3.innerHTML = `<h2>Acessórios</h2>`;
    section.append(article1, article2, article3);

    let description = (element, art, acc = 0) => {
        let modelo = document.createElement('li');
        let valor = document.createElement('li');
        let disponibilidade = document.createElement('li');
        let marca = document.createElement('p');
        let ul = document.createElement('ul');
        ul.style.listStyle = 'none';
        ul.style.fontSize = '14px';
    
        marca.innerHTML = `<b>${element.Marca}</b>`;
        modelo.innerHTML = `<i>Modelo:</i> ${element.Modelo}`;
        disponibilidade.innerHTML = `<i>Disponibilidade:</i> ${element.Disponibilidade ? 'Sim' : 'Não'}`;
        valor.innerHTML = `<br><b>Por: R$ ${Number(element.Valor).toFixed(2)}`;
        ul.append(modelo, disponibilidade, valor);
        marca.append(ul);
        art.append(marca);
    };
    
    for (let i = 0; i < value.Notebook.length; i++) {
        description(value.Notebook[i], article1);
    }

    for (let i = 0; i < value.Celular.length; i++) {
        description(value.Celular[i], article2);
    }

    for (let i = 0; i < value.Acessórios.length; i++) {
        description(value.Acessórios[i], article3, 1);
    }
};
