## Whoops

It seems you ended up here by accident. This site is meant to host the docs for other repos in the Feathers ecosystem. Add a `basePath` search param to the url to view docs.

The general value should be something like

```txt
https://raw.gitbubusercontent.com/<githubUser>/<githubRepo>/master
```

If the `<githubUser>` is `feathersjs-echosystem` and the `<githubRepo>` is `feathers-mongodb` then the link should be:

For example

```txt
?basePath=https://raw.githubusercontent.com/feathersjs-ecosystem/feathers-mongodb/master
```

You can see the result of setting this `basePath` [here](https://daddywarbucks.github.io/remote-docsify/?basePath=https://raw.githubusercontent.com/feathersjs-ecosystem/feathers-mongodb/master
) and you can see the original `README.md` [here](https://raw.githubusercontent.com/feathersjs-ecosystem/feathers-mongodb/master/README.md) and the GitHub version [here](https://github.com/feathersjs-ecosystem/feathers-mongodb).

Due to the fact that some GitHub repositories' `master` branch is sometimes called `main` (or even something else) you must substitute the `master` part of the value with the proper one for your repository.

<div style="margin-top:100px; width:100%; border-top:1px solid grey">

### About this utility
This utility support display of your `README.md` in the Git repository you specify using the `basePath` search parameter. The `README.md` can contain any of the normal markdown commands:

1. This is a numbered list
   - with a sub list _you see?_
   - with 2 lines __you see?__
1. And an other line


 Furthermore, it supports nice things like code snippets with copy to the clipboard

```js
  init() {
    this._dark = (/true/i).test(window.localStorage.getItem(this._key));
    if (this._dark) this.toggle(false);

    return this._dark;
  }
```

and high-lights of important stuff

> __Important:__ This is very important - just in case _you_ did not realise it!

and a convenient way of accessing the great FeathersJS documentation and much more.