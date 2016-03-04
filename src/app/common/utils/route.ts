export class Route {

    public path: string[];
    public stateName: string;

    constructor(name: string, parentPath: string[] = []) {
        this.path = parentPath.concat(name);
        this.stateName = this.path.join('.');
    }

    buildState(custom: ng.ui.IState = {}) {
        return angular.merge({
            name: this.stateName
        }, custom);
    }
}
