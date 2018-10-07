import { browser, protractor } from "protractor";
import { ryanAirPageFunctions } from "../pages/pageFunctions/ryanAirPageFunctions";

import { ryanAir } from "../pages/ryanAirPage";
import { Reporter } from "../support/reporter";
const { Given,When,Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const ryanair: ryanAirPageFunctions = new ryanAirPageFunctions();

const ryanairpg: ryanAir = new ryanAir();

Given(/^Open RyanAir$/, {timeout: 100 * 1000}, async () => {
    
    await expect(browser.getTitle()).to.eventually.contains("Ryanair");
});

When(/^I submit "(.*?)" and "(.*?)"$/,{timeout: 200*1000},async function(username:string,password:string){
    //browser.sleep(3000);
    await ryanair.login(username,password);
});

Then(/^I should be logged in$/, {timeout: 100 * 1000},async () =>  {
    console.info("This is test");
})