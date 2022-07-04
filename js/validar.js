/**
 *  Aquí creamos las funciones y las variables que nos ayudan a revisar que los campos del form estén correctos
 */

export function valida (input) {
    const tipoDeInput = input.dataset.tipo;

        if(input.validity.valid){
            input.parentElement.classList.remove("contact__form__item--invalid");
            input.parentElement.querySelector(".contact__form__item__input--error").innerHTML = "";
        } else {
            input.parentElement.classList.add("contact__form__item--invalid");
            input.parentElement.querySelector(".contact__form__item__input--error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
        }
        validateButton();
        // Ya con los validadores, para hacer que el botón de enviar se active solamente cuando todos los campos son correctos llamamos a la función validateButton() para revisar todos los campos

}

function validateButton (){
    const validateInputs = document.querySelectorAll("input");
    const validateTextarea = document.querySelector("#fmessage")
    let validInput=0;
    validateInputs.forEach(function (input){
        if (input.validity.valid){
            validInput=validInput+1;
            //vamos sumar un 1 cada que un campo este correcto, de manera que si la suma final es igual al numero de campos, quiere decir que todos los campos estan correctos
        }
    });
    if((validInput == validateInputs.length)&&validateTextarea.validity.valid)
        document.querySelector(".contact__form__item__button").disabled = false;
    else    
        document.querySelector(".contact__form__item__button").disabled = true;
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
    "tooLong"
];

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío",
        patternMismatch: "El campo nombre debe tener máximo 50 caracteres"
    },
    email: {
        valueMissing: "El campo  email no puede estar vacío",
        patternMismatch: "El correo debe tener un patron similar a nombre@dominio.com",
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacío",
        patternMismatch: "El campo nombre debe tener máximo 50 caracteres",
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacío",
        tooLong: "El campo mensaje debe tener máximo 300 caracteres",
    }
}

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = "";
    tipoDeErrores.forEach( error => {
        if (input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje;
}
