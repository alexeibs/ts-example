interface AbstractGreeter {
  sayHello(name: string);
}

class Greeter implements AbstractGreeter {
  constructor(hello: string) {
    this.hello = hello;
  }

  sayHello(name: string) {
    console.log(`${this.hello}, ${name}!`);
  }

  private hello: string;
}

export function createGreeter(hello: string): AbstractGreeter {
  return new Greeter(hello);
}
