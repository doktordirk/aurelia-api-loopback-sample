import { inject } from 'aurelia-framework';
import { Endpoint} from 'spoonx/aurelia-api';

@inject(Endpoint.of('github'))
export class Users {
  heading = 'Github Users';
  model = 'users';
  users = [];

  constructor(endpoint) {
    this.githubEndpoint = endpoint;
  }

  activate() {
    return this.githubEndpoint.find(this.model)
      .then(users => this.users = users);
  }
}
