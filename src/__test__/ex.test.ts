import { cpSync } from 'fs'
import ex from './ex'
// the discribe used to orginase the tests
describe('ex', () => {
  test('return string', () => {
    // you can use .only in place of skip
    // the only test in the page is working
    expect(ex('')).toBe('unknown')
  })
  test.skip('return string', () => {
    // this test is skipped
    expect(ex('hello')).toBe('hello')
  })
})

beforeAll(() =>
  //! this work in the beginning
  {
    //connect to database
    //Empty testing table
    // add Dummy data for testing
    //prepare Everthing before testing
  }
)
afterAll(() =>
  //! this work in the beginning
  {
    // clearn Database
    // clean cache
  }
)
beforeEach(() =>
  //! this word before any tests (midelware)
  {
    // write somthing here
  }
)

//? matchers
//* check the lenght of a string or an array
const students = ['ahmed', 'mazen', 'hazem', 'ayoub', 'iyed']
const intList = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//? first method
test('should first', () => {
  expect(students.length).toBe(5)
})

//? second method

test('should second', () => {
  expect('hello world').toHaveLength(11)
})

test('check if the array contain student named louay', () => {
  expect(students).not.toContain('louay')
  // expect(students).not.toContain('iyed'); fail
})

test('check if the item of the array is not equal to 0', () => {
  intList.forEach((num) => {
    expect(num).not.toEqual(0)
  })
})
test('check if the item of the array is a number', () => {
  intList.forEach((num) => {
    // expect(isNaN(num)).toEqual(false) -OR-
    expect(isNaN(num)).toBeFalsy()
  })
})

test('Check if the first element in the array is larger then 2', () =>
{ 
  expect(intList[0]).toBeLessThanOrEqual(2)
})

test('check if the value is not undefined', () =>
{ 
  let bb = 1; 
  expect(bb).not.toBeUndefined()
})

test('check For substring inside String by RegExp', () =>
{ 
  let myString = 'hello from jest'
  expect(myString).toMatch(/jest/);
})
test('check For substring inside String by RegExp', () =>
{ 
  let myString = 'hello from jest'
  expect(myString).toMatch(/jest/);
}) 

test('check for a property in object', () =>
{
  let myObject = {
    name: "mohsen",
    age: 30,
  };
  expect(myObject).toHaveProperty("age");
})
test('check for a value in object', () =>
{
  let myObject = {
    name: "mohsen",
    age: 30,
  };
  expect(myObject).toHaveProperty("age",30);
})

expect.extend({
  toBeLargerThan(received:number, target:number)
  {
    console.log("received",received);
    const pass = received < target;
    if (pass)
    {
      return {
        message: () => `Expected ${received} To Be larger than ${target}`,
        pass: false,
      };
    } else
    {
      return {
        message: () => `Error:Expected ${received} to be larger than ${target}`,
        pass:true,
      }
    }
  }
})
test('check if a larger then b', () =>
{ 
  const a = 119
  expect(a  ).toBeLargerThan(118)
})

//! how can i create a custom matcher 
interface bet
{
  received: number
  start: number
  end:number
}
// expect.extend({
//   toBeBetween(received, start, end)
//   {
    
//   }
// })