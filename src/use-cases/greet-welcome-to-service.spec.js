const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const makeGreetWelcomeToService = require('./greet-welcome-to-service');

this.serviceName = null;

Given('I have a service name', () => {
  this.serviceName = 'Admin User Authentication REST Application';
});
When('I called the function makeGreetWelcomeToApp', async () => {
  const greetWelcomeToService = makeGreetWelcomeToService();
  this.result = greetWelcomeToService(this.serviceName);
});
Then('It should return with greeting message', () => {
  assert.strictEqual(this.result, `Welcome to ${this.serviceName} service`);
});
