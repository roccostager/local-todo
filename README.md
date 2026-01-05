# 📝 local-todo
A to-do application using browser local storage.

> **Live preview: https://roccostager.github.io/local-todo/**

## 💡 About this Project!
I built this project to familiarise with fundamentals of DOM manipulation, and client-side data persistence without relying on any frameworks.

### Key Features
* **Create, read, update, delete** (CRUD) features! Add tasks, mark them as complete, or delete them.
* **Data persistence**: using browser local storage.

### 🛠️ Built With
> Pure vanilla! No frameworks... (though I certainly wanted to use them)
* **HTML5**
* **CSS3**
* **JavaScript** (ES6)
* **Webpack**

## 🧠 What I learnt!
This project was a deep-dive into the fundamentals of web development. I challenged myself to build a full and functional, albeit simple application.

### Challenges
* **Code organisation**: I struggled with naming conventions and general structure. Seperating code into different modules helped. I found that distinguishing between DOM or data references became increasingly more confusing. In my upcoming projects I plan to adhere to strict naming conventions.
* **Handling state**: It was difficult to ensure the DOM was in sync with the data. I had to ensure changes to the DOM always updated data, and vice versa!
    * The issue of handling state made it challenging to implement proper event delegation. In future projects, I will make sure to consider performance optimisation in the planning process so features such as event delegation can be handled properly.

### Overall
I feel I solidified my understanding of **fundamentals**. Creating a full application proved to be much more difficult than a small and simple project. The added challenges of needing to organise large amounts of code made everything much more complicated.

## Instructions
To play around locally:
1. **Clone** the github repository to your local device.
2. **Run** `npm install` **in the terminal** to install node dev dependencies.  
3. **Run** `npx webpack serve` **to start a webpack server**, allowing you to view a live preview on `localhost:8080`.