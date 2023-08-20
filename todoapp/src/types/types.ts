
export type Task = {
    id: string;
    title: string;
    description: string
    created_at: string
    formatted_created_at: string
}

export type MatchParams = {
    id: string;
}

export type TodoTitleProps = {
    title: string;
}

export type TodoCreateAtProps = {
    createdAt: string
}

export type TodoContentProps = {
    content: string
}