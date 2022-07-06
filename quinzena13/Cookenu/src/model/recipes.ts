export type recipe = {
    id: string,
    title: string,
    description: string,
    createdAt: string
}

export interface RecipeInputDTO  {
    title: string,
    description: string,
    token: string
}

export interface EditInputDTO {
    id: string,
    token: string
}