var doisad = document.getElementById('doisad')
var complementos = document.getElementById('complementos')
var complementosdois = document.getElementById('complementosdois')

function clicar () {complementos.style.display='flex'}
function clicard () {complementosdois.style.display='flex'}
function clicarFechar () {complementos.style.display='none'}
function clicarFechard () {complementosdois.style.display='none'}

function cli (String) {var car = document.getElementById('carrinho').innerHTML;
document.getElementById('carrinho').innerHTML = car + String ;
}

function apagar () {
   var zer = null;
    document.getElementById('carrinho').innerHTML = zer;}