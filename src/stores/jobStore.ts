import { defineStore } from 'pinia'
import { v4 as uuid } from 'uuid'
import { useLocalStorage } from '../composables/useLocalStorage'
import type { Job, JobStatus } from '../types/job'


export const useJobStore = defineStore('jobs', () => {
  const jobs = useLocalStorage<Job[]>('jobs', [])

  function addJob(job: Omit<Job, 'id' | 'createdAt'>) {
    jobs.value.push({
      ...job,
      id: uuid(),
      createdAt: new Date().toISOString()
    })
  }

  function deleteJob(id: string) {
    jobs.value = jobs.value.filter(j => j.id !== id)
  }

  function updateStatus(id: string, status: JobStatus) {
    const job = jobs.value.find(j => j.id === id)
    if (job) job.status = status
  }

  function updateJob(updatedJob: Job) {
    const index = jobs.value.findIndex(j => j.id === updatedJob.id)
    if (index !== -1) {
      jobs.value[index] = updatedJob
    }
  }

  function getJobsByStatus(status: JobStatus) {
    return jobs.value.filter(j => j.status === status)
  }




  return {
    jobs,
    addJob,
    deleteJob,
    updateStatus,
    updateJob,
    getJobsByStatus
  }
})
