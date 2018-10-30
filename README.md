## React Typescript, Redux dev tests

### Get started
Start project
```
yarn start
```
Run tests
```
yarn test
```

Hi there, thought I'd give you a readme to give you some context.

Because I was under time limit to try to finish the functionality today, there are more uses of the 'any' cast than I would prefer.

Also realised that I haven't quite implemented the correct spec stipulated in the brief. I've done validation on duplicate fields which is slightly different to what was asked.

### Things I would do with more time
- Made sure design matched spec, what i have implemented is slightly different
- Remove as much use of the any type as possible, replaced with specific types
- Higher test coverage, more component tests
- Memoize derived data selectors and transforms
- More commentary
- Tidy up the UI, make more usable
- Maybe hook up to an DB for persistence
- Probably improve the table data model slightly to improve transform performance
