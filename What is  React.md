# What is React?
## Definition
React is a JavaScript library to build UI efficient and flexible. With 'components' (the small and isolated pieces of code), it can be used to compose complex UI.

Starting from React.Component subclasses with an example:
    
    class ShoppingList extends React.Component { 
    //ShoppingList is a React component class (or type)
    	//A component returns a hierarchy of views to display, via render()
		render (){
			//render() returns a React element (JSX, a description of UI). 
			//This element is used for React to display
			return (
			//<div /> syntax is transformed at build time to React.createElement('div')
			<div className="shopping-list">
				//A component, this, takes props (properties) as parameters
				<h1>Shopping List for {this.props.name}</h1>
				<ul>
					<li>Instagram</li>
					<li>WhatsApp</li>
					<li>Oculus</li>
				</ul>
			</div>
			);
		}
	}
	
JSX comes with full power of JavaScript. Custom React components can also be rendered.

## Inspecting starter code
Starter code for tic-tac-toe game is recorded in [src/index.js](https://github.com/slclei/LearnReact/tree/master/src). 

Buid local host for react with [npm start](https://www.w3schools.com/react/default.asp). 

Code is stored in [my-react-app-name]() with my own commone during study. Some key points are listed here.

## Immutability
Data can be changed with mutation (directly), or without mutation (replace data with a new desired copy).

Reasons: 1 complex features become simple. Previous versions of data could be reused.

2 detecting changes. 

3 based on 2, it is easy to determing when to re-render in react. Build pure components.

Lift state up: use parent component to store array of child component state, like array of squares in Board, and history array of boards in Game.


