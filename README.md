# Professional Testing With Javascript

## Introduction

As you can imagine it gets a bit unwieldy to have hundreds of `if` statements
throughout your code. Beyond them being just a bit large, they lack organization
when categorizing features and they also can be somewhat difficult to read. All
of these problems are amplified when there are so many!

For many years, `if` statements were all we had. So, we kept using them. In the
past few years, programmers have created a bunch of new testing tools to make
testing easier when dealing with many many, many, many tests. The main one we
are going to be using is called [Mocha](https://mochajs.org/).

Let's walk through the basics of testing. You'll discover it's not too different
from what you've experienced in the last few lessons. Many lessons going forward
will include tests. We refer to these lessons as _labs_. By having tests in our
lesson materials, you can apply what you're learning and get immediate feedback
on your code!

## Getting Started

First things first, open up
`index.js` in your terminal. You are going to see mostly familiar things:

```javascript
var name = "Joe"
var height = "74"

var message = `${name} is ${height} inches tall`



module.exports = {name, height, message}
```

This should look familiar except for that third line: 

```js
var message = `${name} is ${height} inches tall`
```

It's actually pretty cool what that line does. Explore what ends up in the
`message` variable by typing `console.log(message)` on the last line and then
run `node index.js` in your terminal. You should see `"Joe is 74 inches tall"`. 
Pretty cool right? If you create a string wrapping it in back-ticks (`` ` ``) you 
can then use your variables directly in the string to create a sentence like we 
just did.

The key is when you use a variable you have to wrap the variable itself in the
`${` and `}`. If you were to modify `message` to look like this:

```js
var message = `name is height inches tall`
```

...and run your code again you'd get `"name is height inches tall"`. That's not
what you want! The `${` and `}` tell Javascript to grab the _value_ inside the
variable, not just that variable name.

### The Tests

We have our code, now let's take a look at the tests. They are located in the
`test` folder inside a file named `index-test.js`. In this lesson we are going 
to go over all of the tests, and then show you how to run them in the next
lesson.

```javascript
var index = require("../index.js")

/*

describe("what-is-a-test", () => {
  describe("Name", () => {
    it('returns "Susan"', () => {
      expect(index.name).toEqual("Susan")
    })
  })


  describe("Height", () => {
    it("is less than 40", () => {
      expect(index.height).toBeLessThan(40)
    })
  })

  describe("Message", () => {
    it("gives the name and height", () => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
    })
  })

})

*/
```

The first thing you'll notice is that all of the code is commented out using the
`/*` and `*/` block commenting syntax. This is because we will get into actually
running the tests in the next lesson. This lesson, let's just walk through what
you are seeing. In the next lesson the `/*` and `*/` will be removed.

There is a lot here. Right now, you really just need to focus on a few different
lines. The first grouping is testing our `name` variable.

```javascript
  describe('Name', () => {
    it('returns "Susan"', () => {
      expect(index.name).toEqual('Susan')
    })
  })
```

If you look at the line that begins with `expect` you'll see this:
`expect(index.name).toEqual('Susan')`. Read outloud, we get "Expect index.name
to equal Susan". That's exactly what it's saying! If we continue down to the
Height section you'll see this code:

```javascript
  describe("Height", () => {
    it("is less than 40", () => {
      expect(index.height).toBeLessThan(40)
    })
  })
```

The interesting line here is `expect(index.height).toBeLessThan(40)`. If you
read that one out as "Expect `index.height` to be less than 40" you'd be
correct! Let's look at the final one:

```javascript
  describe("Message", () => {
    it("gives the name and height", () => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
    })
  })
```

This one has two `expect` statements. If you read them out as English you'll
discover that the tests expects `index.message` to include both `index.name` and
`index.height`.

OK Great. You now understand what the tests are saying. Let's run our tests and
submit our code to learn. In the terminal first type `learn`. You should get a
message saying `0 passing` and the local build light will turn green.

For future labs, once all tests are passing, type `learn submit` in the terminal
to submit your code and register completion. However, in this particular lesson,
you will need to make a small edit to one of the files before running `learn
submit` and continuing on. This is because Learn expects labs to include student
written code.

To register completion in this lab, make a small edit to any of the files
present. If you added `console.log(message)` to `index.js` earlier, then you
already completed this task. Run `learn submit` now and Learn will recongize
that the contents of your lesson are slightly different than the original
contents and will register completion of the lesson.

You should be good to go forward now! In the next lesson we are going to cover
how to run them, and then have you actually solve the lab!
