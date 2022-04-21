//nacin animacije linear,swing


$(document).ready ( function () {


//povecaj
 $('#dugme').on ('click', function () {
    $('#lopta').animate ({

        width:1000,
        height:1000

    },10000,'linear',function () {

        alert ('Bas si me dobro nahranio');

    }

    );

})

//smanji
$('#dugme1').on ('click', function () {
    $('#lopta').animate ({

        width:10,
        height:10

    },10000,'linear',function () {

        alert ('Jao sad sam samo kost i koza');

    }

    );

})











});




