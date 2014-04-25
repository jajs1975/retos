// Basado en https://gist.github.com/johnnyreilly/5867188#file-demotooltip-html
$(document).ready(function(){
    $("signup").validate({
        rules: {
            name: {
                required: true,
                rangelength: [3, 50]
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
                rangelength: "Debe tener entre 3 y 50 caracteres"
            },
            email: {
                required: "Necesitamos tu email para contactarte"
            },
            company: {
                required: "Por favor escribe el nombre de tu empresa",
                rangelength: "Debe tener entre 2 y 150 caracteres"
            },
        },
    
        showErrors: function(errorMap, errorList) {

            // Clean up any tooltips for valid elements
            $.each(this.validElements(), function (index, element) {
            var $element = $(element);
                $element.data("title", "") // Clear the title - there is no error associated anymore
                .removeClass("error")
                .tooltip("destroy");
            });
     
            // Create new tooltips for invalid elements
            $.each(errorList, function (index, error) {
            var $element = $(error.element);
     
            $element.tooltip("destroy") // Destroy any pre-existing tooltip so we can repopulate with new tooltip content
                .data("title", error.message)
                .addClass("error")
                .tooltip(); // Create a new tooltip based on the error messsage we just set in the title
            });
        },
 
        submitHandler: function(form) {
            form.submit();
        }
    });
});
