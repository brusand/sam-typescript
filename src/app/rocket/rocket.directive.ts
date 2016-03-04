
//const ROCKET_PANEL_TPL = require('./login-panel.component.tpl.html');
import {BaseDirective} from '../common/directives/directive/directive';

//Define which attributes will be created on scope
/////////////////////////////////////////////////////
export class RocketDirectiveScopeDefinition implements IBaseDirectiveScopeDefinition {
    template:string;
};

/////////////////////////////////////////////////////
//Actual scope object created by angular
/////////////////////////////////////////////////////
export interface RocketDirectiveScope extends IBaseDirectiveScope {
    template:string;
    //methods
    //page: (pageNum:number) => void;
};
     
/////////////////////////////////////////////////////
//return DDO object
/////////////////////////////////////////////////////
export class RocketDirective extends BaseDirective {

    constructor (
        private $compile:ng.ICompileService 
    ) {
         
            super ();
            //this.templateUrl="";
            this.restrict="E";
             
            this.scope=<RocketDirectiveScopeDefinition>{
                template:"="
            };
 
            //////////////////////////////
            //Controller - setup scope
            //////////////////////////////
            this.controller=function ($scope: IRocketDirectiveScope, $element:ng.IAugmentedJQuery, $attrs:any) {
                var _that=this;
     
            };
             
            /////////////////////////////////////////////
            //Link - handle template loaded flag
            /////////////////////////////////////////////
            this.link=function ($scope: IRocketDirectiveScope, $element:ng.IAugmentedJQuery, $attrs:any, controller:any) {
                $scope.$on('$template',function(event,data){
                    controller.templateLoaded=true;
                });
            }
 
        }    
}





export function RocketPanelComponent(): ng.IDirective {
  return {
    template: '',
    scope: {
        id:'@'
    },
    bindToController: {
        id:'@',
        template:'='
    },
    controllerAs: 'rocketPanel',
    controller: RocketPanelController,
    link: function() {
        
    }
  };
}



class RocketActions {
    
    constructor() {
        
    }
    public alert(data) {
        console.log(data);
    }
    
}

class RocketPanelController {

  public actions: RocketActions;

  /* @ngInject */
  constructor() {
    $scope.rocket = this;      
  }

}
