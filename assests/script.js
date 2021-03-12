let nome = document.querySelector("#nome")
let email = document.querySelector("#email")
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntok = false

nome.style.width="76%"
function validaNome(){
        if(nome.value.length < 3){
            txtNome.innerHTML = "Digite um nome válido"
            txtNome.style.color = "red"
        }else {
            txtNome.innerHTML = "Nome válido"
            txtNome.style.color = "green"
            nomeOk=true
        }
        if(nome.value.length > 3){
            txtNome.style.display="none"
        } 
}
email.style.width="74%"
function validaEmail(){
    if(email.value.indexOf('@')==-1 || email.value.indexOf('.')==-1 ){
        txtEmail.innerHTML = "Digite um Email válido"
        txtEmail.style.color = "red"
    }else {
        txtEmail.style.display = "none"
        emailOk = true
    }
}

function validaAssunto(){
    if(assunto.value.length >= 300){
        txtAssunto.innerHTML = "Cartinha muito grande"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    }else{
        txtAssunto.style.display = "none"
        assuntok = true
    }
}
function enviarForm(){
     if(nomeOk == true && emailOk == true && assuntok ==  true){
         alert ("Cartinha Enviada Com Sucesso")
     }else{
         alert ("Preencha todos os campos")
     }
 }