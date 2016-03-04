
import {HttpServiceProvider} from '../common/services/http/http';

/* @ngInject */
export function configHttp($httpProvider: ng.IHttpProvider, cmnHttpProvider: HttpServiceProvider) {
  cmnHttpProvider.baseUrl = '';
  $httpProvider.interceptors.push('requestInterceptor');
}
