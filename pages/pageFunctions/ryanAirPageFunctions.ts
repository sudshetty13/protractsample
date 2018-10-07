import { $, ElementFinder } from "protractor";
import { browser, protractor } from "protractor";
import { Utils } from "../../support/utils";

import { ryanAir } from "../ryanAirPage";
import { SearchPageObject } from "../searchPage";
const ryanAirHome: ryanAir = new ryanAir();
const utils: Utils = new Utils();

export class ryanAirPageFunctions{

    public async  login(username:string,password:string) {
        
        var EC = protractor.ExpectedConditions;
       // await browser.wait(EC.visibilityOf(ryanAirHome.signILink), 5000);
        await utils.ClickElement(ryanAirHome.signILink);
        await utils.ClearAndEnterText(ryanAirHome.username,username);
        await utils.ClearAndEnterText(ryanAirHome.password,password);
        await utils.ClickElement(ryanAirHome.submit);
        }
    }
