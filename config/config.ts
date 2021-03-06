import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: "https://www.ryanair.com/ie/en/",

    // capabilities: {
    //     browserName: "chrome",
    //     maxInstances: 5,
        
    // },

    multiCapabilities: [
        {
            shardTestFiles: true,
            maxInstances: 1,
            sequential: true,
            browserName: 'chrome',
            specs: ['"../../features/flight.feature"']
        },
        {
            shardTestFiles: true,
            maxInstances: 1,
            sequential: true,
            browserName: 'chrome',
            specs: ['"../../features/flightx.feature"',
            ]
        },
    ],
    
    maxSessions:5,
    directConnect: true,

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    // specs: [
    //     "../../features/flight.feature",
    // ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../typeScript/stepdefinitions/*.js", "../../typeScript/support/*.js"],
        strict: true,
        tags: "@CucumberScenario or @ProtractorScenario or @TypeScriptScenario or @OutlineScenario",
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    },
};
