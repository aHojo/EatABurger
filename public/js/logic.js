$('#add-burger').on("click", function() {

    event.preventDefault();
    var burger = {
        'burger_name': $('#text-area').val().trim()
    }
    $.post("/api/burger", burger, function (data) {
        console.log(data);
        location.reload();
    });
    

});


$(".devour").on('click', function () {
    event.preventDefault();

    var id = $(this).data("id");

    console.log(id);
    $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: id
    }).then(function (data) {
        console.log(data);
        location.reload();
    });
})
$(".trash").on('click', function () {
    event.preventDefault();

    var id = $(this).data("id");

    console.log(id);
    $.ajax("/api/burger/" + id, {
        type: "DELETE",
        data: id
    }).then(function (data) {
        console.log(data);
        location.reload();
    });
})