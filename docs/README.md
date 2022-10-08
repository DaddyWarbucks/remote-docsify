# Whoops

It seems you ended up here by accident. This site is meant to host the docs for other repos in the Feathers ecosystem. Add a `basePath` search param to the url to view docs.

The general value should be something like

```txt
https://raw.githubusercontent.com/<githubUser>/<githubRepo>/<branch>
```

If the `<githubUser>` is `feathersjs-echosystem`, the `<githubRepo>` is `feathers-mongodb`, and the `<branch>` is `master` then the link should be:

```txt
?basePath=https://raw.githubusercontent.com/feathersjs-ecosystem/feathers-mongodb/master
```

You can see the result of setting this `basePath` [here](https://daddywarbucks.github.io/remote-docsify/?basePath=https://raw.githubusercontent.com/feathersjs-ecosystem/feathers-mongodb/master
) and you can see the original `README.md` [here](https://raw.githubusercontent.com/feathersjs-ecosystem/feathers-mongodb/master/README.md) and the GitHub version [here](https://github.com/feathersjs-ecosystem/feathers-mongodb).

Due to the fact that some GitHub repositories' `master` branch is sometimes called `main` (or even something else) you must ensure you are pointing to the correct branch for your repository.

<div style="margin-top:100px; margin-bottom: 50px; width:100%; border-top:1px solid grey"></div>

# About this utility
This utility support display of your `README.md` in the Git repository you specify using the `basePath` search parameter. 

## Normal Markdown commands

The `README.md` can contain any of the normal markdown commands like:

<pre>
1. This is a numbered list
   - with a sub list _you see?_
   - with 2 lines __you see?__
1. And an other line
</pre>

which shows as:

1. This is a numbered list
   - with a sub list _you see?_
   - with 2 lines __you see?__
2. And an other line

## Code snippets

We also support nice things like code snippets with copy to the clipboard e.g. if you put this in the `README.md`:

<pre>
 ```js
  init() {
    this._dark = (/true/i).test(window.localStorage.getItem(this._key));
    if (this._dark) this.toggle(false);

    return this._dark;
  }
 ```
</pre>

it will turn out nicely formatted like this

```js
  init() {
    this._dark = (/true/i).test(window.localStorage.getItem(this._key));
    if (this._dark) this.toggle(false);

    return this._dark;
  }
```

and high-lights of important stuff

> __Important:__ This is very important - just in case _you_ did not realise it!

by starting the line with a `> `.

## Tabbed areas

Tabs are also a possibility.

> _Please note tabs will only show up when the `README.md` is served from your repo through this service. The information will still be available but as headers._

### _First tabbed area_

<!-- tabs:start -->
#### **NodeJS**

```js
Here is some Node JS code
```

#### **React**

```js
Here is some React code
```

#### **Vue**

```js
Here is some Vue code
```

#### **Making tabs**

How to make a tabbed element like this can be found at [docsify-tabs](https://jhildenbiddle.github.io/docsify-tabs/#/?id=usage)

The markdown for a tabbed area is surrounded by two markers

```txt
<-- tabs:start -->

... markdown ...

<-- tabs:end -->
```

Where each tab is defined by markdown headline with the tabs name in bold and the contents follows until the `tabs:end` marker or the next tab. Make sure your tabs are at a higher header level than the surrounding text in case the viewer cannot show tabs.

<!-- tabs:end -->

Please note, if you have got several tabbed areas with same tab names (e.g. `Typescript`, and `NodeJS`) we will automatically select the same tab i all tabbed areas simultaneously. You can try it here.

### _Second tabbed area_
<!-- tabs:start -->
#### **NodeJS**

```js
Here is some other Node JS code
```

#### **React**

```js
Here is some other React code
```

#### **Vue**

```js
Here is some other Vue code
```

#### **Quasar**

```js
Here is some Quasar code
```

#### **Making tabs**

How to make a tabbed element like this can be found at [docsify-tabs](https://jhildenbiddle.github.io/docsify-tabs/#/?id=usage)

The markdown for a tabbed area is surrounded by two markers

```txt
<-- tabs:start -->

... markdown ...

<-- tabs:end -->
```

Where each tab is defined by markdown header with the tabs name in bold and the contents follows until the `tabs:end` marker or the next tab. Make sure your tabs are at a higher header level than the surrounding text in case the viewer cannot show tabs.
<!-- tabs:end -->

## Emojis

If you want to display an emoji you simply write `\:100\:` to get :100:, `\:smiley\:` to get :smiley: etc.

## FeathersJS documentation

Last but not least, we have included a convenient way of accessing the great FeathersJS documentation and much more from the top menu.

## Dark mode

You are automatically treated with a support of `Dark mode` using this utility - and we naturally check your preferred setting before displaying 😉. You can manually turn `Dark mode` on/off via the slider in the top menu.