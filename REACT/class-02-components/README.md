# Class 02 Components

## Component

- props
- types

## TypeScript

- static
- inference
- generics
- assertion
- compilation

```ts
type User = {
  name: string;
  age: number;
};

function user(user: User) {
  console.log(user);
  console.log(user.name);
  console.log(user.age);
}

user({ name: "Emanuel", age: 30 });
```

## Key Props

The key must be unique and not random

- ID

<pre>
["A", "B", "C", "D", "E"]
  1,   2,   3,   4,   ?
</pre>

- Index

<pre>
["A", "B", "C", "D", "E"]
  0,   1,   2,   3,   4

["A", "B", "E", "D", "C"]
  0,   1,   2,   3,   4
</pre>