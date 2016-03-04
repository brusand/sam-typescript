import path from '../../utils/path';

import {COMMON_MODULE_NAME} from '../../common.module';
import moduleName from '../../utils/module-name';

const COMMON_HTTP_MODULE_NAME: string = moduleName(COMMON_MODULE_NAME, 'http');

export class HttpService {
  constructor(private $http: ng.IHttpService, private baseUrl: string) {
  }

  public get<T>(uri: string, config?: ng.IRequestShortcutConfig): ng.IHttpPromise<T> {
    return this.$http.get<T>(this.defaultUri(uri), config);
  }

  public delete<T>(uri: string, config?: ng.IRequestShortcutConfig): ng.IHttpPromise<T> {
    return this.$http.delete<T>(this.defaultUri(uri), config);
  }

  public post<T>(uri: string, data: any, config?: ng.IRequestShortcutConfig): ng.IHttpPromise<T> {
    return this.$http.post<T>(this.defaultUri(uri), data, config);
  }

  public put<T>(uri: string, data: any, config?: ng.IRequestShortcutConfig): ng.IHttpPromise<T> {
    return this.$http.put<T>(this.defaultUri(uri), data, config);
  }

  public defaultUri(uri: string): string {
    return path(this.baseUrl, uri);
  }

  public withId(uri: string): (id: string) => string {
    return (id: string) =>  path(uri, id);
  }
}

export class HttpServiceProvider implements ng.IServiceProvider {

  public baseUrl: string;

  constructor() {
    this.baseUrl = '';
  }

  /* @ngInject */
  public $get($http: ng.IHttpService): HttpService {
    return new HttpService($http, this.baseUrl);
  }
}

export const COMMON_HTTP_MODULE: ng.IModule = angular.module(COMMON_HTTP_MODULE_NAME, [])
  .provider('cmnHttp', HttpServiceProvider);
