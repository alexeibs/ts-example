import {createGreeter} from '../src/hello';

describe('Hello suite', () => {
  it('should work properly', () => {
    let greeter = createGreeter('Hello');
    let consoleSpy = spyOn(console, 'log');

    greeter.sayHello('Joe');
    expect(consoleSpy).toHaveBeenCalledWith('Hello, Joe!');
  });
});
