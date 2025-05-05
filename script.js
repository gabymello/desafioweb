const form = document.getElementById('form');
const lista = document.getElementById('lista-compras');
const limparBtn = document.getElementById('limpar');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nomeProduto = document.getElementById('produto').value.trim();
    const quantidade = document.getElementById('quantidade').value.trim();

    if (nomeProduto === '' || quantidade === '' || parseInt(quantidade) <= 0) {
        alert('Preencha corretamente os campos.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = `${nomeProduto} - Quantidade: ${quantidade}`;
    li.addEventListener('click', function() {
        li.classList.toggle('riscado');
    });

    lista.appendChild(li);

    document.getElementById('produto').value = '';
    document.getElementById('quantidade').value = '';
});

limparBtn.addEventListener('click', function() {
    lista.innerHTML = '';
});
