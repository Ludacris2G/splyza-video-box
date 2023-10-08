# SplyzaVideoBox

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.5.

## Prerequisites

Make sure you have the following tools installed:

- Node.js
- Angular CLI

## Installation

Clone the repository and install project dependencies:

```
git clone <repository-url>
cd splyza-video-box
npm install
```

Clone the backend API app.

`git clone https://github.com/splyza/video-box-server.git`

`npm install`

`npm run start`

By default it runs on `localhost:3000`

If the localhost path is different than `localhost:3000` please update the `environment.ts` file with the actual path. The app won't work otherwise.

Once the server is up and running use `ng serve` to start the client app. If the environment.ts is running on localhost:3000 or is properly set to the path you may be using, the app should work flawlessly.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
