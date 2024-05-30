
function calculaIMC(peso, altura) {
    let imcObservacao = document.getElementById("observ");
    let imc = peso / (altura * altura);
    let arredondado = imc.toFixed(1);
    let resultado = document.getElementById("resultado");
    resultado.textContent = arredondado + " " + "kg/m2.";
    if (imc <= 18.5) {
        imcObservacao.innerHTML = "<p>Gostaríamos de chamar sua atenção para o seu Índice de Massa Corporal (IMC), que está abaixo do valor considerado saudável, ficando abaixo de 18,5. Isso indica que você pode estar abaixo do peso ideal para sua altura e idade. É importante lembrar que um IMC abaixo de 18,5 pode indicar alguns riscos para a saúde, como desnutrição, enfraquecimento do sistema imunológico e osteoporose. Manter um peso saudável é essencial para o bom funcionamento do seu corpo e para prevenir complicações de saúde no futuro.Recomendamos que você agende uma consulta com um profissional de saúde para avaliação e orientação personalizada. Eles podem ajudá-lo(a) a desenvolver um plano alimentar adequado às suas necessidades e estilo de vida, além de fornecer recomendações para melhorar sua saúde geral.</p>";
    } else if (imc > 18.5 && imc <= 24.9) {
        imcObservacao.innerHTML = "<p>Gostaríamos de informar que seu Índice de Massa Corporal (IMC) está dentro da faixa considerada saudável, situando-se entre 18,5 e 24,9. Isso indica que você está mantendo um peso adequado para sua altura e idade. Manter um IMC saudável é fundamental para promover o bem-estar e reduzir o risco de várias doenças relacionadas ao peso, como diabetes tipo 2, doenças cardíacas e certos tipos de câncer. Parabéns por adotar hábitos de vida saudáveis que contribuem para esse resultado! Lembre-se de continuar com seus hábitos saudáveis, incluindo uma alimentação balanceada e a prática regular de exercícios físicos. Isso ajudará a manter seu peso estável e sua saúde em ótimas condições. Se tiver alguma dúvida ou precisar de mais informações sobre como manter um estilo de vida saudável, não hesite em nos contatar. Estamos aqui para apoiá-lo(a) em sua jornada de bem-estar.</p>";; // Limpar observação se o IMC for maior que 18.5
    } else if (imc > 24.9 && imc <= 29.9) {
        imcObservacao.innerHTML = "<p>Gostaríamos de chamar sua atenção para o seu Índice de Massa Corporal (IMC), que está dentro da faixa considerada como sobrepeso, situando-se entre 24,9 e 29,9. Isso indica que você pode estar carregando um peso adicional que pode aumentar o risco de certas condições de saúde. O sobrepeso está associado a um maior risco de desenvolver doenças como diabetes tipo 2, hipertensão arterial, doenças cardíacas e problemas articulares, entre outros. É importante que você esteja ciente desses riscos e tome medidas para melhorar sua saúde geral. Recomendamos que você considere fazer mudanças em seu estilo de vida, como adotar uma dieta equilibrada e aumentar a prática de atividade física regular. Pequenas mudanças podem fazer uma grande diferença na sua saúde a longo prazo. Se desejar orientação adicional ou precisar de suporte para alcançar seus objetivos de saúde, não hesite em nos contatar. Estamos aqui para ajudá-lo(a) em sua jornada para uma vida mais saudável.</p>"
    } else if (imc > 29.9 && imc <= 34.9) {
        imcObservacao.innerHTML = "<p>Gostaríamos de chamar sua atenção para o seu Índice de Massa Corporal (IMC), que indica que você está na faixa de obesidade de grau 1, situando-se entre 30 e 34,9. Isso indica um excesso significativo de peso, o que pode aumentar o risco de desenvolver várias condições de saúde. A obesidade de grau 1 está associada a um maior risco de doenças como diabetes tipo 2, hipertensão arterial, doenças cardíacas, apneia do sono e outros problemas de saúde. É fundamental que você tome medidas para melhorar sua saúde e reduzir o risco de complicações futuras. Recomendamos que você procure orientação profissional para desenvolver um plano de saúde personalizado. Isso pode incluir mudanças na dieta, aumento da atividade física e outras estratégias para alcançar um peso saudável. Lembre-se de que estamos aqui para apoiá-lo(a) em sua jornada para uma vida mais saudável. Se precisar de assistência adicional ou tiver dúvidas, não hesite em nos contatar. </p>"
    } else if (imc > 34.9 && imc <= 39.9) {
        imcObservacao.innerHTML = "<p>Gostaríamos de chamar sua atenção para o seu Índice de Massa Corporal (IMC), que indica que você está na faixa de obesidade de grau 2, situando-se entre 35 e 39,9. Isso significa um excesso considerável de peso, o qual pode acarretar em diversos riscos para a saúde. A obesidade de grau 2 está associada a um aumento significativo do risco de desenvolvimento de doenças graves, incluindo diabetes tipo 2, hipertensão arterial, doenças cardíacas, acidente vascular cerebral e outras condições médicas sérias. É crucial que você tome medidas imediatas para melhorar sua saúde e reduzir esses riscos. Recomendamos que você procure ajuda profissional para criar um plano de saúde individualizado. Isso pode envolver mudanças substanciais na dieta, aumento da atividade física e, possivelmente, consideração de outras opções de tratamento. Estamos aqui para apoiá-lo(a) em sua jornada rumo a uma vida mais saudável. Se precisar de orientação adicional ou tiver dúvidas, não hesite em nos contatar. </p>"
    } else if (imc > 39.9) {
        imcObservacao.innerHTML = "<p>Gostaríamos de chamar sua atenção para o seu Índice de Massa Corporal (IMC), que indica que você está na faixa de obesidade de grau 3, com um IMC maior que 39,9. Isso representa um nível muito elevado de excesso de peso, o qual pode acarretar sérios riscos para a sua saúde. A obesidade de grau 3, também conhecida como obesidade mórbida, está associada a um aumento significativo do risco de várias doenças graves, incluindo diabetes tipo 2, doenças cardíacas, acidente vascular cerebral, apneia do sono, problemas articulares e outras condições médicas crônicas. É de extrema importância que você busque ajuda profissional imediatamente para desenvolver um plano de saúde abrangente e personalizado. Isso pode envolver mudanças drásticas no estilo de vida, tratamento médico e, em alguns casos, cirurgia bariátrica. Estamos aqui para apoiá-lo(a) em sua jornada para melhorar sua saúde e qualidade de vida. Por favor, não hesite em nos contatar se precisar de orientação adicional ou apoio. </p>"
    } else {
        imcObservacao.innerHTML = "<p></p>"
    }

}



function ativarBotao() {

    let pesoFlavio = parseFloat(document.getElementById("peso").value.replace(",", "."));
    let alturaFlavio = parseFloat(document.getElementById("altura").value.replace(",", "."));
    let nomeIndividuo = document.getElementById("nome").value;
    let nomeResultado = document.getElementById("nome-resultado");

    if (pesoFlavio == "" || alturaFlavio == "" || nomeIndividuo == "") {
        alert("Preencha os campos!")
        return;
    }


    document.querySelector('.section-resultado').style.display = 'flex';
    nomeResultado.textContent = nomeIndividuo;
    calculaIMC(pesoFlavio, alturaFlavio);

    if (window.innerWidth <= 600) {
        // Obtém a posição da segunda seção
        const resultadoSection = document.getElementById('resultado');
        // Rola a página até a posição da segunda seção
        resultadoSection.scrollIntoView({ behavior: 'smooth' });
    }
}



function voltar() {
    document.querySelector('.section-resultado').style.display = 'none';
    let pesoFlavio = document.getElementById("peso").value = "";
    let alturaFlavio = document.getElementById("altura").value = "";
    let nomeIndividuo = document.getElementById("nome").value = "";
}