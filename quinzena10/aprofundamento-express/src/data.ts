type Tasks = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

type arrayTasks = Tasks[]

export const tasksList: arrayTasks = [
    {
        userId: 1,
        id: 1,
        title: "Lavar dinheiro",
        completed: false
    },
    {
        userId: 2,
        id: 2,
        title: "Clonar cartão",
        completed: true
    },
    {
        userId: 3,
        id: 3,
        title: "Pagar o agiota",
        completed: false
    }
]