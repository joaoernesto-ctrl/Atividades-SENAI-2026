const nomeCompleto = document.getElementById('nome')
const cargo = document.getElementById('cargo')
const departamento = document.getElementById('departamento')
const gerar = document.getElementById('gerar')
const nomeCracha = document.getElementById('nomeC')
const cargoCracha = document.getElementById('cargoC')
const deparCracha = document.getElementById('departamentoC')
const borderaccent = document.querySelector('.cracha')



gerar.addEventListener('click', function(){
    const nomeInput = nomeCompleto.value
    const cargoInput = cargo.value
    const deparInput = departamento.options[departamento.selectedIndex].text
    if (nomeInput != "" && cargoInput != ""){
        alert("Crachá efetuado com sucesso.")
        nomeCracha.textContent = nomeInput
        cargoCracha.textContent = cargoInput
        deparCracha.textContent = deparInput
        if (deparInput === "Desenvolvimento"){
            borderaccent.style.backgroundColor = '#380e3aff'
            borderaccent.style.border = "3px solid #a800caff";
        } else if (deparInput === "Design") {
            borderaccent.style.backgroundColor = '#160e3aff'
            borderaccent.style.border = '3px solid #2500caff'
        } else {
            borderaccent.style.backgroundColor = '#0e3a1dff'
            borderaccent.style.border = '3px solid #2fca00ff'
        }
    } else {
        alert("Certifique-se que você preenchou todos os campos.")
    }
});