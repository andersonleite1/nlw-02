// Procurar o botao / Quando clicar no botao
document.querySelector("#add-time").addEventListener('click', cloneField);

function cloneField(){
    // Duplica os campos
     const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    // Limpa os campos
    const fields = newFieldContainer.querySelectorAll('input');

    // para cada campo, limpa
    fields.forEach(field => {
        field.value = "";
    });

    // Colocar na pagina
    document.querySelector('#schedule-itens').appendChild(newFieldContainer);
}