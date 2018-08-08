function iterate(arr) {
    var classTotal = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].checked) {
            classTotal = classTotal + parseInt(arr[i].value);
        }
    }
    return classTotal;
}

function iterateName(arr) {
    var classTotal = '';
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].checked) {
            classTotal = classTotal + arr[i].id + '<br>';
        }
    }
    return classTotal;
}

function getTotal() {
    var total = 0;
    var nameList = '';
    var size = parseInt(iterate(document.getElementsByClassName('size')));
    var meats = parseInt(iterate(document.getElementsByClassName('meats')));
    var veggies = parseInt(iterate(document.getElementsByClassName('veggies')));
    var cheese = parseInt(iterate(document.getElementsByClassName('cheese')));
    var sauce = parseInt(iterate(document.getElementsByClassName('sauce')));
    var crust = parseInt(iterate(document.getElementsByClassName('crust')));

    var sizeName = iterateName(document.getElementsByClassName('size'));
    var meatsName = iterateName(document.getElementsByClassName('meats'));
    var veggiesName = iterateName(document.getElementsByClassName('veggies'));
    var cheeseName = iterateName(document.getElementsByClassName('cheese'));
    var sauceName = iterateName(document.getElementsByClassName('sauce'));
    var crustName = iterateName(document.getElementsByClassName('crust'));

    if (meats === 1) {
        meats = 0;
    } else if (meats > 1) {
        meats = meats -1;
    }
    if (veggies === 1) {
        veggies = 0;
    } else if (veggies > 1) {
        veggies = veggies -1;
    }

    total = total + size + meats + veggies + cheese + sauce + crust;
    nameList = nameList + sizeName + meatsName + veggiesName + cheeseName + sauceName + crustName;
    document.getElementById('modalBody').innerHTML = nameList;
    document.getElementById('showFinalPrice').innerHTML = '$' + total + '.00';
}
function resetOrder() {
    document.getElementById('menu').reset();
}
