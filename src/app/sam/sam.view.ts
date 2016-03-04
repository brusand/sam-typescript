export module Sam {
    export class SamView {
        constructor() {          
        }
        
        // State representation of the ready state 
        ready(model) {
            return (
                    "<div>Sam ready " + model.ready + "/div>"
                );
        };
    }    
}




