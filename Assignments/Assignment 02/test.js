function get_name_and_age(person) {
    // Destructuring the person object to extract the name and age properties.
    const { name, age } = person;
  
    // Returning a string in the format "My name is {name} and I am {age} years old."
    return `My name is ${name} and I am ${age} years old.`;
  }
  
  const person = {
    name: "Murtaja",
    age: 15,
  };
  
  const output = get_name_and_age(person);
  
  console.log(output); // My name is Murtaja and I am 15 years old.