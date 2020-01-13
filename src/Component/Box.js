import React, {Component} from 'react';
import Square from '../Component/Square';
import './Box.css'

class Box extends Component {

    constructor(){
        super();
        this.state = {
            squares : Array(9).fill(null),
            resultat: '',
            nextPlayer: 'true'
        }
    }
    onClickHandler = (i) =>{
         const squares = this.state.squares.slice();
         squares[i]= this.state.nextPlayer ? 'A' : 'B';
         this.setState ({
             squares:squares,
             nextPlayer: !this.state.nextPlayer,

            });

     }
     renderSquaresHandler = (i) =>{
         return(
             <Square 
               value={this.state.squares[i]}
               clicked={()=> this.onClickHandler(i)}/>
         );
     }
    render(){
        const style = {
            margin: '0 auto',
            width: '100px',
            textAlign: 'center'
  
        }
        return(
            <div style= {style}>
                 <div className='row'>
                    { this.renderSquaresHandler(1)}
                    { this.renderSquaresHandler(2)}
                    { this.renderSquaresHandler(3)}
                 </div>
                 <div className='row'>
                    { this.renderSquaresHandler(4)}
                    { this.renderSquaresHandler(5)}
                    { this.renderSquaresHandler(6)}
                 </div>
                 <div className='row'>
                    { this.renderSquaresHandler(7)}
                    { this.renderSquaresHandler(8)}
                    { this.renderSquaresHandler(9)}
                 </div>
            
               

            </div>
        );
    }
}
export default Box;