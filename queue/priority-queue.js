const createQueue = require('./create-queue')

const createPriorityQueue = () => {
  const lowPriorityQueue = createQueue()
  const highPriorityQueue = createQueue()

  return {
    enqueue(item, isHighPriority = false) {
        isHighPriority ?
        highPriorityQueue.enqueue(item) :
        lowPriorityQueue.enqueue(item)
    },
    dequeue() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.dequeue()
      }
      return lowPriorityQueue.dequeue()
    },
    peek() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peek()
      }
      return lowPriorityQueue.peek()
    },
    get length() {
      return highPriorityQueue.length + lowPriorityQueue.length
    },
    isEmpty() {
      return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty()
    }
  }
}

// e.g.
const priorityQueue = createPriorityQueue()

priorityQueue.enqueue("Fix a bug")
priorityQueue.enqueue("Refactor a method")
priorityQueue.enqueue("Add a feature")

priorityQueue.dequeue()

priorityQueue.enqueue("Production issue!", true)

console.log(priorityQueue.peek());
