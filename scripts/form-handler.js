// Add a custom method for validating the credit card expiry
$.validator.addMethod("creditCardExpiry", function(value, element) {
    // Use a regular expression to check that the value is in the mm/yy format
    return this.optional(element) || /^\d{2}\/\d{2}$/.test(value);
  }, "The expiry date of your credit card is invalid.");
  
  // Validate the form when it is submitted
  $("#order-form").validate({
    // Specify validation rules for each field
    rules: {
      firstName: {
        required: true,
        minlength: 2
      },
      lastName: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        phoneUS: true
      },
      creditCard: {
        required: true,
        pattern: /^\d{16}$/
      },
      creditCardExpiry: {
        required: true,
        creditCardExpiry: true
      }
    },

    // Display error messages below each field
    errorPlacement: function(error, element) {
      error.insertAfter(element);
    },
    // Submit the form if all fields are valid
    submitHandler: function(form) {
      // Remove items from the shopping cart
      // Create an order using the customer's name and a unique order number
        form.submit();
      
    }
  });
  