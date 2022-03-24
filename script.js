
function updateReduction(event){
    const reduction = document.getElementById('reduction')
    reduction.innerHTML = event.target.value *33 / 100
}
const val = document.getElementById('don');
val.addEventListener("input",(event)=> updateReduction(event))