//Verificando o horario para a saudação adequada
//Usando If/Else

const saudacaoMensagem = () => {
    let hora = new Date().getHours();
    if (hora <= 5) {
        return 'Boa Madrugada';
    }
    else if (hora < 12) {
        return 'Bom Dia';
    }
    else if (hora < 18) {
        return 'Boa Tarde';
    }
    else {
        return 'Boa Noite';
    }
}

console.log(saudacaoMensagem());