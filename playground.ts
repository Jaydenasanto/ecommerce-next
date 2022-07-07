// interface Person {
//   name: string;
//   age: number;
// }

class Person {
  name: string;
  age?: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// interface PersonLoggerFn {
//   (name: string, age: number): string;
// }

type PersonLoggerFn = (name: string, age?: number) => string;

export default function play() {
  const name: string = "jayden";
  const age: number = 26;

  const john: Person = {
    name: "John",
  };

  //   const person: Person = {
  //     name: "John",
  //     age: 34,
  //   };

  const logPersonInfo: PersonLoggerFn = (
    personName: string,
    personAge: number = 0
  ): string => {
    const info = `Name: ${personName}, age: ${personAge}`;
    console.log(info);
    return info;
  };

  function logPersonInfo2(person: Person) {
    const info = `Name: ${person.name}, age: ${person.age}`;
    console.log(info);
    return info;
  }

  const log = logPersonInfo(name);

  const person = new Person("Edward", 30);
  logPersonInfo2(person);
}
