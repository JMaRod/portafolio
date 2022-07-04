/**
 * Este será el script principal cuya función será estar vigilando los “estados” de los elementos para detonar los llamados a revisión.
    Se supervisaran dos estados por elemento de input, el blur para saber cuando se cambio el focos de un elemento y el key para revisar cuando se esta escribiendo en un campo.
    Se tuvo que hacer que se supervisaran dos elementos (los input y el textarea) porque el textarea no es tomado como un input.

 */

import { valida } from "./validar.js";

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("keyup", (input) => {
        valida(input.target);
    })
});

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    })
});

const textarea = document.querySelector("#fmessage");

textarea.addEventListener("keyup", (textarea) => {
    valida(textarea.target)
});

textarea.addEventListener("blur", (textarea) => {
    valida(textarea.target)
});


