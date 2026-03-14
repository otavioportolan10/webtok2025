function verificarEexibirImagem() {
    const agora = new Date();
    const diaDaSemana = agora.getDay(); // 0=Domingo, 1=Segunda...
    const hora = agora.getHours();
    const minuto = agora.getMinutes();

    let elementoImagem = document.getElementById('imagem-dinamica');
    const quinta = diaDaSemana === 4;

    let horaEminuto = hora * 60 + minuto;

    const hora1Aula = 7 * 60 + 30; //1Aula = 07:30 - INICIO 1a aula
    const hora2Aula = 8 * 60 + 20; //2Aula = 08:20 - FIM 1a aula e INICIO 2a aula
    const hora3Aula = 9 * 60 + 10; //3Aula = 09:10 - FIM 2a aula e INICIO 3a aula
    const hora4Aula = 10 * 60; //4Aula = 10:00 - FIM 3a aula e INICIO intervalo
    const hora5Aula = 10 * 60 + 20; //5Aula = 10:20 - FIM intervalo e INICIO 4a aula
    const hora6Aula = 11 * 60 + 10; //6Aula = 11:10 - FIM 4a aula e INICIO 5a aula
    const hora7Aula = 12 * 60; //7Aula = 12:00 - FIM 5a aula e INICIO almoço
    const hora8Aula = 13 * 60; //8Aula = 13:00 - FIM almoço e INICIO 6a aula
    const hora9Aula = 13 * 60 + 50; //9Aula = 13:50 - FIM 6a aula e INICIO 7a aula
    const hora10Aula = 14 * 60 + 40; //10Aula = 14:40 - FIM 7a aula e INICIO 8a aula
    const hora11Aula = 15 * 60 + 30; //11Aula = 15:30 - FIM 8a aula e INICIO 9a aula
    const hora12Aula = 16 * 60 + 20; //12Aula = 16:20 - FIM 9a aula e INICIO intervalo
    const hora13Aula = 16 * 60 + 40; //13Aula = 16:40 - FIM intervalo e INICIO 10a aula
    const hora14Aula = 17 * 60 + 30; //14Aula = 17:30 - FIM 10a aula e INICIO 11a aula
    const hora15Aula = 18 * 60 + 20; //15Aula = 18:20 - FIM 11a aula 

    if (quinta && horaEminuto >= hora1Aula && horaEminuto < hora2Aula) {
        elementoImagem.src = 'img/GRADE HORARIA/QUINTA/1.png';
    } else if (quinta && horaEminuto >= hora2Aula && horaEminuto < hora3Aula) {
        elementoImagem.src = 'img/GRADE HORARIA/QUINTA/2.png';
    } else if (quinta && horaEminuto >= hora3Aula && horaEminuto < hora4Aula) {
        elementoImagem.src = 'img/GRADE HORARIA/QUINTA/3.png';
    } else if (quinta && horaEminuto >= hora5Aula && horaEminuto < hora6Aula) {
        elementoImagem.src = 'img/GRADE HORARIA/QUINTA/4.png';
    } else if (quinta && horaEminuto >= hora6Aula && horaEminuto < hora7Aula) {
        elementoImagem.src = 'img/GRADE HORARIA/QUINTA/5.png';
    } else {
        elementoImagem.src = 'img/GRADE HORARIA/HORARIO-INDISPONIVEL.png';
    }
}

verificarEexibirImagem();
setInterval(verificarEexibirImagem, 30000);