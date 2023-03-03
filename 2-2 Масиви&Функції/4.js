//Використовуючи методи split() та join(), напиши скрипт, який приймає імя змінної в форматі snake_case  та повертає нове імя в форматі camelCase

const variableTable = ["err_blocked_by_client1", "err_blocked_by_client2", "err_blocked_by_client3", "err_blocked_by_client4"]

for (let i = 0; i < variableTable.length; i += 1) {
  let variable = variableTable[i].split('_')
  console.log(variable);
  for (let j = 0; j < variable.length; j += 1) {
    let camelCaseWord = variable[j].split('')
    camelCaseWord[0] = camelCaseWord[0].toUpperCase()
    variable[j] = camelCaseWord.join('')
  }
  variableTable[i] = variable.join('')
}

console.table(variableTable);