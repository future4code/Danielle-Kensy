const tasks = ["me jogar de um precipicio", "sonegar imposto"]

const newTask = process.argv[2]

let pushArray = tasks.push(newTask)

console.log(tasks)