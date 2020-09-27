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
Starter code is recorded in [src/index.js](). 



