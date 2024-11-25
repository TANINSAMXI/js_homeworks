'use strict'

import TaskQueue from './TaskQueue.js'

const queue = new TaskQueue(1000)

queue.addTask(() => Promise.resolve('Task 1 completed'))
queue.addTask(() => Promise.resolve('Task 2 completed'))
queue.addTask(() => Promise.resolve('Task 3 completed'))

queue.run().then((message) => {
    console.log(message)
})
