import React from 'react';
import puce from '../src/puce.png'
import card from '../src/logo-mastercard-mobile.svg'
class Card extends React.Component{
    constructor(props){
        super(props)
        this.state={
            num:'',
            date:'',
            name:''            

        }
    }
    changeNum=(event)=>{
        const re = /^[0-9\s]+$/;
        let number=event.target.value;
       
        console.log(event.target.value)
        if(number.length<=19 && number.match(re)){
            let finalnumber=this.addSpace(number);
            this.setState({
                num:finalnumber
            })
            
        }   
    }
    addSpace=number=>{
        let tab=[];
        let newnumber=number.replace(/\s/g,"");
             for(let i=0;i<newnumber.length;i+=4){
                let x=newnumber.slice(i,i+4)
               tab.push(x)
            }
             return tab.join(" ")

    };
         

    
    changeDate=(event)=>{
        const re = /^[0-9/]+$/;
        let date=event.target.value;
   
        
       if ( date.length<=5 && date.match(re)&& date.slice(0, 1) <= 1 && date.slice(0, 2) <= 12){
                    
             
              let datetochange= date.replace(/[/]/g, "");
               let arr = [];
               for (let i = 0; i < datetochange.length; i += 2) {
                 arr.push(datetochange.slice(i, i + 2));
               }
               let dateformat= arr.join("/");
               console.log(dateformat);
               this.setState({
                date:dateformat
    
            })
        }
    }     
          
         
     
   
    changeName=(event)=>{
        if(event.target.value.length<=4){
            this.setState({
                name:event.target.value.toUpperCase()
    
            })
        }
        }
        

    
    render(){
        return(
            <div className="creditcard"> 
                <div className="card">
                 <div className="">
                 <p className="companytext">Company name</p>
                 <img src={puce} className="puceicon"/>
                 </div>
                 <p className="">{this.state.num}</p>
                 <div className="datecard">
                 <p className="paragmastercard">{this.state.date}</p>
                 <img src={card} className="cardicon"/>
                 </div> 
                 <p className="">{this.state.name}</p>
                                 
                </div>
                <form className="sectionfield">
                 <input type="text" onChange={this.changeNum} value={this.state.num}/>
                 <input type="text" onChange={this.changeName} value={this.state.name}/>
                 <input type="text" onChange={this.changeDate} value={this.state.date}/>
                </form>
                
            </div>
        )
    }
}
export default Card