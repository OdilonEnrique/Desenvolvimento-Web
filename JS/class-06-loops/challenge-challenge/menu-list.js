// Faça um Menu com as seguintes opções:
/*
Digite a opção desejada:
1 - Cadastrar item
- Poder cadastrar itens enquanto não cancelar x
- Alertar usuário para adicionar item caso não informe x
- Mostrar mensagem de sucesso junto do nome ao cadastrar x
- Fazer alerta de item cadastrado caso ele já esteja cadastrado x
2 - Ver itens cadastrados
- Mostrar itens cadastrados x
- Alertar caso a lista esteja vazia x
3 - Remover item cadastrado
- Alertar caso a lista esteja vazia  x
- Poder remover itens pelo nome enquanto não cancelar x
- Remover item automaticamente caso só tenha um na lista x
- Mostrar mensagem de sucesso junto do nome ao remover x
- Alertar usuário caso o item informado não seja encontrado x
4 - Sair do programa
- Sair do programa quando escolher a opção 4 ou cancelar
- Se não escolher uma das opções do menu mostrar mensagem de alerta
*/
const listItens = [];
let menuOption;
while (true) {
  menuOption = prompt(`
Digite a opção desejada:
1 - Cadastrar item
2 - Ver itens cadastrados
3 - Remover item cadastrado
4 - Sair do programa
`);
  if (menuOption === "4" || menuOption === null) {
    break;
  } else if (menuOption === "1") {
    while (true) {
      const itemArray = prompt("Digite o novo item que você quer adicionar");
      if (itemArray === "") {
        alert("Adicione o item já que não foi informado");
      } else if (itemArray === null) {
        break;
      } else {
        if (listItens.includes(itemArray)) {
          alert("Este item já foi cadastrado");
        } else {
          alert("Item cadastrado com sucesso!");
          listItens.push(itemArray);
          console.log(listItens);
        }
      }
    }
  } else if (menuOption === "2") {
    if (listItens.length === 0) {
      alert("Lista vazia");
    } else {
      alert(listItens.join("-"));
    }
  } else if (menuOption === "3") {
    if (listItens.length === 0) {
      alert("Lista vazia");
    } else {
      while (true) {
        const removeItem = prompt("Digite o item que você quer remover");
        if (removeItem === null) {
          break;
        } else if (removeItem === "") {
          alert("Digite o valor do elemento que você quer apagar");
        } else if (listItens.includes(removeItem)) {
          let index = listItens.indexOf(removeItem);
          if (index > -1) {
            listItens.splice(index, 1);
          }
          console.log(listItens);
          alert("Item excluído com sucesso");
        } else {
          alert("Este item não foi cadastrado na lista");
        }
      }
    }
  } else {
    alert("Digite uma das opções apresentadas");
  }
}

alert("Programa encerrado!");
