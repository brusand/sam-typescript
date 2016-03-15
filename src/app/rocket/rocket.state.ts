import {State} from './../sam/sam.state';
import {RocketActions} from './rocket.actions';
import {RocketViews} from './rocket.views';
import {COUNTER_MAX} from './rocket.model';

export class RocketState extends State {
    constructor(public views:RocketViews, public actions:RocketActions ) {
        super(views, actions);
    }
    
    ready(model) {
        return ((model.counter === COUNTER_MAX) && !model.started && !model.launched && !model.aborted) ;
    }

    counting(model) {
        var status = ((model.counter <= COUNTER_MAX) && (model.counter >= 0) && model.started && !model.launched && !model.aborted) ;
        return status ;
    }

    launched = function(model) {
        return ((model.counter == 0) && model.started && model.launched && !model.aborted) ;
    }

    aborted = function(model) {
        return (
            (  model.counter <= COUNTER_MAX) && (model.counter >= 0) 
            && model.started && !model.launched && model.aborted ) ;
    }
    
    representation(model) {
       var representation = 'oops... something went wrong, the system is in an invalid state' ;
       
        if (this.ready(model)) {
            representation = this.views.ready(model) ;
        } 

        if (this.counting(model)) {
            representation = this.views.counting(model) ;
        }

        if (this.launched(model)) {
            representation = this.views.launched(model) ;
        }

        if (this.aborted(model)) {
            representation = this.views.aborted(model) ;
        }
                
       this.views.display(representation) ;
    }
    
    nextAction(model) {
         if (this.counting(model)) {
            if (model.counter>0) {
                this.actions.decrement({counter: model.counter}, model.present) ;
            }

            if (model.counter === 0) {
                this.actions.launch({},model.present) ;
            }
        }
    }
    render(model) {
       //super.render(model)
        this.representation(model)
        this.nextAction(model) ;
    }      
}

