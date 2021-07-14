# safe-city
##### Full Stack - MERN Project
 <br />
 <br />
 

## description:
This is **SafeCity**,
A Full-Stack system that centralizes the major aspects of civil security and public safety.

<br />

## purpose:
to easy **control events** of civil security and Urban incidents that affect the safety of residents.
to easy **reporting** regarding civil security and Urban malfunctions
to **Reflect** the state of public safety in a particular area

<br />

## technology stack:

a **M.E.R.N** full-stack, **MVC** design pattern app: 

**MongoDB** - document database
**Express** - Node.js web framework
**React** - a client-side JavaScript framework
**NodeJs** - the premier JavaScript web server

<br />

#### React.js Front End
The top tier of the MERN stack is React.js, the declarative JavaScript framework for creating dynamic client-side applications in HTML. React lets you build up complex interfaces through simple Components, connect them to data on your backend server, and render them as HTML.

React’s strong suit is handling stateful, data-driven interfaces with minimal code and minimal pain, and it has all the bells and whistles you’d expect from a modern web framework: great support for forms, error handling, events, lists, and more.

#### Express.js and Node.js Server Tier
The next level down is the Express.js server-side framework, running inside a Node.js server. Express.js bills itself as a “fast, unopinionated, minimalist web framework for Node.js,” and that is indeed exactly what it is. Express.js has powerful models for URL routing (matching an incoming URL with a server function), and handling HTTP requests and responses.

By making XML HTTP Requests (XHRs) or GETs or POSTs from your React.js front-end, you can connect to Express.js functions that power your application. Those functions in turn use MongoDB’s Node.js drivers, either via callbacks for using Promises, to access and update data in your MongoDB database.

#### MongoDB Database Tier
If your application stores any data (user profiles, content, comments, uploads, events, etc.), then you’re going to want a database that’s just as easy to work with as React, Express, and Node.

That’s where MongoDB comes in: JSON documents created in your React.js front end can be sent to the Express.js server, where they can be processed and (assuming they’re valid) stored directly in MongoDB for later retrieval. Again, if you’re building in the cloud, you’ll want to look at Atlas. If you’re looking to set up your own MERN stack, read on!