$("#form-validation").validate({
    rules: {
        name: {
            minlength: 2 
        },
        email: {
            email: true,
        },
        phone: {
            number: true,
            
            minlength: 11
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Name atleast two characters"
            },
            email: {
                required: "Please enter your email",
                email: "Please enter valid password"
            },
            subject: {
                required: "Please enter your subjectc here"
            },
            phone: {
                required: "Please enter your phone number",
                minlength: "Number atleast 11 digits",
                number: "Enter valid number",
                phone: "Enter valid number"
            },
            Message: {
                required: "Please enter your message here"
            }

        }

    },
    submitHandler: function(form) {
       form.submit(); 
}
});
alert("aaaaaaaaaaa")