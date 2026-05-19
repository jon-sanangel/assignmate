export type Items = {
  title: string,
  assignee: string
  description: string,
  status: string,
  taskWeight: string,
  taskDifficulty: string,
  dueDate: string
}

export type TApiTask = {
  items: Items[],
  pageIndex: number,
  totalPages: number,
  hasPreviousPage: boolean,
  hasNextPage: boolean
}