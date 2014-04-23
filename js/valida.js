$( document ).ready(function() {
    $("#signup").validate({
        rules: {
            name: {
                required: true,
                rangelength: [2, 50]
            },
            email: {
                required: true,
                email: true
            },
            company: {
                required: true,
                rangelength: [2, 150]
            },
            url: {
                required: false,
                url: true
            }
        },
        messages: {
            name: {
                required: "Por favor escribe tu nombre",
                rangelength: "Debe tener entre 2 y 50 caracteres"
            },
            email: {
                required: "Necesitamos tu email para contactarte"
            },
            company: {
                required: "Por favor escribe el nombre de tu empresa",
                rangelength: "Debe tener entre 2 y 150 caracteres"
            },
        }
    });
});
