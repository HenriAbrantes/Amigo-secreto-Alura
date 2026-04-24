let amigos = [];

// --- FUNÇÃO PARA ADICIONAR COM ENTER ---
// Selecionamos o campo de input
let inputAmigo = document.getElementById('nome-amigo');

// Adicionamos o evento de "tecla pressionada"
inputAmigo.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        // Impede o formulário de recarregar a página (comportamento padrão)
        e.preventDefault();
        adicionar();
    }
});

function adicionar() {
    let campoNome = document.getElementById('nome-amigo');
    let nome = campoNome.value.trim();

    // 1. Validação: Campo vazio
    if (nome === '') {
        alert('Por favor, digite um nome!');
        return;
    }

    // 2. NOVO: Limite de 8 nomes
    if (amigos.length >= 8) {
        alert('Limite máximo de 8 nomes atingido!');
        campoNome.value = '';
        return;
    }

    // 3. Validação: Nome repetido
    if (amigos.some(a => a.toLowerCase() === nome.toLowerCase())) {
        alert('Este nome já foi adicionado!');
        campoNome.value = '';
        return;
    }

    amigos.push(nome);
    atualizarLista();
    campoNome.value = '';
}

// --- FUNÇÃO DE REMOVER ---
function removerAmigo(index) {
    // O .splice(posição, quantos) remove o item do array na posição indicada
    amigos.splice(index, 1);
    // Atualizamos a tela para refletir a mudança
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = ''; // Limpamos para reconstruir com os botões de remover

    // Criamos cada nome como um elemento clicável para remoção
    amigos.forEach((amigo, index) => {
        // Criamos um elemento de texto que, ao ser clicado, chama a função remover
        lista.innerHTML += `<span class="nome-item" onclick="removerAmigo(${index})">${amigo}</span>${index < amigos.length - 1 ? ', ' : ''}`;
    });
}

function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos para um sorteio justo!');
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('nome-amigo').value = '';
}