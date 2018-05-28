# Journey architecture details

## [Inventory of React JS Components](/src/components/)

**Components**

- Global (Grid, Typography, Spinner, Animations, zIndex, Shadow, Colors)
- Buttons
- Inputs
- Icons
- Checkboxes
- Radios
- Select
- Forms
- Alerts
- Logos

- Dropdown
- Toggle
- Callout
- Timeline
- CreditCard
- User

**Views**

- CheckoutConfirm
- CheckoutEmail
- Empty
- Loading

<!-- ## Inventory of Redux containers

Users
JourneyPlanner
Checkout



## Structure of the Redux store

The client side routes are managed by Redux-router. The application state and logic are contained in Redux reducers.

Dealing with the API is complicated at some point,

import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

In the meantime we can add here a system for dealing with errors / debug `sentry-redux-middleware`



## Management of stylesheets and views

Visual primitives with `styled-components`

Styleguidist

`npx styleguidist server` to start a style guide dev server.






## Automated tests strategy (libraries, coverage)
**Testing**
We’re using Jest with Enzyme for testing.
[https://react-styleguidist.js.org/docs/development.html#testing]


**Bug reporting**
[https://blog.sentry.io/2016/08/24/redux-middleware-error-logging]


**Code Style**
We run `Prettier` on-commit, which means you can write code in whatever style you want and it will be automatically formatted according to the common style when you run git commit. We also have ESLint setup, although we've disabled all stylistic rules since Prettier takes care of those.

_Rules_

- No `console.logs` in any file: We use the debug module across the codebase to log debugging information in development only. Never commit a file that contains a `console.log` as CI will fail your build. The only exceptions are errors, which you can log, but you have to use `console.error` to be explicit about it
- We have a precommit-hook with [lint-staged]



**Ressources**
[https://blog.lingoapp.com/getting-the-most-out-of-redux-sentry-ecd8c737410d]
[https://engineering.thetrainline.com/handling-api-calls-in-redux-with-redux-api-middleware-c95c38816e13]
[https://my.mindnode.com/xQZyD9Qq8SG1zEpsc1SviR3cjpyUSfvEzLBxApqT]


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
 -->
