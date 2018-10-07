import { $, ElementFinder } from "protractor";
import { browser, protractor } from "protractor";
import { ryanAir } from "../ryanAirPage";
import { SearchPageObject } from "../searchPage";
const ryanAirHome: ryanAir = new ryanAir();

export class ryanAirPageFunctions{

    public async  login(username:string,password:string) {
        
        var EC = protractor.ExpectedConditions;
       // await browser.wait(EC.visibilityOf(ryanAirHome.signILink), 5000);
        await ryanAirHome.signILink.click();
        await ryanAirHome.username.sendKeys(username);
        await ryanAirHome.password.sendKeys(password);
        await ryanAirHome.submit.click();
        }
    }
