function enviar(){

    let nomeUsuario = document.getElementById("user").value
    let emailUsuario = document.getElementById("email").value
    let senhaUsuario = document.getElementById("senha").value
    let dataNascimento = document.getElementById("nascimento").value

    let genero = document.querySelector("input[name='gender']:checked").value

    alert("Nome de usuário: " + nomeUsuario + "\nE-mail: " + emailUsuario + "\nSenha: " + senhaUsuario + "\nData de nascimento: " + dataNascimento + "\nGenero: " + genero)

    let checkbox =document.getElementById("termosDeUso")

    if(checkbox.checked){
    window.location.href="../formularioLogin/formularioLogin.html"
    }else{
        alert("É necessário marcar os termos de serviço")
    }
}