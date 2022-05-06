## Getting a quick Back Office with Trello as a Back End
Start cloning the project and run `npm install`;
The `axios` and `react-router-dom` package are already there

## Let's start: Get your trello ready
- 1 Open a trello account if needed
- 2 Create a board with at least 2 Columns and 2 or 3 cards on each of them (Here is the public board I used to create this workshop. Have a look if you want https://trello.com/b/TXsA6WS9/dynamic-component)
- 3 Complete cards with *Stamp*, *Title*, *Description*....
- 4 Make your board Public available (On the top left, click on private and change the status)Now you can have all your board info on a json file, just adding  `.json` at the end of the URl.

## Prepare your app
- 1 Use UseEffect and a State to fetch `https://trello.com/b/<TrelloKey>/<Board_name>.json`. For the purpose of this exercice, you will just need the *cards* items (An array of data with all your cards).
- 2 `console.log()` the result and watch how you can pass it to subComponent via `props`.
- 3 Create the subComponent and display your page with style using props directly from you data. Explore possibilities to display image, title, description...


## Upgrade your app for more reactivity
- 1 Now, under your last component on the return you will `.fitler()` on the data to keep only the cards of your actual list (With its id or name)
- 2 Then `.map()` on the data and call a `getComponent` function. This one, will return the component needed based on the *data.labels[0].name*. Great !!!
- 3 Don't forget to pass your data as props.
- 4 Go back on Trello and add a card with an existing labels... Refresh your app. You should see the new brand component. You can now manage your page.
- 5 You can now delete the old component on your `return`

## Going further...
- 1 Add a routing system on *App.jsx* and copy/paste your code on a *Home.jsx* page
- 2 On the only route we have, use `/:page` on your path
- 3 On the *Home.jsx* file, use UseParams to store the `page` param.
- 4 On trello, create a new list, with a couple of cards with existing labels and get its id (*As shown before*)
- 5 On the *Home.jsx*, add a mapping variable between the name of a page and its trello ID

*Example const page = { "home": <IdList>, "products": <IdList>}*
- 6 Change your Url to pass from one page to another... See

## As a bonus
- 1 Add a navigation on top and several other lists on trello
- 2 Add an Error page (404)

Congratulations, you have now a full fonctionnal app with a trello Back Office... You can create as many component as you want and match them to stamp on trello. You can add lists as well and map them on your variable.


