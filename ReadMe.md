# Donut Maker
## The Scenario - Welcome to Fred the Baker Baking Company!
You have been contracted by Fred the Baker Baking Company to take a concept, Donut Maker Clicker, from the drawing board to the browser. Fred the Baker is tired of making real donuts and is ready to retire. He needs our help to keep his love of donuts alive. He wants you to create a game that uses button clicks to create virtual donuts for the world to enjoy. But all those early mornings of donut making may have tired out his brain because he has some strange requirements for 'Auto Clickers' and 'Donut Multipliers'. Unfortunately, it's always "Time to make the Donuts" and Fred is too busy to give us guidance on how to implement these requirements.

## The Application Requirements
You must create a website that uses button clicks to create donuts. The donuts can be used as currency to buy Auto Clickers and Donut Multipliers, which will be used to make even more donuts!

## Terminology
**Donut Count**
The number of Donuts you have created by clicking, either manually or with an Auto Clicker.

**Auto Clicker**
Auto Clickers will automatically click for us every second, so we don't have to click manually.

**Auto Clicker Count**
The number of Auto Clickers purchased. Auto Clickers apply one click per second for every Auto Clicker purchased.

| Number of Auto Clickers Purchased |	Clicks applied per second |
|----|----|
|1|	1|
|2|	2|
|3|	3|

...you get the picture

**Auto Clicker Cost**
The number of donuts required to purchase an Auto Clicker. Starting cost is 100 donuts. For each Auto Clicker purchased, the cost of the next Auto Clicker increases by 10%.

| Number of Auto Clickers Purchased |	Cost to buy next Auto Clicker |
|----|----|
|0|	100|
|1|	110|
|2|	121|
|3| 133|

... you get the picture

**Donut Multiplier**
Donut Multipliers increase the number of Donuts made for each click.

**Donut Multiplier Count**
The amount of Donut Multipliers purchased. Donut Multipliers increase the value of a click by 20% for each Donut Multiplier purchased. Donut Multipliers increase the value of both manual and Auto Clicks.

| Number of Donut Multipliers Purchased |	Donuts Earned per Click |
|----|----|
|0|	1|
|1|	1.2|
|2|	1.44|
|3| 1.728|

... you get the picture

NOTE: The number of Donuts earned per click can be calculated with the following equation: 1.2 to the xth power, where x is the number of Donut Multipliers
or written in JS syntax as ``` Math.pow(1.2, DonutMultiplierCount) ```

**Donut Multiplier Cost**
The number of donuts required to purchase a Donut Multiplier. Starting value is 10 donuts. For each Donut Multiplier purchased, the cost of the next Donut Multiplier increases by 10%.

| Number of Donut Multipliers Purchased |	Cost to buy next Donut Multiplier |
|----|----|
|0|	100|
|1|	110|
|2|	121|
|3| 133|

... you get the picture

## Index.Html Setup
Create a Header section
- Contains a navigation menu that when clicked will expand sections about:
   - Fred the Baker Baking Company
   - The inspiration for this game, Cookie Clicker
   - Your contact info
Create a Main section that contains:
- A section that handles a click
   - Contains a button that can be clicked to make donuts.
   - Displays the amount of Donuts made.
- A section that interacts with the AutoClicker
   - Displays the amount of Auto Clickers purchased.
   - Provides a button to purchase Auto Clickers.
   - Button is disabled when you do not have enough Donuts to buy an Auto Clicker.
- A section that interacts with the ClickMultiplier
   - Displays the amount of Donut Multipliers purchased.
   - Provides a button to purchase Donut Multiplier.
   - Button is disabled when you do not have enough Donuts to buy a Donut Multiplier.

## Donut Maker Functions
Create functions in your DonutMaker class that perform the following actions:

- Adds a donut to the Donut Count for every button click
- Returns the Donut Count
- Purchases Auto Clickers with donuts
- Checks whether you have enough donuts to purchase an Auto Clicker
- Increases the count of Auto Clickers with each purchase of an Auto Clicker
- Increases Auto Clicker cost with each purchase of an Auto Clicker
- Activates the Auto Clicker by applying clicks every second based on the Auto Clicker count
- Purchases Donut Multipliers with donuts
- Checks whether you have enough donuts to purchase a Donut Multiplier
- Increases Donut Multiplier cost with each purchase of a Donut Multiplier
- Increases the count of Donut Multipliers with each purchase of an Donut Multiplier
- Calculates the number of donuts earned with each click based on the count of Donut Multipliers
- Resets the game state. This action should reset the game to zero donuts, zero Auto Clickers, and zero Donut Multipliers.

## Additional Requirements
Use semantic html and BEM when writing your html so that in the future we have a solid base to expand upon.
Donuts are usually round, but the way in which you round your donut calculations is up to you!

## Iterations
Whew...I need a donut after all that information! Don't worry, we are going to break it all down into iterations and features and tackle them one by one. After all, how do you eat an entire box of donuts? One donut at a time, of course.

Each iteration will focus on building out a part of the game. The first iterations will focus on the logic that is needed to have a game. The latter will take us into linking the JavaScript into our website.

### Iteration 1
This iteration covers project setup and starting the creation of the game. Our first iterations are going to focus on the logic that is needed to have a game. The JavaScript for this iteration will be solely in a DonutMaker.js file and not pertain to the html page. We need to code some behavior before we can code the way the user interacts with the project.

**FEATURE 1 : Have a way to count donuts.**
> As a user, I want to know how many donuts I have created, so that I know what my score is.

- Can add to donut count.
- Can retrieve a donut count.

**FEATURE 2 : Be able to purchase the first Auto Clicker with 100 donuts from your donut count.**
> As a user, I want to be able to purchase Auto Clickers, so that I don't have to keep clicking a button all day.

- Can retrieve an Auto Clicker count.
- Can add to the Auto Clicker count.
- Subtract the Auto Clicker cost from your donut count.

**FEATURE 3 : The cost of each Auto Clicker will go up with each purchase.**
 > As a game designer, I want the game to become more difficult as the game progresses, so that users will continue to play the game.
- Increase the cost of the second Auto Clicker by an additional ten percent.
- Increase the cost of every additional Auto Clicker by an additional ten percent.

**FEATURE 4 : Ensure that there are enough clicks to buy a Auto Clicker.**
> As the game designer, I want to ensure that players have to put the game into a proper state to be able to purchase a Auto Clicker, so that the game has a challenge.
- Prevent the Auto Clicker count from going up if there are not enough clicks to purchase a Auto Clicker.

**FEATURE 5 : The amount of Auto Clickers affect the amount of donuts added when an 'Activate Auto Clickers' event is called.**
> As a user, I want to be able to purchase Auto Clickers, so that I don't have to keep clicking a button all day.
- When the 'activate Auto Clickers' event is executed, increase the donut total by the amount of Auto Clickers owned.

### Iteration 2
This iteration covers the creation of the Donut Multipliers. The higher your Donut Multipliers count, the more donuts you earn with each click.

**FEATURE 1 : Be able to purchase the first Donut Multiplier with 10 clicks from your click count.**
> As a user, I want to make my clicks more powerful, so that I can make the work to get more Auto Clickers easier.
- Can retrieve a Donut Multiplier count.
- Can add to the Donut Multiplier count.
- Subtract the amount of the Donut Multiplier cost from the donut count.

**FEATURE 2 : The cost of each Donut Multiplier will go up with each purchase.**
> As a game designer, I want the game to become more difficult as the game progresses, so that users will continue to play the game.
- Increase the cost of the second Donut Multiplier by an additional ten percent.
- Increase the cost of every additional Donut Multiplier by an additional ten percent.

**FEATURE 3 : Ensure that there are enough donuts to buy a Donut Multiplier.**
> As the game designer, I want to ensure that players have to put the game into a proper state to be able to purchase a Donut Multiplier, so that the game has a challenge.
- Prevent the Donut Multiplier count from going up if there are not enough donuts to purchase a Donut Multiplier.

**FEATURE 4 : The first Donut Multiplier should increase the value of a click 1.2x.**
> As a user, I want to make my clicks more powerful, so that I can make the work to get more Auto Clickers easier.
- Increase the amount of donuts added to the donut count by multiplying by 1.2 after the first Donut Multiplier is purchased.

**FEATURE 5 : The amount the subsequent Donut Multipliers click bonus will go up exponentially.**
> As a CEO, I want my players hard earned Donut Multipliers to make a big impact, so that they keep playing the game.
- Increase the click value multiplier to 1.2 to the xth power, where _x_ is the amount of the Donut Multipliers count.

**FEATURE 6 : The Donut Multipliers click bonus will apply to clicks from the Auto Clicker.**
> As a user, I want to see my click investments work together to get me more donuts, so that I can have all the donuts.
- When an 'Add Auto Clickers' event is executed, increase the value of each Auto Clicker by the amount of the Donut Multiplier.

### Iteration 3
This iteration will prepare the html document for the game. Open the index.html file and start adding the elements you'll need. Maintain the structure of the HTML with semantic html elements and use BEM to give useful class attribute names to your elements. Use a combination of HTML, CSS, and JavaScript to achieve the trickier features below.

**FEATURE 1 : Create a button to click.**
> It's Time! As a player, I want to have a button to click, so that I can start making donuts.
- In the main section of the page, create a button element.
- Label the button clearly as the button that needs to be clicked.

**FEATURE 2 : Create a click count element.**
> As a player, I want to know how many donuts I have, so that I can track my progress.
- Create an element that will provide the user with the donut count.

**FEATURE 3 : Create a section for the Auto Clickers**
> As a user, I want to be able to buy and see how many Auto Clickers I have, so that I don't have to keep clicking all the time.
- Create an section of elements that include a purchase button and a count of Auto Clickers.

**FEATURE 4 : Create a section for the Donut Multipliers**
> As a user, I want to be able to buy and see how many Donut Multipliers I have, so that my clicks can become super powered.
- Create an section of elements that include a purchase button and a count of Donut Multipliers.

**FEATURE 5 : Create a header with a link to a drop down element with information about the Company.**
> As the marketing director, I want the customers to be able to find out more information about Fred the Baker Baking Company, so that they will buy more stuff from us.
- Create a header and add a link that will make company info pop up for the user.

**FEATURE 6 : Create a header with a link to the Inspiration of our game.**
> As the game designer, I want to give gamers a reference to our inspiration, the original Cookie Clicker game, so that the legal department will stop complaining that we stole the idea.
- Create another link that will open a new tab with Cookie Clicker's address.

**FEATURE 7 : Create a header with a link to a drop down element with information about the Developer.**
> As the developer, I want credit for writing this application, so that I can get a job.
- Create a modal element that is centered over the application and has a quick bio link about yourself and links to your portfolio and GitHub.com account.

### Iteration 4
This iteration will wire up your DonutMaker.js file to the index.html file and use the app.js file to link the two.

**FEATURE 1 : When you click the clicker button the Donut counter should change.**
> As a user, I want to see my Donut count go up when I click the clicker button, so that I can be rewarded for my hard work.
- When the clicker button is pressed the Donut count element should change value.

**FEATURE 2 : The Auto Clickers and Donut Multipliers purchase button should be grayed out and unresponsive if there are not enough donuts to buy the next item.**
 > As a game designer, I want the user to have a visual clue that they cannot perform a game action, so that the user isn't frustrated by clicking buttons that can not do anything.
- When the donut count is below the cost of a purchasable item, grey out or change the appearance of the button.
- Clicking the button when an item cannot be purchased should not perform any action.

**FEATURE 3 : The Auto Clicker count and the Donut Multipliers count should be displayed.**
> As a user, I want to know how many Auto Clickers and Donut Multipliers I have, so that I can brag to my friends.
- The amount of items purchased should be displayed in the same area as the button to purchase them.
- The amount of items purchased should be updated after each purchase.

**FEATURE 4 : The clicker button should display the current value of each click.**
> As a user, I want to know how many donuts each click on the clicker button is worth, so that I can see the effect of the Donut Multipliers on my clicking.
- Display the Donut Multiplier value in the clicker button text or in an element somewhere close to the clicker button.

**FEATURE 5 : The Auto Clickers and Donut Multipliers price in clicks should be displayed.**
> As a user, I want to know how many clicks I have to click before I can purchase an Auto Clicker or Donut Multiplier, so that I know when I get to stop clicking.
- Display the cost of the Auto Clickers and Donut Multipliers in their purchase button or in an element nearby.
- Update the costs whenever the price is changed.

### Iteration 5
This iteration is for you to complete final project requirements.

**FEATURE 1 : Implement a way to reset the game.**
> As a user, I want to be able to reset my game, so that my coworkers won't know how much time I wasted on clicking a button.
- Have a way to stay on the same page, but reset the state of the game.

## Stretch Features
This iteration is for you to individualize your project. Use JavaScript to change to how your elements are displayed, add new features, document and make changes to the above rules, or make elements move across the screen.

**STRETCH FEATURE 0: Balance The Game**
> As a game designer, I want the game to be fun to play. That is, I don't want it to be too eary to earn obscene amounts of donuts. Additionally, I might want a challenge to overcome.
- Tweak the costs and multipliers (can we generalize these to make them more editable?)

**STRETCH FEATURE 1: Click Storm!**
> As a game designer, I want to have a random element that creates starts a Click Storm, so that users will be engaged in the page.
- On random intervals have a button pop up and when clicked it starts an event where random buttons worth 10 - 100 clicks appear on the screen and fade away after a few seconds.
- This event should end after a minute, maybe provide a timer.

**STRETCH FEATURE 2: Purchasable background colors/images.**
- Be able to change the appearance of the page, at a cost.

**STRETCH FEATURE 3 : Add sound.**
- Put on a set of headphones and add some sound to the clicks and click count milestones.

**STRETCH FEATURE 4 : Adapt the requirements.**
- Document the changes to the requirements you want to do and try to bring a better balance to the game.
