AOS.init();

function calc(){
    let dose = $("#dose").val();
    let peso = $("#peso").val();
    let conc = $("#conc").val();
    let calc = dose*peso/conc
    document.getElementsByName("resul")[0].value = calc.toFixed(1);    
}

let date = new Date()
let currentDate = date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
})
document.querySelector('#date').innerHTML = currentDate
