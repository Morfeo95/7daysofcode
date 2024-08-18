function cuestionario(){
    let comenzar = prompt("¿Te gustaría programar como (1)Back-end o como Front-end(2)? Ingresa el numero de la opcion deseada");
    if (comenzar == 1){
        let desarrollo = prompt("Para complementar tu desarrollo ¿Te gustaría aprender (1)React o aprender (2)Vue? Ingresa el numero de la opcion deseada");
        if (desarrollo == 1){
            let full = prompt("Desearías volverte un (1)full-stack ó (2)especializarte en tu rama");

            if (full == 1){
                while (full == 1){
                    let tech = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (1)Si (2)No") 
                    if(tech == 1){
                        prompt("¿Cual?")
                    }

                    else if(tech == 2){
                        alert("Gracas por participar en a encuesta :)")
                        full=2
                    }
                    else{
                        alert("solo ingresa los numeros 1 ó 2");
                    }
                }
            }

            else if (full == 2){
                if (full == 2){
                    while (full == 2){
                        let tech = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (1)Si (2)No") 
                        if(tech == 1){
                            prompt("¿Cual?")
                        }
    
                        else if(tech == 2){
                            alert("Gracas por participar en a encuesta :)")
                            full=1
                        }
                        else{
                            alert("solo ingresa los numeros 1 ó 2");
                        }
                    }
                }

            }

            else{
                alert("solo ingresa los numeros 1 ó 2");
            }
            
        }
        else if (desarrollo == 2){
            let full = prompt("Desearías volverte un full-stack ó (2)especializarte en tu rama");
            if (full == 1){
                while (full == 1){
                    let tech = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (1)Si (2)No") 
                    if(tech == 1){
                        prompt("¿Cual?")
                    }

                    else if(tech == 2){
                        alert("Gracas por participar en a encuesta :)")
                        full=2
                    }
                    else{
                        alert("solo ingresa los numeros 1 ó 2");
                    }
                }
            }

            else if (full == 2){
                if (full == 2){
                    while (full == 2){
                        let tech = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (1)Si (2)No") 
                        if(tech == 1){
                            prompt("¿Cual?")
                        }
    
                        else if(tech == 2){
                            alert("Gracas por participar en a encuesta :)")
                            full=1
                        }
                        else{
                            alert("solo ingresa los numeros 1 ó 2");
                        }
                    }
                }

            }

            else{
                alert("solo ingresa los numeros 1 ó 2");
            }
            
        }
        else{
            alert("solo ingresa los numeros 1 ó 2");
        }
    }
    else if(comenzar == 2){
        let desarrollo = prompt("Para complementar tu desarrollo ¿Te gustaría aprender (1)C# o aprender (2)java? Ingresa el numero de la opcion deseada");
        if (desarrollo == 1){
            let full = prompt("Desearías volverte un full-stack ó (2)especializarte en tu rama");
            if (full == 1){
                while (full == 1){
                    let tech = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (1)Si (2)No") 
                    if(tech == 1){
                        prompt("¿Cual?")
                    }

                    else if(tech == 2){
                        alert("Gracas por participar en a encuesta :)")
                        full=2
                    }
                    else{
                        alert("solo ingresa los numeros 1 ó 2");
                    }
                }
            }

            else if (full == 2){
                if (full == 2){
                    while (full == 2){
                        let tech = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (1)Si (2)No") 
                        if(tech == 1){
                            prompt("¿Cual?")
                        }
    
                        else if(tech == 2){
                            alert("Gracas por participar en a encuesta :)")
                            full=1
                        }
                        else{
                            alert("solo ingresa los numeros 1 ó 2");
                        }
                    }
                }

            }

            else{
                alert("solo ingresa los numeros 1 ó 2");
            }
        }
        else if (desarrollo == 2){
            let full = prompt("Desearías volverte un full-stack ó (2)especializarte en tu rama");
            if (full == 1){
                while (full == 1){
                    let tech = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (1)Si (2)No") 
                    if(tech == 1){
                        prompt("¿Cual?")
                    }

                    else if(tech == 2){
                        alert("Gracas por participar en a encuesta :)")
                        full=2
                    }
                    else{
                        alert("solo ingresa los numeros 1 ó 2");
                    }
                }
            }

            else if (full == 2){
                if (full == 2){
                    while (full == 2){
                        let tech = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (1)Si (2)No") 
                        if(tech == 1){
                            prompt("¿Cual?")
                        }
    
                        else if(tech == 2){
                            alert("Gracas por participar en a encuesta :)")
                            full=1
                        }
                        else{
                            alert("solo ingresa los numeros 1 ó 2");
                        }
                    }
                }

            }

            else{
                alert("solo ingresa los numeros 1 ó 2");
            }
        }
        else{
            alert("solo ingresa los numeros 1 ó 2");
        }
    }
    else{
        alert("solo ingresa los numeros 1 ó 2");
    }


}