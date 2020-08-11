import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import './App.css';
 
const data=[{flightName:'Air India',date:'2020-08-01'},
            {flightName:'Air Decon',date:'2020-08-15'},
            {flightName:'Jet Airwys',date:'2020-08-31'},
            {flightName:'Spicejet',date:'2020-09-01'},
            {flightName:'Kingfisher',date:'2020-09-15'},
            {flightName:'Indigo',date:'2020-09-30'},
            {flightName:'Paramount',date:'2020-10-05'},
            {flightName:'AirAsia India',date:'2020-10-25'},
            {flightName:'Vistara',date:'2020-11-01'},
            {flightName:'GoAir',date:'2020-11-15'},]
         //const stda=new data();
var EndD='';
var startD='';
//onst result=
class App extends Component {
  constructor(props){
  super(props)
 
  this.state = {
    Sdate: new Date(),
    Edate: new Date(),
    onSearch:false
  }
 
}

filerFun=(result)=>{
  this.setState({onChange:true});
  startD=this.state.Sdate;
  EndD=this.state.Edate;
   result=data.filter(function(obj){ 
     return obj.date >= startD && obj.date <=EndD
   })
    for(var i=0; i<result.length;i++){
    // return <div key={i} className='mydiv'></div>
     document.write('Flight Name :'+result[i].flightName+' Date : '+result[i].date+"<br>")
    }
}
 
  render() {
   
    return (
      <div >
      <div className='headerbox'>
      &nbsp;&nbsp;From  : &nbsp;&nbsp; <input type="date" id="start"  onChange={(event)=>{this.setState({Sdate:event.target.value})}}/>
     &nbsp;&nbsp;To    : &nbsp;&nbsp; <input type="date" id="end"  onChange={(event)=>{this.setState({Edate:event.target.value})}}/>
     &nbsp;&nbsp; <button onClick={this.filerFun}>Search</button>
     </div>
     {/* {this.state.Sdate +'---'+this.state.Edate} */}

     {this.state.onSearch!=true? 
     data.map(item => (<div className='mydiv' key={item.id}> {item.flightName}{item.date}</div>)):
     <div>Hi...</div>
      }
      </div>
    );
  }
}export default App;
