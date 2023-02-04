# JavaScript
Readme for Animation Initial
This code contains a Loader class that has the ability to animate a string of dots ".", "..", "..." in the console. The animation runs for 5 seconds and stops when the time is up. The Loader class also has a load function which takes in a name argument and some optional args and runs the animation until it stops.

There's also a htmlWrapper function that returns a function that wraps a string in a given HTML tag.

The Shark class draws an animation of a shark swimming back and forth in the console. The animation runs for 10 seconds and stops when the time is up.

The code also implements the Factory pattern by defining a factory function which returns an instance of Loader class and sets its whenAnimationComplete property to a function that returns different objects based on the name argument passed to the load function.

To run the code, create an instance of the factory function and pass in the name argument and the necessary args based on the type of object you want to create.
