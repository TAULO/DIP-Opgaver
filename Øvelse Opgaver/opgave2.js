let string = `[
    {"name": "Apple", "expenses": 10000, "earnings": 15000},
    {"name": "Windows", "expenses": 12000, "earnings": 18000},
    {"name": "SpaceX", "expenses": 5000, "earnings": 15000},
    {"name": "Tesla", "expenses": 10000, "earnings": 5000}]`

const arr = JSON.parse(string)

const earings = arr.map(comp => comp.earnings)
console.log(earings)

const surplus = arr.filter(comp => comp.earnings - comp.expenses > 0)
.map(comp => comp.name)
console.log(surplus)

const maxExpense = arr.reduce((prev, curr) => prev.expenses > curr.expenses ? prev : curr)
console.log(maxExpense)

let result = 0
earings.forEach(comp => result += comp)
const averageSurplus = result / surplus.length
console.log(result)