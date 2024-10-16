# uuid-1line

Generate pseudo uuid in one line.

```ts
'xxxxxxxx-xxxx-4xxx-8xxx-xxxxxxxxxxxx'.replaceAll('x', () =>
  Math.random().toString(16).at(3),
);
```

## License

[MIT License](https://opensource.org/licenses/MIT) (c) 2024
