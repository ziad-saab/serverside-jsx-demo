# Using React and JSX to render complex HTML structures on the server

ReactJS is mostly known as a front-end library, code that runs in the browser. It turns out that we can also use React on the server side to render HTML. In this way, we are using JSX as a "templating language" to let us write cleaner code.

JSX looks a lot like HTML, save for two main things:

  1. You have to close all your tags
  2. You can use tags that don't exist in HTML!

Point 2 is the most important. JSX lets you write an HTML structure that consists of **components** instead of only HTML tags. This lets you **decompose** your user interface, so that you can work on small portions of it at a time.

At its essence, a **component** is a function that takes in some properties -- basically an object of data -- and then renders some portion of an HTML structure. By putting components together, we can create the most complex UIs ever.

To make this work though, we need to **transpile** our JSX into "real" JavaScript. If you look at our `package.json`, we are requiring a plugin called `babel-register` and another one called `babel-plugin-transform-react-jsx`.

`babel-register` makes it so that we can `require` files that contain JSX, and they will be automatically transpiled so that NodeJS can understand them.

`babel-plugin-transform-react-jsx` is the one actually doing the transformation. Babel is a tool that helps us write JavaScript using its new features, but can transpile that code so that it runs on older JavaScript VMs. By itself, Babel does nothing, only adding plugins makes it do something. The file `.babelrc` is the one loading our plugins.

Then, in `HomePage.js`, notice how we are doing `var React = require('react')` on top, but we don't seem to actually be using the `React` variable anywhere? That's because our JSX code will be transformed into function calls to the `React` library, but that is done automatically by Babel.

In the `HomePage` function, we are returning a bit of JSX. In it, we are outputting `<Post ... />`. This will actually call our `Post` component function, and pass it all the attributes inside of an object. This is what lets us write code that looks like HTML, but actually runs in JavaScript land.

In `main.js`, after loading the `babel-register` module, doing `require` will first transpile the code to JS and then pass it down to us. Then we have a simple array of content objects, we pass it to our `HomePage` component function, and what we get back is put in a variable called `htmlStructure`.

Finally, using the `ReactDOMServer` module, we can take this HTML structure and transform it to a string of HTML. The output of the `console.log` will look like this:

```html
<div><h1>Reddit clone!</h1><ul><div><h2><a href="http://www.google.com">Google!</a></h2></div><div><h2><a href="http://www.reddit.com">Reddit!</a></h2></div><div><h2><a href="http://www.decodemtl.com">DecodeMTL!</a></h2></div></ul></div>
```

Not exactly easy to read, but then we can pass it to our server rendering function as the `content` variable. However here's a nicer version of the output so you can see what happened:

```html
<div>
  <h1>Reddit clone!</h1>
  <ul>
    <li>
      <div>
        <h2>
          <a href="http://www.google.com">Google!</a>
        </h2>
      </div>
    </li>
    <li>
      <div>
        <h2>
          <a href="http://www.reddit.com">Reddit!</a>
        </h2>
      </div>
    </li>
    <li>
      <div>
        <h2>
          <a href="http://www.decodemtl.com">DecodeMTL!</a>
        </h2>
      </div>
    </li>
  </ul>
</div>
```
