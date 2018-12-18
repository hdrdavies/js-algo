module.exports = createQueue = () => {
  const queue = []

  return {
    enqueue(item) {
        queue.unshift(item)
    },
    dequeue() {
      queue.pop()
    },
    peek() {
      return queue[queue.length - 1]
    },
    get length() {
      return queue.length
    },
    isEmpty() {
      return queue.length === 0
    }
  }
}

// e.g.
const queue = createQueue()

queue.enqueue("Get up")
queue.enqueue("Make Breakfast")
queue.enqueue("Eat it")

queue.dequeue()
