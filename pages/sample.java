

Webdriver driver = new FirefoxDriver();
driver.timeouts().waitforpagelog(100);

driver.get("url");
WebElement username=driver.findElement(By.xpath("xpath"));

Webdriverwait wait= new Webdriverwait(driver,timeouts.seconds,30);
wait.ExpectedCondition(ElementToBeDisplayed(username));

int try--=5;
while(try>0){
try{
    driver.findElement(By.xpath("xpath"));
}
catch(ElementNotDisplayed e){
    
    Thread.sleep(2000);

}
}
APache POI
//what
//description
//author

public void write()
XSSWorkbook wrkbook =new XSSWorkbook(D:myexcel);
XSSWorksheet sheet=wrkbook.getSheet(1);

int i=sheet.getRows();
foreach(Row r in sheet.getRows())
{
    sysout(r.getcell(0));
    r.cell(0)="";
}

sheet.comit();FirefoxDriver

