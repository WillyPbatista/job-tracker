export type JobStatus =
  | 'applied'
  | 'interview'
  | 'technical'
  | 'offer'
  | 'rejected'

export interface Job {
  id: string
  company: string
  position: string
  salary?: number
  notes?: string
  status: JobStatus
  createdAt: string
}
