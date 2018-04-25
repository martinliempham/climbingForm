$(function() {
  $('#climberInfo').validate({
    rules: {
      firstName: 'required',
      lastName: 'required',
      age: 'required',
      // leadingGrade: 'required',
      // boulderingGrade: 'required',
      phoneNumber: 'required',
      // days: 'required',
      // time: 'required',
      email: 'required'
    }
  });
});
