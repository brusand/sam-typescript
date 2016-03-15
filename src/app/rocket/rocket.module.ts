import moduleName from '../common/utils/module-name';
import {APP_CONFIGURATION} from '../app.config';
import {CORE_MODULE} from '../core/core.module';

import {RocketComponent, RocketDirective} from './rocket.component';

const ROCKET_MODULE_NAME: string = moduleName(APP_CONFIGURATION.id, 'rocket');

export const ROCKET_MODULE: ng.IModule = angular.module(ROCKET_MODULE_NAME, [
  CORE_MODULE.name
]);

ROCKET_MODULE.directive('rocket', RocketDirective.Factory());
//ROCKET_MODULE.directive('rocket', RocketComponent);
