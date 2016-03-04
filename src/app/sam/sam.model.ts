
/// <reference path="sam.state.ts"/>;
export module Sam {
    export interface ISamModel {
        ready: any; 
        present(data:any):any;
    };
        
    export class SamModel implements ISamModel{
        ready: boolean;
        model: any;
        constructor(public state: any) {
            this.model = this;
            this.model.ready = true;        
        }
        present(data) {
            this.model = data;
            return this.state.render(this.model)
        }
    }    
}
