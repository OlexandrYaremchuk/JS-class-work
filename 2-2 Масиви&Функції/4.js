//Використовуючи методи split() та join(), напиши скрипт, який приймає імя змінної в форматі snake_case  та повертає нове імя в форматі camelCase

const variableArr = [
  "this_is_some_variable_name1",
  "this_is_some_variable_name2",
  "this_is_some_variable_nam3",
  "this_is_some_variable_name4",
];

for (let i = 0; i < variableArr.length; i += 1) {
  let variable = variableArr[i].split("_");
  //   console.log(variable);
  for (let x = 0; x < variable.length; x += 1) {
    let camelCaseWord = variable[x].split("");
    camelCaseWord[0] = camelCaseWord[0].toUpperCase();
    variable[x] = camelCaseWord.join("");
    // console.log(camelCaseWord);
  }

  variableArr[i] = variable.join("");
}

console.log(variableArr);
