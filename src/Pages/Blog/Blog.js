import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl text-black'>What are the different ways to manage a state in a React application?</h1>
            <p className='text-justify text-black'> In React apps, there are at least seven ways to handle the state. Let us briefly explore a few of them in this part. It is recommended to avoid storing such information in the app’s state to avoid the URL in our app getting out of sync. The URL should be used as the system of record, Read from it as needed for information related to sorting, pagination, etc. Update the URL as required when the settings change. The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies. Data persisted in the browser is tied to a single browser. So, if the user loads the site in a different browser, the data will not be available. We avoid storing sensitive data in the browser since the user may access the app on a shared machine. Some examples of where web storage might be most useful include storing a user’s shopping cart, saving partially completed form data or storing JWT token in HttpOnly Cookie.</p>

            <h1 className='text-3xl text-black'>How does prototypical inheritance work?</h1>
            <p className='text-justify text-black'>Every object with its methods and properties contains an internal and hidden property known as Prototype. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using proto. Example In the given example, there are two objects ‘person’ and ‘GFGuser’. The object ‘GFGuser’ inherits the methods and properties of the object ‘person’ and further uses them.</p>

            <h1 className='text-3xl text-black'>What is a unit test? Why should we write unit tests?</h1>
            <p className='text-justify text-black'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages. Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object. In SDLC, STLC, V Model, Unit testing is first level of testing done before integration testing. Unit testing is a WhiteBox testing technique that is usually performed by the developer. Though, in a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing.</p>

            <h1 className='text-3xl text-black'> React vs. Angular vs. Vue?</h1>
            <p className='text-justify text-black'>This post is a comprehensive guide on which is perhaps the right solution for you: Angular vs React vs Vue. Just a couple of years ago, developers were mainly debating whether they should be using Angular vs React for their projects. But over the course of the last couple of years, we’ve seen a growth of interest in a third player called Vue.js. If you are a developer starting out on a project and cannot decide on which JavaScript framework to use, this guide should help you make a decision. Here we’ll cover various aspects of Angular, Vue, and React to see how they suit your needs. This post is not just a guide on Angular vs React vs Vue but aims to provide a structure to help judge front-end JavaScript frameworks in general. In case a new framework arrives next year, you will know exactly what parameters to look at! In this post, we assume that you have basic knowledge of JavaScript and have used JavaScript frameworks as well.</p>
        </div>
    );
};

export default Blog;