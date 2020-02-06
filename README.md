[![Build Status](https://travis-ci.org/LABS-EU3/hackton-frontend.svg?branch=develop)](https://travis-ci.org/LABS-EU3/hackton-frontend) [![Coverage Status](https://coveralls.io/repos/github/LABS-EU3/hackton-frontend/badge.svg?branch=develop)](https://coveralls.io/github/LABS-EU3/hackton-frontend?branch=develop) [![Netlify Status](https://api.netlify.com/api/v1/badges/0b0d93d0-04af-4a75-9a62-773eed6eac75/deploy-status)](https://app.netlify.com/sites/sharp-panini-3ec54b/deploys)

# Hackton

A comprehensive portal for hackathons where students can submit their work and judges can evaluate in one place. It is an app that helps you organize and evaluate Hackathons.

* **Login**
![image](https://user-images.githubusercontent.com/33374159/73931951-8da93080-48d9-11ea-9792-f7c458007dfa.png)

* **Dashboard**
![image](https://user-images.githubusercontent.com/33374159/73932198-2475ed00-48da-11ea-9bff-1b8bff89d8da.png)

* **Hackathon Event**
![image](https://user-images.githubusercontent.com/33374159/73933138-1a54ee00-48dc-11ea-9e96-02005a40dc50.png)

* **Project Submissions**
![image](https://user-images.githubusercontent.com/33374159/73933214-3fe1f780-48dc-11ea-947c-fe942eb231b3.png)

* **User Profile**
![image](https://user-images.githubusercontent.com/33374159/73933980-e11d7d80-48dd-11ea-87b5-795d6d4c0874.png)

## Table of Content
1. [Getting started](#getting-started)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Enviroment variables](#enviroment-variables)
2. [Running the tests](#running-the-tests)
* [Break down into end to end tests](#break-down-into-end-to-end-tests)
3. [Deployment](#deployment)
4. [Technology stack](#technology-stack)
5. [Contributing](#contributing)
6. [Versioning](#versioning)
7. [Authors](#authors)
8. [License](#license)
9. [Acknowledgments](#acknowledgments)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To get started with this project you need a basic knowledge of the following.
`Javascript (ES6)
NodeJs
SQL (Postgres)
Version Control (Git)`

### Installation

* After cloning the repository, in the project directory, `cd` into hackton-frontend and you can run: `npm install` or `yarn install` in the console.
* Then run `npm start` or `yarn start`.

### Enviroment Variables
The following should be inside `.env` file for the app to function correctly.

`REACT_APP_API_URL='https://hackton-staging.herokuapp.com'`

## Running the tests

Run `npm test` or `yarn test` in the console.

### Break down into end to end tests

* **EditHackathon test** - renders the User EditHackathon template correctly
* **EventOnboarding test** - renders the User EventOnboarding template correctly.
* **HackathonForm test** - renders the User HackathonForm template correctly.
* **HackathonSingle test** - renders the User HackathonSingle template correctly.
* **UserOnboarding test** - renders the User UserOnboarding template correctly.
* **UserProfileForm test** - renders the User UserProfileForm template correctly.

## Deployment

* The landing page was deployed with [Zeit](https://hackton.co/)
* The Actual site was deployed with [Netlify](https://staging.hackton.co/register)

## Built With

* [React](https://reactjs.org/) - The web framework used.
* [Redux](https://redux.js.org/) - State management tool.
* [Styled-components](https://www.styled-components.com/) - Used to generate styles.

## Contributing

Please read [CONTRIBUTING.md](https://github.com/LABS-EU3/hackton-frontend/wiki/Pull-Request-Convention) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

This is version 0.0.2 (Release canvas 2)

## Authors

* **Pascal Ulor** - *Team lead* - [github](https://github.com/PascalUlor)
* **Mariam Adedeji** - *Team member* - [github](https://github.com/mariehposa)
* **Mike Perry Attara** - *Team member* - [github](https://github.com/mikeattara)
* **Justinas Vebra** - *Team member* - [github](https://github.com/vebradev)
* **Mildred Otieno** - *Team member* - [github](https://github.com/awuorm)
* **Ayomide Jones** - *Team member* - [github](https://github.com/Ayormeday)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

* Lambda 
