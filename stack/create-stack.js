const createStack = () => {
  const stack = []

  return {
    push(item) {
      stack.push(item)
    },
    pop() {
      return stack.pop()
    },
    peek() {
      return stack[stack.length - 1]
    },
    get length() {
      return stack.length
    },
    isEmpty() {
      return stack.length === 0
    }
  }
}

// e.g.
const lowerBodyStack = createStack()

lowerBodyStack.push("pants")
lowerBodyStack.push("socks")
lowerBodyStack.push("trousers")
lowerBodyStack.push("shoes")

lowerBodyStack.pop()
lowerBodyStack.pop()
console.log(lowerBodyStack.length);
