# react-toogle
Simple React Toogle component

## Demo
[Live demo](https://carlos-dev.github.io/react-toogle)

## Getting Started
### Installation
```
npm install react-toggle --save
```
## Usage
### Component
```javascript
import React, { Component } from 'react';
import { Toogle } from 'react-toogle';

class MyComponent extends Component {
	handleChange(checked){
		console.log(checked);
	}

	render(){
		return (
			<div>
				<Toogle
					defaultValue={true}
					onChange={this.handleChange}
				/>
			</div>
		)
	}
}

```
### Options
| name | type | default value |
| ---
| className | string | 'toogle'
| defaultValue | boolean | false
| onChange | function | null

## Style
The styling is completely separated from the component in order to make easy to integrate with the styling of your app. Create your css taking into account this tree:

```
|-- toogle toogle--checked
    |-- toogle__left
    |-- toogle__center
    |-- toogle__right
```
Notes:
- "toogle" can be replaced by className prop
- toogle--checked is only present when is toggled

However, you can use one of the stylesheets provided in [style folder](https://github.com/carlos-dev/react-toogle/tree/master/style)
```
require('node_modules/react-toogle/style/android.css')
```
more styles coming soon
