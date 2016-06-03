import { inject } from 'aurelia-framework';
import { Endpoint, Rest} from 'aurelia-api';

@inject(Endpoint.of('github'))
export class Users {
  heading       : string = 'Github Users';
  users         : Object = {};
  githubEndpoint: Rest   = null;

  constructor(private endpoint: Rest) {
    this.githubEndpoint = endpoint;
  }

  activate() {
    return this.githubEndpoint.find('users')
      .then(users => this.users = users);
  }
}
