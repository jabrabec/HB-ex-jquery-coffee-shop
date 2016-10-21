
function showFortune(results) {
    var fortune = results;
    $('#fortune-text').html(fortune);
}

function handleEspressoClick(evt) {
    // updateDrink('espresso');
    var clickedOn = evt.currentTarget;
    var drink = clickedOn.getAttribute("id");
    updateDrink(drink);
    // console.log(evt.currentTarget);
    // $.get("/fortune", showFortune);
}

function updateDrink(nameOfDrink){
     $("#"+ nameOfDrink).html()
}

$("#espresso").on('click', handleEspressoClick);
// $('#get-fortune-button').on('click', getFortune);
