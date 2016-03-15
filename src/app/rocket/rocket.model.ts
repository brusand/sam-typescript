import {Model} from './../sam/sam.model';
import {RocketState} from './rocket.state';

export const COUNTER_MAX = 10;
export class RocketModel  extends Model {
    public counter: number 
    public started: boolean      
    public launched: boolean 
    public aborted: boolean

    constructor(public state:RocketState) {
           super(state) 
           this.counter = COUNTER_MAX;
            this.started = false;      
            this.launched = false; 
            this.aborted = false;
     }
    
    public present(data) {
        console.log("present : " + data);   
        if (this.state.counting(this)) {
            if (this.counter === 0) {
                this.launched = data.launched || false ;
            } else {
                this.aborted = data.aborted || false ;
                if (data.counter !== undefined) { this.counter = data.counter ; }
            }
        } else {
            if (this.state.ready(this)) {
                this.started = data.started || false ;
            }
        }
        this.state.render(this) ;  
        
             
        //super.render(this)
    } 
}



