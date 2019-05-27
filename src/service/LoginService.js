export default class LoginService{
    static logar(email, senha){
        // Ir No servidor e valiar o login e a senha
        if(email == "caroljackhayunne123" && senha=='123'){
            return true
        }else{
            return false
        }
    }
    static recuperarSenha(email){

    }
}