import moduleName from '../common/utils/module-name';
import {APP_CONFIGURATION} from '../app.config';
import {CORE_MODULE} from '../core/core.module';

import {routeLogin} from './login.route';
import {LoginPanelComponent} from './login-panel.component';
import {AccountNavComponent} from './account-nav.component';

const LOGIN_MODULE_NAME: string = moduleName(APP_CONFIGURATION.id, 'login');

export const LOGIN_MODULE: ng.IModule = angular.module(LOGIN_MODULE_NAME, [
  CORE_MODULE.name
]);

LOGIN_MODULE.config(routeLogin);
LOGIN_MODULE.directive('loraLoginPanel', LoginPanelComponent);
LOGIN_MODULE.directive('loraAccountNav', AccountNavComponent);
