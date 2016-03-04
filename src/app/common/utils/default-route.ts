import {Route} from './route';

export class DefaultRoute extends Route {

    public url: string;
    public templateUrl: string;

    constructor(name: string, parentPath: string[] = []) {
        super(name, parentPath);
        this.url =  `/${name}`;
        let last = this.path[this.path.length - 1];
        this.templateUrl = `app/${last}/${last}.tpl.html`;
    }

    buildState(custom: ng.ui.IState = {}) {
        return super.buildState(angular.merge({
            url: this.url,
            templateUrl: this.templateUrl
        }, custom));
    }
}
