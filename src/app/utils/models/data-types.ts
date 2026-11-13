import { taskDetails } from "src/app/shared/dto/task-details"

export type TApiTask = {
  items: taskDetails[],
  pageIndex: number,
  totalPages: number,
  hasPreviousPage: boolean,
  hasNextPage: boolean
}