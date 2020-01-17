- [ ] Why would you use class component over function components (removing hooks from the question)?

1a) You would use class components over function components when you need to add state to your components, meaning, setting up and manipulating a data object that your component might need. Function components are stateless and just accept data and display it.

- [ ] Name three lifecycle methods and their purposes.

2a) Three lifecycle methods are:
a) componentDidMount() -- invoked immediately after a component is inserted into a tree (mounted).
b) setState() -- changes component data and forces it to render.
c) componentWillUnmount -- last function to be called. After component is removed from the DOM you can use this to clean up data.

- [ ] What is the purpose of a custom hook?

3a) Custom hooks allow you to 'apply non-visual behavior and stateful logic throughout your components' by building your very own special hooks to reuse throughout your code. Super useful!


- [ ] Why is it important to test our apps?

4a) It is important to test our apps for a number of significant reasons mostly surrounding proper stewardship of your code within an ecosystem. Leaving behind meaningful tests shows other programmers looking at your code what you did while you were writing it and why certain bits of code may function in certain ways. It also gives them a paper trail so that, if they modify your code and break it seven ways from Sunday, they have something to backtrack to (or possibly improve upon and write a fantastic updated test for). Essentially, it is the programming version of the Campsite Rule (leave the campsite in a better shape than you found it). Additionally, testing your code ensures it is working how you think it should, and producing expected results. Doing small tests along the way will save a significant amount of time compared to writing out all your code and then retrofitting testing into it (or doing no testing at all and wondering why everything is broken and on fire).