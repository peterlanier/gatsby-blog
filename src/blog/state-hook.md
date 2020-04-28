---
title: "React Hooks: The State Hook"
date: "2019-03-08"
excerpt: "With the introduction of React hooks, you can finally use local state in functional components."
featuredImage: ../images/react.png
---
With the new React hooks that rolled out in version 16.8, I'm using functional components a lot more often. I love it because functions have been first-class citizens in the JavaScript language since its inception, but React developers were forced to use ES6 classes in order to access features like state and lifecycle methods. But now, Hooks allow us to use all the features of React inside a functional component.

Today I'm going to focus briefly on the state hook. In future posts I'll highlight other useful hooks, what they do and how to use them.

## Declaring State
Before now, you had to use a class in order to take advantage of React's local state feature. In order to declare a local state variable we would do something like this:

```jsx
class myClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = { myVariable: 42 }
  }

  //... the rest of your code here
}
```

But now you can do the exact same thing in a functional component by declaring local state using the state hook...

```jsx
function myFunction() {
  const [myVariable, setMyVariable] = useState(42)

  //... the rest of your code here
}
```
...and it's cleaner to read and more expressive.

## Updating State

You might have noticed in the example above that we also declared a setter: `const [myVariable, setMyVariable] = useState(42)`. In this case, `setMyVariable` is that setter. The name I chose for the setter is arbitrary, but convention dictates using the same name as the variable, camelcase, but prepending the word 'set.' This makes it easier to understand your code's intention.

You can use the setter to update the value of your variable like so:

```jsx
  <button onClick={() => setMyVariable(myVariable + 1)}>
    Click me
  </button>
```

For more on the state hook, check out the [docs](https://reactjs.org/docs/hooks-state.html).