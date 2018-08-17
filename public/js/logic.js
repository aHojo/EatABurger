$('#add-burger').on("click", function() {

    event.preventDefault();
    var burger = {
        'burger_name': $('#text-area').val().trim()
    }

    $.ajax("/api/burger",{
        "type": POST,
        "data": burger
    }).then(function (data) {
        console.log(data);
    });
    
    console.log(burger);
});