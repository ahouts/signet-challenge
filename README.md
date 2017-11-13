# SignetChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

There would normally be tests, but I had to learn angular for this project which has taken a good part of my weekend.

## basic setup
```bash
npm install
# edit private schedule_data_url = 'https://scb.ahouts.com'; 
# to whatever backend you want, eg: 'http://localhost:8000'
vi src/app/schedule-data.service.ts
ng serve
```
It should say "Welcome to the Executive Briefing Center" since the schedule data is all out of date
You could modify the schedule data to have current times and restart the backend if you want to see it in action.
You could also modify your system time but I wouldn't recommend that.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
