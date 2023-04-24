// Validar formulário


//var botao = document.getElementById('btn')

var usuarios = [
         
        {
            login: 'Mauricio',
            pass: '1234'
        },

        {
            login: 'Eder',
            pass: '2345'
        },

        {
            login: 'Raphael',
            pass: '3456'
        },

        {
            login: 'Ademir',
            pass: '4567'
        },

        {
           
           login: 'Rebeca',
           pass: '5678'
        }
]


function logar(){    
   
   let captaUsuario = document.getElementById('user').value
   let captaSenha = document.getElementById('senha').value
   let validaLogin = false

   for(let  i in usuarios){

     //in->Laço para interagir sobre as propriedades enumeradas de um objeto, na ordem original de inserção. 

     if(captaUsuario == usuarios[i].login && captaSenha == usuarios[i].pass){
         validaLogin = true
         break          
       }     
   } 

   if(validaLogin == true){
      alert('Bem vindo ' + captaUsuario)
      location.href = 'https://gittmau.github.io/obpc/index.html' 
   }
   else{
        alert('Usuário ou senha inválido')
    }    
}

//botao.addEventListener('click',logar)

 
 