var valorDoSelect = document.querySelector("#valorDoSelect");
var btnCodificar = document.querySelector("#btnCodificar");
var btnDecodificar = document.querySelector("#btnDecodificar");
var resultado = document.querySelector("#resultado");
var botaoInvisivelCodificar = document.getElementById(
  "botaoInvisivelCodificar"
);
var botaoInvisivelDecodificar = document.getElementById(
  "botaoInvisivelDecodificar"
);

//SELEÇÃO DOS VALORES RADIO BUTTONS +  VISIBILIDADE DOS BOTÕES CODIFICAR E DECODIFICAR PARA O USUÁRIO

function pegaValorRadio() {
  var tipo = document.getElementsByName("type");
  if (tipo[0].checked) {
    botaoInvisivelCodificar.classList.remove("invisivel");
    botaoInvisivelDecodificar.classList.add("invisivel");
  }
  if (tipo[1].checked) {
    botaoInvisivelDecodificar.classList.remove("invisivel");
    botaoInvisivelCodificar.classList.add("invisivel");
  }
}

// SELEÇÃO DOS VALORES DO SELECT + VISIBILIDADE DA QTD DE CASAS DA CIFRA DE CESAR + COD E DEC DA MENSAGEM + RESULTADO DA MENSAGEM

valorDoSelect.addEventListener("change", function () {
  var valorSelecionado = valorDoSelect.value;

  //CIFRA DE CESAR

  if (valorSelecionado === "1") {
    var invisivelParaUsuario = document.querySelector("#invisivelParaUsuario");
    invisivelParaUsuario.classList.remove("invisivel");

    //CODIFICA A CIFRA DE CESAR

    btnCodificar.onclick = function (e) {
      e.preventDefault();

      var mensagemDoUsuario = document.querySelector("#mensagem").value;
      var qtdPosicoes = document.querySelector("#qtdPosicoes").value;
      var arrMensagem = mensagemDoUsuario.split("");
      var codMensagem = [];
      var arrString = [];

      for (var i = 0; i < arrMensagem.length; i++) {
        codMensagem.push(arrMensagem[i].charCodeAt() + parseInt(qtdPosicoes));
      }

      for (var j = 0; j < codMensagem.length; j++) {
        arrString.push(String.fromCharCode(codMensagem[j]));
      }

      resultado.innerHTML = arrString.join("");
    };

    btnDecodificar.onclick = function (e) {
      e.preventDefault();

      var mensagemDoUsuario = document.querySelector("#mensagem").value;
      var qtdPosicoes = document.querySelector("#qtdPosicoes").value;
      var arrMensagem = mensagemDoUsuario.split("");
      var codMensagem = [];
      var arrString = [];

      for (var i = 0; i < arrMensagem.length; i++) {
        codMensagem.push(arrMensagem[i].charCodeAt() - parseInt(qtdPosicoes));
      }

      for (var j = 0; j < codMensagem.length; j++) {
        arrString.push(String.fromCharCode(codMensagem[j]));
      }

      resultado.innerHTML = arrString.join("");
    };
  }

  //BASE64

  if (valorSelecionado === "2") {
    var invisivelParaUsuario = document.querySelector("#invisivelParaUsuario");
    invisivelParaUsuario.classList.add("invisivel");

    btnCodificar.onclick = function (e) {
      e.preventDefault();
      var mensagemDoUsuario = document.querySelector("#mensagem").value;
      var mensagemBase64 = btoa(mensagemDoUsuario);
      resultado.innerHTML = mensagemBase64;
    };

    btnDecodificar.onclick = function (e) {
      e.preventDefault();
      var mensagemDoUsuario = document.querySelector("#mensagem").value;
      var mensagemBase64 = atob(mensagemDoUsuario);
      resultado.innerHTML = mensagemBase64;
    };
  }

  if (valorSelecionado === "0") {
    var invisivelParaUsuario = document.querySelector("#invisivelParaUsuario");
    invisivelParaUsuario.classList.add("invisivel");
  }
});

