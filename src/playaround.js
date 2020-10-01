const Person = {
  name: "Mosh",
  walk() {
    console.log(this);
  }
}

Person.walk();