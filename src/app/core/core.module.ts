import moduleName from '../common/utils/module-name';
import {APP_CONFIGURATION} from '../app.config';

import {configHttp} from './http.config';

const CORE_MODULE_NAME: string = moduleName(APP_CONFIGURATION.id, 'core');

export const CORE_MODULE: ng.IModule = angular.module(CORE_MODULE_NAME, [
]);

CORE_MODULE.config(configHttp);

