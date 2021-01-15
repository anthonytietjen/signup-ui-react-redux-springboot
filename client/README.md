# Client

## Description

The client is a React app using `create-react-app`.

The pages and components use the Presentational and Container Component pattern to separate logic from view code.

## Shortcuts taken
1. Did not set up eslint.
1. Using JavaScript. Could switch to TypeScript or Flow based on project goals.
1. Not using PropTypes. Could specify the PropTypes or switch to TypeScript and use IProps interfaces.
1. Using CSS. Could use Sass or a CSS-in-JS solution based on the project goals.
1. Not using Code Splitting. Could add code splitting based on project size and goals.
1. Very basic CSS used. Could add something like Bootstrap, invent own styles, etc, based on project needs.
1. Not using responsive CSS. Could add media queries to make the CSS responsive.
1. The New Account page can be accessed by browsing straight to the path. Should block that so users can't go straight to it without filling out the form on the landing page.
1. Not displaying error if ajax fails. Should show some UI feedback when ajax calls fail.
1. Data being passed around is not typed. Should use JSDocs, TypeScript or Flow to define types.
1. Did not standardize on semicolons. Should decide whether to use semicolons or not, and set it up in the linter.
1. Unit tests sit next to the file they test. Should decide whether to group them in dedicated folder, especially if something like SonarQube will be used.
1. More tests should be added for the doesApplicationQualify function to cover more edge cases

## Running locally

### Prerequisites
1. Install Node 14.x - https://nodejs.org

### Running localhost dev server
1. cd ./client
1. npm install
1. npm start