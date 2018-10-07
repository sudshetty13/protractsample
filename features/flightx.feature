Feature: To login to RyanAir

 @TypeScriptScenario
Scenario Outline: Login using email and passwords
Given Open RyanAir
When I submit "<username>" and "<password>"
Then I should be logged in

Examples:
    | username | password | 
    |  testkiprosh@gmail.com   | Testpassword123 |