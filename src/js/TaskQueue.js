export default class TaskQueue {
    constructor(taskDelay) {
        this.taskDelay = taskDelay
        this.taskQueue = []
        this.isProcessing = false
    }

    addTask(task) {
        this.taskQueue.push(task)
    }

    delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms))
    }

    run() {
        if (this.isProcessing) {
            return Promise.reject('The task queue is already processing.')
        }
        this.isProcessing = true

        const processTask = (taskIndex) => {
            if (taskIndex >= this.taskQueue.length) {
                this.isProcessing = false
                return Promise.resolve('All tasks are completed.')
            }

            const currentTask = this.taskQueue[taskIndex]

            return currentTask()
                .then((message) => {
                    console.log(message)
                    return this.delay(this.taskDelay)
                })
                .catch((error) => {
                    console.error('Error while processing task:', error)
                    return this.delay(this.taskDelay)
                })
                .then(() => processTask(taskIndex + 1))
        }

        return processTask(0)
    }
}
