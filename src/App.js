import React, {Component} from 'react';
import './App.css';
import * as firebase from 'firebase'
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      info:'',
      
      age: '',
      name:'',
      location:'',
      temprature: '',
      heartbeat: '',
      bpu : '',
      bpd: ''
    }
}


componentWillMount(){
  const firebaseConfig = {
    apiKey: "AIzaSyC9xa-3WFm-u4v8KP2viMxVxubyQDFbqwY",
    authDomain: "formstest-db1.firebaseapp.com",
    databaseURL: "https://formstest-db1.firebaseio.com",
    projectId: "formstest-db1",
    storageBucket: "formstest-db1.appspot.com",
    messagingSenderId: "161773335292",
    appId: "1:161773335292:web:7d8343712cd55ed6661d79"
  };
  firebase.initializeApp(firebaseConfig);

  setInterval(() => {
      firebase.database().ref().once('value').then(
          (snapshot)=>{ 
            this.setState({info:snapshot.val()})
          }).catch((e)=>{ console.log(e)})
  },3000);
}
handleer=(e)=>{
  const {name, value} = e.target;
  this.setState({
    [name]: value
  })
 
}

UpdateValues=()=>{
  firebase.database().ref().set(
    {
        Name: this.state.name,
        Age: this.state.age,
        Location: this.state.location,
        Temprature: this.state.temprature,
        HeartBeat: this.state.heartbeat,
        BPu : this.state.bpu,
        BPd: this.state.bpd,
    });
}
render(){
  const mydata = this.state.info
  console.log(mydata);
  return (
  <div>
    <h2>Syncronized data recieved from cloud:</h2>
    <table border="1">
      <tr>
        <td>Name: </td>
        <td>{mydata.Name}</td>
      </tr>
      <tr>
        <td>Age: </td>
        <td>{mydata.Age}</td>
      </tr>
      <tr>
        <td>Location: </td>
        <td>{mydata.Location}</td>
      </tr>
      <tr>
        <td>Temprature: </td>
        <td>{mydata.Temprature}</td>
      </tr>
      <tr>
        <td>BPu: </td>
        <td>{mydata.BPu}</td>
      </tr>
      <tr>
        <td>BPd: </td>
        <td>{mydata.BPd}</td>
      </tr>
    </table>
    <h2>Send data to cloud:</h2>
     <hr/>
     Name     <input type="text" onChange={this.handleer} value={this.state.name} name="name"/> <br/>
     Age      <input type="text" onChange={this.handleer} value={this.state.age} name="age"/> <br/>
     Location <input type="text" onChange={this.handleer} value={this.state.location} name="location"/> <br/>
     Heart Beat <input type="text" onChange={this.handleer} value={this.state.heartbeat} name="heartbeat"/> <br/>
     Temprature <input type="text" onChange={this.handleer} value={this.state.temprature} name="temprature"/> <br/>
     BPu <input type="text" onChange={this.handleer} value={this.state.bpu} name="bpu"/> <br/>
     BPd <input type="text" onChange={this.handleer} value={this.state.bpd} name="bpd"/> <br/>
     
     <button onClick={this.UpdateValues}>Update Values</button>
          
     </div>

  );
}}
export default App;
