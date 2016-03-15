  "use strict";
//const ROCKET_PANEL_TPL = require('./login-panel.component.tpl.html');
import {RocketActions} from './rocket.actions';
import {RocketModel} from './rocket.model';
import {RocketState} from './rocket.state';
import {RocketViews} from './rocket.views';
import {Sam} from '../sam/sam.component';

export class RocketSam extends Sam<RocketActions, RocketModel, RocketState, RocketViews> {
   
    //sam = new Sam<RocketActions, RocketModel, RocketState, RocketViews>(RocketAction, new RocketModel(), new RocketState(), new RocketViews());
  
    static $inject = ['$http', '$scope'];

    constructor($http, $scope)
    {
       super(RocketActions, RocketModel, RocketState, RocketViews);
       
    }
    
}
class RocketController extends Sam<RocketActions, RocketModel, RocketState, RocketViews>  {

    /* @ngInject */
    static $inject = ['$http', '$scope', '$timeout'];

    constructor($http, $scope, $timeout)
    {
       super(RocketActions, RocketModel, RocketState, RocketViews);
      
       $scope.rocket = this;
       this.actions.init($timeout);
       
    }

    
}

export class RocketSamController  extends RocketSam {
 
    static $inject = ['$http', '$scope'];
    constructor($http, $scope)
    {
       super($http, $scope);
       
    }
 
}


export class RocketDirective {
    public link: ($scope: ng.IScope, $element: ng.IAugmentedJQuery, $attrs: ng.IAttributes) => void;
    scope = { id: '@id'};
    bindToController = {};
    controllerAs ='rocket';
    controller = RocketController;
    constructor(public $compile:ng.ICompileService)
    {
         RocketDirective.prototype.link = ($scope: ng.IScope, $element: ng.IAugmentedJQuery, $attrs: ng.IAttributes) =>
        {
                var el
                $scope.$watch( 'rocket.views.representation', (newValue:string, oldValue) =>  {
                        if ( angular.isDefined( newValue ) ) {
                        // compile the providred template against the current scope
                            el = this.$compile(newValue)( $scope );
                            // stupid way of emptying the element
                            $element.html("");

                            // add the template content
                            $element.append( el );
                        }
                });
        };
    }

    public static Factory()
    {
        var directive = ($compile) =>
        {
            return new RocketDirective($compile);
        };

        directive['$inject'] = ['$compile'];

        return directive;
    }

}

