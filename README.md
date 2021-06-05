# Altitude Apparel
Welcome to Altitude Apparel’s retail portal! Thank you for taking an interest in our code. Altitude Apparel is a Javascript library used to market & sell our apparel. Peruse the below topics to aid you in getting started working with this repo.
***

## Using this Repo
You will find inside a breakdown of how we organized, created, and designed each feature on our retail portal. Our folders are a good startingpoint to gain clarity into the organization and structure of our app. Withinthese folders is where you will find the code and styling related to the individual components and the features of these components.

## Getting a Copy of this Repo
If you haven’t already, please fork the repository on GitHub and clone your newly created repo down to your computer (then comes the fun part– exploring & learning!

## Installation
Use the package manager npm to install all necessary dev dependencies for our repo – run the following terminal command: `npm install`
To make development easier we’ve added nodemon as an npm start script. To automatically restart the node application when file changes in the directory are detected, run the following terminal command:`npm run react-dev`.

## API Configuration
Update `config.example.js` to be `config.js` and add your API Key to `module.exports`.

## ES2015+ support
Spectator supports ES2015+ by transpiling files withBabel. Any JavaScript feature included in thelatest presetcan be used in this repo. The tradeoff for this support is that error messages can sometimes be a bit more obscure and/or line numbers in the stack trace don't map precisely to their original line numbers.If this is not an acceptable tradeoff, you can write only ES5 code create a`spectator.json`file in the root of the problem directory that looks like this:
```
{
	"babel": false
}
```

## Testing
To run the testing files, run the following terminal command:`npm run test`

## Authors
- Caleb Bratton
- David Harbin
- Mikka Tully


# Testing info:

- [React/Jest Testing](https://www.robinwieruch.de/react-testing-jest)
- [Jest Docs](https://jestjs.io/docs/getting-started)
- [React Testing Docs](https://testing-library.com/docs/react-testing-library/api/)
- [Quick Tutorial:](https://www.youtube.com/watch?v=3e1GHCA3GP0)
