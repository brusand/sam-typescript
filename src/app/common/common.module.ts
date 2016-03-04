export const COMMON_MODULE_NAME = 'common';

import {COMMON_DIRECTIVE_MODULE} from './directives/directive/directive';
import {COMMON_HTTP_MODULE} from './services/http/http';

export const COMMON_MODULE: ng.IModule = angular.module(COMMON_MODULE_NAME, [
  COMMON_DIRECTIVE_MODULE.name,
  COMMON_HTTP_MODULE.name
]);
