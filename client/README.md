# Client

## Documentation

* This is a React app that was bootstrapped using `create-react-app`.

* The pages use the Presentational and Container Component pattern to separate logic from view code. Views can be tested independently from the container components.

* Redux is used for global state management. Thunk is used for allowing for asyncronous functionality inside the Redux actions.

* The pages go in the `/src/pages` folder. The reusable components go in the `/src/components` folder.

* Unit tests sit next to the files that they test. An alternative would be to move them all into a `__tests__` folder in case we plan on adding something like SonarQube which wants to know where the one "tests" folder is located.

* Styling is done using CSS. Alternatives could include Sass or a CSS-in-JS solution like EmotionJS.

* JavaScript is the primary language. Alternatively we could introduce static typing to help reduce bugs by switching to TypeScript or adding support for Flow.

## Running locally

### Prerequisites
1. Install Node 14.x - https://nodejs.org

### Running localhost dev server
1. npm install
1. npm start


## Running unit tests
1. npm test

## Shortcuts taken
1. Did not set up eslint.
1. Did not specify PropTypes. Could specify the PropTypes or switch to TypeScript and use IProps interfaces.
1. Did not introduce Code Splitting. Could add code splitting based on project size and goals.
1. Used very basic CSS. Could add something like Bootstrap or invent own styles or component library based on project needs.
1. Did not use responsive CSS. Could add media queries to make the CSS responsive.
1. The New Account page and the Disqualification page can be accessed by browsing straight to the `/newaccount` or `/disqualification` path. Should block those so users can't go straight to them without filling out the form on the landing page.
1. Not displaying UI feedback if AJAX calls fail.
1. Data being passed around is not typed. Could use JSDocs, TypeScript or Flow to define types to help reduce bugs.
1. Did not standardize on semicolons. Should decide whether or not to require semicolons, and set up that rule in a linter.
1. More tests should be added for the doesApplicationQualify function to cover more edge cases
1. Currency fields use input type of number and do not show a dollar sign. Could make it more user-friendly by applying an input mask solution to add the $ symbold and commas to the input fields.
1. Minimal unit testing on forms. Should add tests for different field validation states.
1. The password validation regex checks for a minimum of 8 characters including a number, but doesn't account for the "or a special character" requirement. Should be updated to meet actual requirements.