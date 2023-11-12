// valor del ticket
const ticket = 200;

// descuentos

let descEstudiante = 0.70;
let descTrainee = 0.40;
let descJunior = 0.25;

// obtenemos los elementos
const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const totalPagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');

// console.log(cantidad);
// funcion para calcular
function calcularPago(){
    let total = cantidad.value * ticket
    switch (categoria.value) {
        case "estudiante":
            total = total - (total * descEstudiante);
            break;
        case "trainee":
            total = total - (total * descTrainee);
            break;
            case "junior":
                total = total - (total * descJunior);
                break;
        default:
            break;
    } 
    console.log(total)
    totalPagar.textContent = `Total a Pagar: $ ${total}`
}
btnResumen.addEventListener('click',(evento)=>{
    evento.preventDefault();
    calcularPago();
});