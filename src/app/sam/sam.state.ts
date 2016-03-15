import {Views} from './sam.views';
import {Actions} from './sam.actions';


export class State {
    constructor(public views: Views, public actions: Actions) {

    }


    representation(model) {
        var representation = 'oops... something went wrong, the system is in an invalid state' ;

        this.views.display(representation) ;
    } ;

    nextAction(model) {
   
    } ;

    render(model) {
        this.representation(model)
        this.nextAction(model) ;
    }

}

