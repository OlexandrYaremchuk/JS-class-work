// 1. Створіть масив style з двома елементами "Джаз" та "Блюз"

const style = ["Джаз", "Блюз"]

// 2. Додайте Рок-н-ролл в кінець масиву

style.push('Рок-н-ролл')

// 3. Замініть значення в середині на "Класика". 
style = style.splice(1, 1, "Класика")
style[1] = "Класика"
const midle = Math.ceil(style.length / 2 - 1)
style[midle] = 'Класика'

// 4. Видаліть перший елемент
style.shift();

// 5. Вставте "Реп" та "Рок" на початок масиву
style.unshift("Реп", "Рок")
