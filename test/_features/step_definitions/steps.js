const { Given, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const mock = require('mock-fs');
const World = require('../test.setup.js');

const localEnv = "http://localhost:3000";

Given('I start the at the {string} application page', async function (url) {
    await this.page.goto(`http://localhost:3000/${url}`);
  }.bind(World));

  Then('I should be on the {string} page showing {string}', async function (url, heading) {
    await this.page.waitForSelector('body', { timeout: 15000 });
    expect(new URL(await this.page.url()).pathname).to.eql(`/${url}`);
    expect(await this.page.innerText('body')).to.include(heading);
  }.bind(World));

  Then('I choose {string}', async function (name) {
    await this.page.click(`text=${name}`);
  }.bind(World));