// function logar() {
//     var login = document.getElementById('login').value;
//     var senha = document.getElementById('senha').value;

//     if (login == "admin" && senha == "admin" ||
//         login == "webtok" && senha == "webtok"
//     ) {
//         alert('Sucesso');
//         location.href = "painel-professor.html";
//     } else {
//         alert('Usuario ou senha incorretos');
//     }
// }

// vetor com os emails dos usuários -- a senha sempre deve ser 'admin'
let emails = [
    'webtok2025@etec.sp.gov.br', 'jonhson.silva@etec.sp.gov.br','carlos.abernardes69@gmail.com',
    'eribertobarbosa123@etec.sp.gov.br','antonioprofessor@etec.sp.gov.br','denisdelvalle@etec.sp.gov.br',
    'guiazevedo10@etec.sp.gov.br','antonioprofessor@etec.sp.gov.br','adrianovictor32@etec.sp.gov.br',
    'igor.carvalho@etecsp.edu.br','juliana.silva@etecsp.edu.br','kleber.pinto@etecsp.edu.br',
    'larissa.braga@etecsp.edu.br','marcelo.lopes@etecsp.edu.br','natalia.cruz@etecsp.edu.br',
    'otavio.torres@etecsp.edu.br','priscila.andrade@etecsp.edu.br','rafael.barbosa@etecsp.edu.br',
    'sabrina.melo@etecsp.edu.br','thiago.moreira@etecsp.edu.br','vanessa.ribeiro@etecsp.edu.br',
    'wellington.araujo@etecsp.edu.br','yasmin.lopes@etecsp.edu.br','ze.cardoso@etecsp.edu.br',
    'beatriz.lima@etecsp.edu.br','caio.duarte@etecsp.edu.br','denise.santana@etecsp.edu.br',
    'felipe.nunes@etecsp.edu.br','gabriela.cunha@etecsp.edu.br','hugo.martins@etecsp.edu.br',
    'isabela.teixeira@etecsp.edu.br','joao.almeida@etecsp.edu.br','camila.prado@etecsp.edu.br',
    'rodrigo.silva@etecsp.edu.br','tatiane.rocha@etecsp.edu.br','vinicius.barreto@etecsp.edu.br',
    'amanda.souza@etecsp.edu.br','leandro.cunha@etecsp.edu.br','patricia.lima@etecsp.edu.br',
    'renato.gomes@etecsp.edu.br','simone.braga@etecsp.edu.br','andre.monteiro@etecsp.edu.br',
    'bruna.lima@etecsp.edu.br','carlos.ramos@etecsp.edu.br','debora.teixeira@etecsp.edu.br',
    'eliane.martins@etecsp.edu.br','fabio.souza@etecsp.edu.br','gisele.antunes@etecsp.edu.br',
    'henrique.duarte@etecsp.edu.br','iara.nogueira@etecsp.edu.br','jorge.torres@etecsp.edu.br',
    'karen.lima@etecsp.edu.br','lucas.pinto@etecsp.edu.br','marta.cunha@etecsp.edu.br',
    'nadia.lopes@etecsp.edu.br','otavia.silva@etecsp.edu.br','paulo.braga@etecsp.edu.br',
    'queila.nunes@etecsp.edu.br','rita.lima@etecsp.edu.br','samuel.costa@etecsp.edu.br',
    'talita.rocha@etecsp.edu.br','ubirajara.cunha@etecsp.edu.br','valeria.ramos@etecsp.edu.br',
    'wesley.duarte@etecsp.edu.br','xenia.teixeira@etecsp.edu.br','yuri.silva@etecsp.edu.br',
    'zilda.cunha@etecsp.edu.br','adriana.ferreira@etecsp.edu.br','bruno.rocha@etecsp.edu.br',
    'carla.lima@etecsp.edu.br','daniel.teixeira@etecsp.edu.br','eduarda.monteiro@etecsp.edu.br',
    'felipe.cardoso@etecsp.edu.br','gabriela.antunes@etecsp.edu.br','hugo.nunes@etecsp.edu.br',
    'italo.ramos@etecsp.edu.br','jessica.martins@etecsp.edu.br','kelvin.souza@etecsp.edu.br',
    'larissa.cunha@etecsp.edu.br','marcelo.lima@etecsp.edu.br','natalia.teixeira@etecsp.edu.br',
    'otavio.monteiro@etecsp.edu.br','priscila.rocha@etecsp.edu.br','rafael.nogueira@etecsp.edu.br',
    'sabrina.cardoso@etecsp.edu.br','tiago.silva@etecsp.edu.br','ursula.cunha@etecsp.edu.br',
    'vitor.lima@etecsp.edu.br','wellington.ramos@etecsp.edu.br','xuxa.souza@etecsp.edu.br',
    'yasmin.teixeira@etecsp.edu.br','ze.martins@etecsp.edu.br','ana.cunha@etecsp.edu.br',
    'bernardo.rocha@etecsp.edu.br','cintia.nogueira@etecsp.edu.br','diego.cardoso@etecsp.edu.br',
    'elaine.teixeira@etecsp.edu.br','fernando.cunha@etecsp.edu.br','gustavo.nunes@etecsp.edu.br',
    'helena.silva@etecsp.edu.br','cassia.seixasprof@etec.sp.gov.br','paulaadiretora@etec.sp.gov.br',
    'josiasdepaula@etec.sp.gov.br','mayroliver@etec.sp.gov.br','carlosjava@etec.sp.gov.br',
    'omrccelo13@etec.sp.gov.br','kelly025@etec.sp.gov.br','alfredoo12@etec.sp.gov.br',
    'joseeduardoo1@etec.sp.gov.br','valdineia111@etec.sp.gov.br', 'nelci.mariano@etec.sp.gov.br'
]

let valido = false;

function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    for (let i = 0; i <= emails.length; i++) {
        if (login == emails[i] && senha == "admin") {
            alert('Login efetuado com sucesso!');
            valido = true;
            location.href = "painel-professor.html";
        }
    }

    if (valido == false) {
        alert('Email ou Senha incorreto(s)');
    }
}