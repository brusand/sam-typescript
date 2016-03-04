
import path from '../../utils/path';

import {COMMON_MODULE_NAME} from '../../common.module';
import moduleName from '../../utils/module-name';

const COMMON_DIRECTIVE_MODULE_NAME: string = moduleName(COMMON_MODULE_NAME, 'directive');
////////////////////////////////////////////////

//Base directive Scope Definition. Define 
//attributes on the scope
////////////////////////////////////////////////
export interface IBaseDirectiveScopeDefinition {
};
    
////////////////////////////////////////////////
//Base directive Scope. This is the actual scope
//object created by Angular, which contains
//variables declared in IBaseDirectiveScopeDefinition
////////////////////////////////////////////////
export interface IBaseDirectiveScope extends ng.IScope{
};
    
////////////////////////////////////////////////
//Base directive class
////////////////////////////////////////////////
export class BaseDirective implements ng.IDirective {
    
    public priority : number;
    public restrict : string;
        
    //could be falst/true/'element'
    public transclude : any;
    public replace : boolean;
    public require : any;
        
    public scope      : IBaseDirectiveScopeDefinition;
    public templateUrl : string;
    public template : string;
        
    public controller : (...args: any[]) => void; 
    public link : (scope : IBaseDirectiveScope, element : ng.IAugmentedJQuery, attrs : any, controllers : any, transclusionFn?:any) => void;
    public compile: (element : ng.IAugmentedJQuery, attrs : any) => void;
        
    constructor () {
        this.priority = 0;
        this.restrict = "EAC";
        this.transclude = false;
        this.replace = false;
    }

        
}
export const COMMON_DIRECTIVE_MODULE: ng.IModule = angular.module(COMMON_DIRECTIVE_MODULE_NAME, [])
  .directive('baseDirective', BaseDirective);