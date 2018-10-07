import { $, ElementFinder } from "protractor";
import { browser, protractor } from "protractor";
export class Utils{
    
      async  ClickElement(element:ElementFinder){
        //ryanAirHome.signILink.click();
        await element.getWebElement().click();
    }

     async  ClearAndEnterText(element:ElementFinder,text:string){
       await element.getWebElement().clear();
       await element.getWebElement().sendKeys(text);
    }
}