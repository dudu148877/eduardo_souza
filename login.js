
           
                function logar(){

                    var login = document.getElementById('login').value;
                    var senha = document.getElementById('senha').value;
                    
                       console.log(login);
                    
                    
                    
                    if (login== "Admin" && senha == "Admin7092"){
                    alert('Olá, seja bem vindo (a)')
                    location.href = "curriculo2.html";
                    
                    }else{
                        alert('usuario ou senha incorreto');
                    }
                    }
