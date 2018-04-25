$.validator.addMethod(
  'phoneUS',
  function(phone_number, element) {
    phone_number = phone_number.replace(/\s+/g, '');
    return (
      this.optional(element) ||
      (phone_number.length > 9 &&
        phone_number.match(/^\(?(\d{3})\)?[-\. ]?(\d{3})[-\. ]?(\d{4})$/))
    );
  },
  'Please enter a 10 digit number'
);

// $.validator.addMethod('ageSelector', function() {
//   var $select = $('.1-100');
//   for (i = 1; i <= 100; i++) {
//     $select.append(
//       $('<option></option>')
//         .val(i)
//         .html(i)
//     );
//   }
// });

$(function() {
  $('#climberInfo').validate({
    rules: {
      firstName: 'required',
      lastName: 'required',
      age: {
        required: true
        // ageSelector: true,
        // min: 15,
        // max: 60
      },
      // leadingGrade: 'required',
      // boulderingGrade: 'required',
      phoneNumber: {
        required: true,
        phoneUS: true
      },
      // days: 'required',
      // time: 'required',
      email: {
        required: true,
        email: true
      }
    }
  });
});
