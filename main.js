var provider = new firebase.auth.FacebookAuthProvider();

FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
    {
      status: 'connected',
      authResponse: {
        accessToken: '...',
        expiresIn:'...',
        signedRequest:'...',
        userID:'...'
      }
    }
});



//import firebase from 'firebase';
// var firebase = require('firebase');

// Firebase App is always required and must be first
//var firebase = require('firebase/app');

// Add additional services you want to use
//require('firebase/auth');
//require('firebase/database');
//require('firebase/firestore');
//require('firebase/messaging');
//require('firebase/functions');

//var firebase = require('firebase');
//var firebaseui = require('firebaseui');

// Comment out (or don't require) services you don't want to use
// require("firebase/storage");

//var config = {
// ...
//};
//firebase.initializeApp(config);

// jQuery validation code

// $document.ready(function() {
//   $.validator.addMethod(
//     'phoneUS',
//     function(phone_number, element) {
//       phone_number = phone_number.replace(/\s+/g, '');
//       return (
//         this.optional(element) ||
//         (phone_number.length > 9 &&
//           phone_number.match(/^\(?(\d{3})\)?[-\. ]?(\d{3})[-\. ]?(\d{4})$/))
//       );
//     },
//     'Please enter a 10 digit number'
//   );
//
//   $(function() {
//     $("form[name='climberInfo']").validate({
//       rules: {
//         firstName: 'required',
//         lastName: 'required',
//         age: {
//           required: true
//           // ageSelector: true,
//           // min: 15,
//           // max: 60
//         },
//         // leadingGrade: 'required',
//         // boulderingGrade: 'required',
//         phoneNumber: {
//           required: true,
//           phoneUS: true
//         },
//         // days: 'required',
//         // time: 'required',
//         email: {
//           required: true,
//           email: true
//         }
//       }
//     });
//   });
// });
