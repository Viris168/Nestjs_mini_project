export interface Todo{
    id: string;
    title: string;
    completed: boolean;
    createAt: Date;
}

export type Filter = 'all' | 'active' | 'completed';