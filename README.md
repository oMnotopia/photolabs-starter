# Photolab Project

Photolab is a simple single page photo viewing application.

## Features

Pictures are loaded from a database. A user can then like a picture, click on it and view it in greater detail with similar photos, or filter photos based on a category by clicking the topics in the navigation bar.

## Final Product

!["Main page of website"](https://github.com/oMnotopia/photolabs-starter/blob/main/docs/Screenshot%202023-06-19%20at%202.16.19%20PM.png?raw=true)
!["Modal view of website"](https://github.com/oMnotopia/photolabs-starter/blob/main/docs/Screenshot%202023-06-19%20at%202.16.39%20PM.png?raw=true)

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm start` command. The app will be served at <http://localhost:3000/>.
4. Go to <http://localhost:3000/> in your browser.

** This program uses SASS, which can be run with the command `npm run sass-watch` **

## Dependencies

**Front-end**
- Axios
- react
- react-dom
- react-scripts
- web-vitals

**Back-end**
- body-parser
- cors
- dotenv
- express
- helmet
- pg
- socket.io
- ws

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```
