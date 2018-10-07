import { $, ElementFinder, element, by } from "protractor";

export class ryanAir{
    public signILink: ElementFinder;
    public username: ElementFinder;
    public password: ElementFinder;
    public submit: ElementFinder;

    constructor() {

        this.signILink = element(by.xpath("//li[@id='myryanair-auth-login']/a/span"));
        this.username = element(by.xpath("//div[@class='dialog-body']//input[@name='emailAddress']"));
        this.password = element(by.xpath("//div[@class='dialog-body']//input[@name='password']"));
        this.submit = element(by.xpath("//button[@class='core-btn-primary']"));
    }
}