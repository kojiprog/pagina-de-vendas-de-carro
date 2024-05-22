$(document).ready(function () {
  $("#carousel-imagens").slick({
    autoplay: true,
  });

  $("#menu-hamburguer").click(function () {
    $("nav").slideToggle();
  });

  $("#telefone").mask("(00) 00000-0000", {
    placeholder: "(xx) xxxxx-xxxx",
  });
  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      veiculoDeInterrese: {
        required: false,
      },
      mensagem: {
        required: true,
      },
    },
    messages: {
      nome: "Por favor, insira o seu nome",
      telefone: "Por favor, insira seu telefone.",
      email: "Por favor, insira seu e-mail.",
      mensagem: "Por favor, insira sua mensagem.",
    },
    submitHandler: function (form) {
      console.log(form);
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existe ${camposIncorretos} campos incorretos`);
      }
    },
  });
  $('.lista-veiculos button').click(function(){
    const destino = $('#contato');
    const nomeVeiculo = $(this).parent().find('h3').text()

    $('#veiculo-interesse').val(nomeVeiculo);

    $('html').animate({
        scrollTop: destino.offset().top
    }, 1000)

  })
});
