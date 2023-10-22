# Amazon
******** DESCRIPTION **********
- Another cypress project, where I have run a quick cypress automation test on an Amazon search. It is a failing test (on purpose), if run in a headless mode (cypress run), it uses mochawesome reporter to generate an html file report. 
- This test searches for a specific item, prints out its review rating, the price and the item that customers often buy it with.
- I have used a couple of Custom Commands but nothing too fancy :D 

NOTE: I used 'Cypress Testing Library' commands to interact with the UI (well, I tried as much as was possible) because I think this is the closest we can get automation tests to interact with UI as real users would. But the deeper I got into the Amazon app less Accessible it became, in some areas the DOM consisted of mainly generic div blocks with only classes, so you might see some DOM traversing and/or using classes as locators which I only use as the last option.

******** HOW TO ***********


1. To run this test do *yarn cypress run* in the terminal. This will execute the test and before the test fails you will see the printed price, rating and title of another album:


<img width="1427" alt="terminal" src="https://github.com/komil-dotcom/Amazon/assets/83310602/0ca740a2-3a3a-4154-b279-1664ff5c047c">

--

2. After the test is complete, you will notice a new directory appear in the project called 'reports', inside this direcotry will be an html file, which if opened in the browser will display the test results as well as a screenshot: 

<img width="1412" alt="reprter" src="https://github.com/komil-dotcom/Amazon/assets/83310602/1de9ee9d-1acd-45e1-bad1-5edc518917de">
-
-
<img width="1401" alt="reporterScreenshots" src="https://github.com/komil-dotcom/Amazon/assets/83310602/75da3984-b13c-4c5e-9eb8-9ada9ddc3e92">


