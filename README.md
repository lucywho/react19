# About this repo

This is a test app that I am using to explore new features in React 19

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It uses the [Faker library](https://fakerjs.dev/api/commerce.html#product) to generate a list of products for a mock API call.

It is based on the [What's new in React 19](https://www.youtube.com/watch?v=81uAxzeyL2I) by [Bob Ziroll](https://bsky.app/profile/bobziroll.bsky.social) on the [Free Code Camp YouTube Channel](https://www.youtube.com/@freecodecamp); I have used TypeScript and rolled all the tutorials into a single app.

## Features

### App

- `App.tsx` renders a nav bar and content
- the `useTransition()` hook manages the `isPending` boolean state automatically when the `switchTab`function starts and completes
- `setFocus`is outside the transition and so focus switches as soon as the user clicks a button; `setTab` is inside the transition and so is interruptable - the user can switch away from the page before it completes loading

### Homepage

- Basic component rendering a paragraph
- includes a <title> tag in the component which React 19 hoists into the head
- note: <title> removed from the `index.html` file to prevent the app having two titles in the head.

### Products

- Displays a list of products called from an API
- `data.ts` generates the list of products using the [Faker library](https://fakerjs.dev/)
- `sleep.ts` function generates a delay to mock a slow response
- Demonstrates the use of the `useTransition()` hook - the content loads slowly but the user is not stuck on the page until it completes.
- includes <meta> tag in `return` block - React 19 hoists this to the head.

### About You

- A simple form that updates a user name displayed on the screen
- The `updateName` function calls the mock database in `api.ts`, which includes a timeout to mock a slow dB response.
- `useActionState()` allows us to call an action function directly from the form instead of using `onSubmit` The submit button sends the form data to the handler function without needing to track inputs in state.
- `useOptimistic()` hook allows the name to update on screen as soon as the user submits, rather than waiting for the dB to respond. If the update fails, the on screen name reverts to the last state and an error message displays. Type `error` into either input box to generate a failed update.

### Submit Button

- Uses the `useFormStatus()` hook to access the state of the form and conditionally render text depending on the `pending` value.

### Pokemon

- Simply calls the [Pokemon Api](https://pokeapi.co/api/v2/pokemon/1) and displays the json on screen
- Uses the `use()` api to replace the `useEffect()` hook in calling async resources. It is no longer necessary to save the response in state: the `url`variable is held in state for the toggle button, but `pokemon` is not.
- `use()` also automaticalls suspends the component (the `Suspense` boundary and fallback are set in App.tsx for this component)
- note that the promise currently needs to be cached in React, otherwise it will create a new Promise everytime the component rerenders: [use does not support promises created in render](https://react.dev/blog/2024/12/05/react-19#new-feature-use).

# Running the App locally

Clone the app using `git clone https://github.com/lucywho/react19.git` or `gh repo clone lucywho/react19` if you use the GitHub CLI.

Install the Faker library: `npm install @faker-js/faker --save-dev`

There are no environment variables.

To run use `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
