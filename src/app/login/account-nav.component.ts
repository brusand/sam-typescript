import {AuthService} from '../core/auth.service';
import {LOG_IN_EVENT} from '../live-objects/auth.service';
import {LOG_OUT_EVENT} from '../live-objects/auth.service';
import {LOCALE} from '../core/locale.constant';

const ACCOUNT_NAV_TPL = require('./account-nav.component.tpl.html');

export function AccountNavComponent(): ng.IDirective {
  return {
    template: ACCOUNT_NAV_TPL,
    scope: {},
    bindToController: {},
    controllerAs: 'accountNav',
    controller: AccountNavController
  };
}

class AccountNavController {

  private username: string;
  private loggedIn: boolean;
  private locale: any;

  /* @ngInject */
  constructor($scope: ng.IScope, $translate: ng.translate.ITranslateService, private auth: AuthService) {
    this.loggedIn = auth.isLoggedIn();
    this.locale = this.buildLocales($translate);

    if (auth.isLoggedIn()) {
      this.username = auth.user().email;
    }

    $scope.$on(LOG_IN_EVENT, () => {
      this.loggedIn = true;
      this.username = auth.user().email;
    });
    $scope.$on(LOG_OUT_EVENT, () => this.loggedIn = false);
  }

  public logOut() {
    this.auth.logOut();
  }


  private buildLocales($translate: ng.translate.ITranslateService) {
    let availables: any = _.values(LOCALE).map(this.localeKeyToObject);
    return {
      current: _.find(availables, (locale: any) => locale.key === $translate.use()),
      availables: availables
    };
  }

  private localeKeyToObject(key: string) {
    return {
      key: key,
      labelId: `lora.global.locale.${key}`
    };
  }

}
