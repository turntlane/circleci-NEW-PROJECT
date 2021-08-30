const getGreeting = require('./project');
const add = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('add', () => {
  expect(add(1, 2)).toEqual(3)
})