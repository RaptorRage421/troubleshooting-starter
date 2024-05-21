<a name="troubleshooting-starter"></a>

<div align="center">
  <a href="https://github.com/PrimeAcademy/troubleshooting-starter">
    <img src="https://avatars.githubusercontent.com/u/9360728?s=200&v=4" alt="Logo" width="80" height="80">
  </a>
  <h3>Troubleshooting Starter</h3>
  <p>
    <a href="https://github.com/PrimeAcademy/troubleshooting-starter/issues">Report Bug</a>
    ·
    <a href="https://github.com/PrimeAcademy/troubleshooting-starter/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ul>
    <li>
      <a href="#about-this-repo">About This Repo</a>
    </li>
    <li>
      <a href="#github-setup">GitHub Setup</a>
    </li>
    <li><a href="#local-setup">Local Setup</a></li>
    <li><a href="#instructions">Instructions</a></li>
  </ul>
</details>

## About This Repo

📝 We will be [troubleshooting/debugging](https://revdebug.com/blog/troubleshooting-vs-debugging-the-difference-and-best-practices/) a To-Do application using various tools like [Postman](https://www.postman.com/), [Chrome DevTools](https://developer.chrome.com/docs/devtools/), and the VSCode built-in [Debugger](https://code.visualstudio.com/Docs/editor/debugging)!

[Troubleshooting](https://www.techopedia.com/definition/30019/software-troubleshooting) is the process of identifying, analyzing, and solving problems in a system or program. [Debugging](https://www.freecodecamp.org/news/what-is-debugging-how-to-debug-code/) is closely related - it involves closely examining code to find and fix bugs that are causing issues.

[🔝 back to top](#troubleshooting-starter)

## GitHub Setup

- [ ] **Create Repo from Use Template**:
  
  - Click [HERE](https://github.com/new?template_name=troubleshooting-starter&template_owner=prime-digital-academy) or the `Use Template` button in this repo to create a new repo.
  - Ensure `Include all branches` is left unchecked.
  - Specify your username and repo name appropriately.
  - Provide a description for the repo (optional).
  - Set the repo as `Public`.
  - Click `Create repository`.

[🔝 back to top](#troubleshooting-starter)

## Local Setup

- [ ] **Clone your Repo**:

  - Click the `<> Code` button in this repo and choose `SSH`.
  - Copy the URL. It should look something like: `git@github.com:YOUR-USERNAME/YOUR-REPO-NAME.git`.
  - In your terminal, navigate to the directory where you want to clone this repo.
  - Execute `git clone git@github.com:YOUR-USERNAME/YOUR-REPO-NAME.git`, replacing the placeholders with actual values.

- [ ] **Create Database in PostgreSQL (using Postico)**:

  - Create a database named `troubleshooting-starter-db` in Postico with the values in your `pool.js` file.
  - Copy and paste the content from your `database.sql` into your PostgreSQL database.
  - Run the queries in the new database to populate your tables with data.

- [ ] **Install Node Dependencies**:

  - In the terminal, navigate to the folder you cloned this repo and run the following:

    ```shell
    npm install
    ```

[🔝 back to top](#troubleshooting-starter)

## Instructions

- [ ] **Start the Application**:

  - In the terminal, run the following to start the server:

    ```shell
    npm start
    ```

Open your preferred web browser and navigate to [localhost:5001](http://localhost:5001) to see the UI for your application.

> **NOTE:** The key combination `ctrl-c` will stop your server from running. Whichever current Node.js process is running in that terminal will stop on macOS.

Follow along with your instructor to troubleshoot a splendid To-Do application! Happy Priming!

[🔝 back to top](#troubleshooting-starter)
