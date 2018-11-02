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

### Context

Hi there, thought I'd give you a readme to give you some context.

Because I was under time limit to try to finish the functionality today, there are more uses of the 'any' cast than I would prefer.

### Things I would do with more time
- Remove as much use of the any type as possible, replaced with specific types
- Higher test coverage, more component tests
- Memoize derived data selectors and transforms
- Had validation logic maintained within Redux
- More commentary
- Tidy up the UI, make more usable
- Maybe hook up to an DB for persistence
- Probably improve the table data model slightly to improve transform performance
- Would have used CSS modules as oppose to just vanilla SASS
- Apply a library like immutable.js to reducers to improve readability of immutable actions
