import {Actions} from './sam.actions';
import {Model} from './sam.model';
import {State} from './sam.state';
import {Views} from './sam.views';

export class Sam<A extends Actions, M extends Model, S extends State, V extends Views> {
    public actions:A;
    public model:M;
    public state:S;
    public views:V;
    
    
    constructor(_actions, _model, _state, _views) {
                this.actions  = new _actions(this.model);
                this.model = new _model(this.state);
                this.state = new _state(this.views, this.actions);
                this.views = new _views();
                // injection dependencies SAM
                this.actions.model = this.model;
                this.model.state  = this.state;
                this.state.views = this.views;
                this.state.actions = this.actions;
    }
}
