const assert  = require('assert');
const {Given, When, Then} = require("cucumber");
let app = require('../../../src/app')

Given('today is {string}', function (givenDay) {
 this.today = givenDay;
});

When('I ask whether today is Friday yet', function () {
 // Write code here that turns the phrase above into concrete actions
 this.actualAnswer = app.isItFriday(this.today)
});

Then('I should be told {string}', function (expectedAnswer) {
 assert.equal(this.actualAnswer, expectedAnswer);
});
