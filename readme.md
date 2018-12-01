#React Stepper Component

A simple react component to show to number of steps and current step the user is in.
Very easy to use and simple to integrate


![IN ACTION](https://i.ibb.co/2N3xjt4/Screenshot-2018-11-30-at-03-24-45.png)


```
import React, { Component } from 'react';
import Stepper from 'stepper-component'

class App extends Component {
  render() {
    return (
      <div>
        <Stepper steps={4} 
			currentStep={3}/>
      </div>
    );
  }
}
export default App;
```

### PROPS

The following is a list of optional props that stepper-component accepts

Name                | Description                                    | Example     |
--------------------|------------------------------------------------|-----------------------|
steps					| number of steps                                | steps={3}   |
currentStep		   | current step                                   | currentSteps={3}   |
px					   | container horizontal padding (in px)           | px={16}   |
py					   | container vertical padding (in px)             | py={12}   |
size					|  each circle size ( height & width ) (in px)   | size={20}   |
lineWidth			   | horizontal line's width (in px)                | px={16}   |

    
    
###Usescase

```
<Stepper 
	steps={4} 
	currentStep={3} 
	px={16} 
	py={12} 
	size={20} 
	lineWidth={30}/>
```



