import {Actions} from './../sam/sam.actions';
import {RocketModel} from './rocket.model';

export class RocketActions extends Actions {
    static $inject = ['$timeout']
    constructor(public $timeout, public model:RocketModel) {
        super(model);
    }
    public init(timeout) {

        this.$timeout = timeout;
        this.model.present({})
    }

    public display() {
        this.model.present({}) ;
        return false ;
    }
    public start(data, present) {
        //data = data || {};
        //present = present || this.model.present;

        data.started = true ;
        this.model.present(data) ;
        return false ;
    }

    public decrement(data, present) {
        present = present || this.model.present ;
        data = data || {} ;
        data.counter = data.counter || 10 ;
        var d = data ;
        var m = this.model ;
        
    
        this.$timeout(function() {
                d.counter = d.counter - 1 ;
                m.present(d) ;
        }, 1000) ;
    }

    public launch(data, present) {
        present = present || this.model.present ;
        data.launched = true ;
        this.model.present(data) ;
    }

   public abort(data, present) {
        present = present || this.model.present ;
        data.aborted = true ;
        this.model.present(data) ;
        return false ;
    } 


}

