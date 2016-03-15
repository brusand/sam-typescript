import {RocketModel} from './rocket.model';
import {Views} from './../sam/sam.views';

//const ROCKET_START_TPL = require('./rocket-start.tpl.html');

export class RocketViews extends Views {
        constructor() {
            super()
        }
            init(model) {
                return this.ready(model) ;
            }
        
            // State representation of the ready state
            ready(model) {
                return (
                        "<p>Counter: {{rocket.model.counter}} </p>\n\
                        <form ng-submit=rocket.actions.start({})>\n\
                            <input type=\"submit\" value=\"Start\">\n\
                        </form>"
                    ) ;
            }

            // State representation of the counting state
            counting(model) {

                return (
                        "<p>Count down:  {{rocket.model.counter}}</p>\n\
                        <form ng-submit= rocket.actions.abort({})>\n\
                            <input type=\"submit\" value=\"Abort\">\n\
                        </form>"
                    ) ;

            }
            // State representation of the aborted state
            aborted(model) {

                return (
                        "<p>Aborted at Counter: {{rocket.model.counter}}</p>\n"
                    ) 
            }

            // State representation of the launched state
            launched(model) {

                return (
                        "<p>Launched</p>"
                    ) ;

            }         
}

