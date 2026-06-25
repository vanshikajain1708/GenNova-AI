function plannerAgent(prompt) {
  return `
1. Understand the problem: ${prompt}
2. Break it into smaller tasks.
3. Assign priorities.
4. Create an execution plan.
`;
}

module.exports = plannerAgent;