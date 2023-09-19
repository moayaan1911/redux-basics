<!-- @format -->

# Redux Tutorial

This is a simple todo app built with React and Redux. It uses Redux Toolkit for managing state.

## Description

This app allows users to:

- Add new todos
- Mark todos as completed
- Delete todos

The todos are stored in Redux state and persisted across app loads.

## Features

- Add new todos with a title
- Mark todos as completed/incomplete
- Delete existing todos
- Todos persist in state on page reloads

## File structure

- `store.js` - Creates and configures the Redux store
- `todoSlice.js` - Contains the reducer logic and actions for the todos
- `AddTodo.js` - Component to add new todos
- `ReadTodos.js` - Component to display list of todos
- `App.js` - Root component that renders AddTodo and ReadTodos

The store is created and passed to React Redux's `<Provider>` component in `index.js`.

`todoSlice.js` contains the reducer with logic to handle adding, editing, and deleting todos. It exports the actions and reducer.

`AddTodo` dispatches the `addTodo` action when a new todo is added. `ReadTodos` uses React Redux's `useSelector` hook to get the todos state and display it.

Let me know if you would like me to explain or expand on any part of the file/folder structure!

### Resources

- [Redux Toolkit Docs](https://redux-toolkit.js.org/introduction/getting-started)
- [React Redux Docs](https://react-redux.js.org/introduction/getting-started)
- [React Redux Tutorial - YouTube](https://www.youtube.com/watch?v=9jULHSe41ls)
- [Building Todo App with React and Redux - YouTube](https://www.youtube.com/watch?v=1w-oQ-i1XB8)
- [React Redux Crash Course 2021 - YouTube](https://www.youtube.com/watch?v=9jULHSe41ls)
- [React Redux Course for Beginners - FreeCodeCamp](https://www.freecodecamp.org/news/redux-course/)
- [React Redux GitHub Repo Examples](https://github.com/reduxjs/redux/blob/master/examples)

# About the Developer

Hello everyone, myself **Mohammad Ayaan Siddiqui** from India. I am a Full Stack WEB3 developer and a **DECENTRALIZATION MAXI**. Currently working as TECHNICAL CO-FOUNDER in a web3 startup based in Netherlands.

<p align="center">
<img src="./public/profile.jpg" alt="profile" style="height: 400px; width:500px;"/>
</p>

If you are interested in either of the topics or building in similar skills, connect with me below:-

1.  ![Alt text](./public/taplink.png 'Taplink') [My Taplink Dashboard](https://moayaan.taplink.ws/)

2.  ![Alt text](./public/linktree.png 'linktree') [My Linktree with ALL SOCIALS](https://linktr.ee/ayaaneth)
3.  ![Alt text](./public/github.png 'github') [Connect on Github](https://github.com/moayaan1911)
4.  ![Alt text](./public/linkedin.png 'linkedin') [Connect on Linkedin](www.linkedin.com/in/ayaaneth)
5.  ![Alt text](./public/hashnode.png 'dev') [Connect on Hashnode](https://moayaan.hashnode.dev/)
6.  ![Alt text](./public/twitter.png 'twitter') [Connect on Twitter](https://www.twitter.com/usdisshitcoin)
7.  ![Alt text](./public/telegram.png 'telegram') [Connect on Telegram](https://t.me/usdisshitcoin)
8.  ![Alt text](./public/dev.png 'dev') [Connect on dev.to](https://dev.to/moayaan1911)
