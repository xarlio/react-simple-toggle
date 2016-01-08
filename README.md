# react-toogle
Simple React Toogle component

## Demo
[Live demo](https://carlos-dev.github.io/react-toogle)

## Getting Started
### Installation
## Usage
```javascript
import React, { Component } from 'react';
import { Toogle } from 'react-toogle';

class MyComponent extends Component {
	handleChange(value){
		console.log(value);
	}

	render(){
		return (
			<div>
				<Toogle
					onChange={this.handleSelect}
				/>
			</div>
		)
	}
}

```
