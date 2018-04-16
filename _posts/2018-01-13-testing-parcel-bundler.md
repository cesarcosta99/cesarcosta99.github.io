---
title:  "Testing Parcel bundler"
description: "From Webpack2 to Parcel: zero configuration"
date: 2018-01-13T03:50:37.327Z
categories: javascript frontend
tags: javascript bundler react boilerplate testing code
---

![Parcel](/assets/img/posts/parcel.png)

Few months ago a new bundler has arrived and it is gaining adopters quickly: [Parcel](https://github.com/parcel-bundler/parcel). What makes it a good choice? I'll show you.

The first thing you need to get used to is that Parcel **doesn't have any configuration file**. It was a great catch: Parcel just takes the configuration files from your projects and makes the dirty work under the hood, for example, if you have a `.babelrc` Parcel will make Babel parses what it needs to parse, that simple. You just need to be focused on development instead of get your time lost on tooling.

The bundler has a lot of potential and here's a list of its advantages:
- Really blazing fast bundle times;
- Import syntax for code splitting;
- It bundles all your assets like fonts or images;
- Code transformers like Babel or PostCSS works automatically;
- Pretty awesome error logging;
- Automatic Hot Module Replacement;
- No development configuration and production-ready!

## Starting a brand new project

First, we should install Parcel globally (or locally on each project, it's up to you):

{% highlight bash%}
$ npm i -g parcel-bundler
{% endhighlight %}

Let's create a react example project to show you Parcel is easy as pie:

{% highlight bash%}
$ mkdir react-example
$ cd react-example
$ npm init -y
{% endhighlight %}

Next, install dependencies for React and Babel:

{% highlight bash%}
$ npm i -S react react-dom
$ npm i -D babel-preset-react babel-preset-es2015
{% endhighlight %}

Next we create the `.babelrc` file which tells Parcel we are using ES2015 and JSX:

{% highlight json%}
{
  "presets": ["es2015", "react"]
}
{% endhighlight %}

Next we create `index.js` file containing our React app:

{% highlight javascript%}
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => (
  <h1>Hello World!</h1>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
{% endhighlight %}

And here is where the magic happens. Parcel actually accepts any entrypoint file (Webpack's entrypoint is a JS file) and to our example we will use the `index.html` file which will tell Parcel where to start from:

{% highlight html%}
<!DOCTYPE html>
<html>
  <head>
    <title>React Hello World</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./index.js"></script>
  </body>
</html>
{% endhighlight %}

At this point we should have a structure like this:

{% highlight bash%}
$ ls -la
.babelrc
index.html
index.js
node_modules
package-lock.json
package.json
{% endhighlight %}

Last but not least, let's add the following scripts to our `package.json`, they are useful to run the development server and build:

{% highlight json%}
{
  ...
  "scripts": {
    "start": "NODE_ENV=development parcel index.html",
    "build": "NODE_ENV=production parcel build index.html --no-minify"
  }
  ...
}
{% endhighlight %}

Now you know what to do:

{% highlight bash%}
$ npm start
{% endhighlight %}

If everything is OK you should see something like this in your terminal:

![terminal](/assets/img/posts/parcel-running.png)

You just need to browse to `http://localhost:1234` and the app will be running there! Check out the [Parcel docs](https://parceljs.org/getting_started.html) to customize your bundling.

## More on GitHub

I didn't upload this specific example to GitHub but I had a React boilerplate using Webpack2 and I created another repository using the same structure to test Parcel and analyze the main differences. It looks pretty much like this above example but includes a few extra things like [ESLint](https://eslint.org/) and [Autoprefixer](https://github.com/postcss/autoprefixer):

- [React boilerplate using Webpack2](https://github.com/cesarcosta99/react-boilerplate)
- [React boilerplate using Parcel](https://github.com/cesarcosta99/react-boilerplate-parcel)

Go further, compare the differences between both and choose the one that fits best for your project. If you liked one boilerplate or both I appreciate a **star**!