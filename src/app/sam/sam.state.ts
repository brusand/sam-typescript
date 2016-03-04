/// <reference path="sam.view.ts"/>;

export module Sam {

    export class SamState {
        constructor(public view:any) {

        }
        compute(model) {
            if (this.ready(model)) return this.view.ready(model);
        }
        
        
        representation(model) {
            var representation = 'oops... something went wrong, the system is in an invalid state' ;

            if (this.ready(model)) {
                representation = this.view.ready(model) ;
            } 
            
            return this.view.display(representation) ;
        } ;
        
        nextAction(model) {} ;
        
        render(model) {
            state.representation(model)
            state.nextAction(model) ;
        }

        
        public ready(model) {
            return model.ready;
        }
        
    }
  
}
