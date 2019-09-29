// import * as firebase from 'firebase'

// const firebaseConfig = {
//     apiKey: "AIzaSyC9xa-3WFm-u4v8KP2viMxVxubyQDFbqwY",
//     authDomain: "formstest-db1.firebaseapp.com",
//     databaseURL: "https://formstest-db1.firebaseio.com",
//     projectId: "formstest-db1",
//     storageBucket: "formstest-db1.appspot.com",
//     messagingSenderId: "161773335292",
//     appId: "1:161773335292:web:7d8343712cd55ed6661d79"
//   };
  
//   firebase.initializeApp(firebaseConfig);

//   firebase.database().ref().set(
//     {
//         Name: 'Mujahid Hussain',
//         Age: 31,
//         Location: 'Karachi',
//         Temprature: '98',
//         HeartBeat: 72,
//         BPu : 120,
//         BPd: 150
//     });

//     firebase.database().ref().once('value').then(
//         (snapshot)=>{ 
//           console.log(snapshot.val());
//         }).catch((e)=>{ console.log(e)})