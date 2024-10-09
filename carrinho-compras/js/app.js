function adicionar() {
    const produtoSelect = document.getElementById('produto');
    const quantidadeInput = document.getElementById('quantidade');
    const produtoSelecionado = produtoSelect.value;
    const quantidade = parseInt(quantidadeInput.value);
  
    if (isNaN(quantidade) || quantidade <= 0) {
      alert("Por favor, insira uma quantidade válida.");
      return;
    }

    const [nomeProduto, precoProduto] = produtoSelecionado.split(' - R$');
    const preco = parseFloat(precoProduto);

    const carrinho = document.getElementById('lista-produtos');
    const novoProduto = document.createElement('section');
    novoProduto.classList.add('carrinho__produtos__produto');
    novoProduto.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${(preco * quantidade).toFixed(2)}</span>`;
  
    carrinho.appendChild(novoProduto);
    atualizarTotal(preco * quantidade);
    limparCampos();
  }
  
  function atualizarTotal(valorAdicional) {
    const totalSpan = document.getElementById('valor-total');
    const totalAtual = parseFloat(totalSpan.innerText.replace('R$', ''));
    const novoTotal = totalAtual + valorAdicional;
  
    totalSpan.innerText = `R$${novoTotal.toFixed(2)}`;
  }

  function limparCampos() {
    document.getElementById('produto').value = "Fone de ouvido - R$100";
    document.getElementById('quantidade').value = "";
  }

  function limpar() {
    const carrinho = document.getElementById('lista-produtos');

    while (carrinho.firstChild) {
      carrinho.removeChild(carrinho.firstChild);
    }

    document.getElementById('valor-total').innerText = 'R$0.00';
  }
  
