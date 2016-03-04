import './login.route';
import './login-panel.component';

import {DefaultRoute} from '../common/utils/default-route';
import {BASE_ROUTE} from '../core/core.route';
import {AuthService} from '../core/auth.service';

export const LOGIN_ROUTE = new DefaultRoute('login', BASE_ROUTE.path);

const TOP_MENU_TPL = require('../layouts/top-menu.tpl.html');

const LOGIN_TPL = require('./login.tpl.html');

/* @ngInject */
export function routeLogin($urlRouterProvider: ng.ui.IUrlRouterProvider, $stateProvider: ng.ui.IStateProvider) {
  var resolve = {
    login: loginResolve
  };
  $urlRouterProvider.otherwise(LOGIN_ROUTE.url);
  $stateProvider.state(LOGIN_ROUTE.buildState({
    views: {
      'top-menu': {
        template: TOP_MENU_TPL
      },
      '': {
        template: LOGIN_TPL
      }
    },
    resolve: resolve
  }));
}

/* @ngInject */
function loginResolve($q: ng.IQService, auth: AuthService) {
  var deferred = $q.defer();
  if (auth.isInitialized() && auth.isLoggedIn()) {
    deferred.reject();
  } else {
    deferred.resolve();
  }
  return deferred.promise;
}
