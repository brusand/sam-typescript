import {AuthService} from '../core/auth.service';

const LOGIN_PANEL_TPL = require('./login-panel.component.tpl.html');

export function LoginPanelComponent(): ng.IDirective {
  return {
    template: LOGIN_PANEL_TPL,
    scope: {},
    bindToController: {},
    controllerAs: 'loginPanel',
    controller: LoginPanelController
  };
}

class LoginPanelController {

  public loading: boolean = false;
  public serverError = false;

  /* @ngInject */
  constructor(private auth: AuthService) {}

  public logIn(email: string, password: string) {
    this.loading = true;
    this.serverError = false;
    this.auth.logIn(email, password)
      .catch(() => {
        this.serverError = true;
        this.loading = false;
      });
  }
}
