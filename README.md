# Getting Started with React Calendar Component
## Setup React Environment
The easiest way to start with React is to use create-react-app. To scaffold your project structure, follow the installation instructions.

	npm install -g create-react-app
	create-react-app my-app
	cd my-app
	npm start
	
## Preparation
Open src/App.js andsrc/App.css

Remove everything inside the App div tag in src/App.js:
<div className="App"> </div>
Remove the logo.svg import
Remove the contents of src/App.css
Remove src/logo.svg
## Setup the Calendar
Smart UI for React is distributed as smart-webcomponents-react NPM package
Download and install the package.
npm install smart-webcomponents-reactOnce installed, import the React Calendar Component and CSS files in your application and render it app.js

` import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Calendar } from 'smart-webcomponents-react/calendar';

class App extends React.Component {

	init() {

		// Your code here.
	}


	componentDidMount() {

	}

	render() {
		return (
			<div class="smart-demo-container">
				<template id="templateWithButtons">
					<Button ref="button" class="material flat">CANCEL</Button>
					<Button ref="button2" class="material flat">OK</Button>
				</template>
				<div id="materialPicker">
					<section>
						<h2>smartCalendar</h2>
						<div>
							<h2>Allow users to enter dates easily and visually. You can customize date formats, language, layout, animations, selection modes and much more with the smartCalendar.</h2>
							<div class="module"></div>
						</div>
					</section>
					<section id="datePickers">
						<h2>Date pickers</h2>
						<div class="module">
							<p>The selected day is indicated by a filled circle. The current day is indicated
			                        by a different color and type weight.</p>
							<p>Swipe left to right to navigate through the months. Touch the year in
			                        the title bar to transition to the year view.</p>
						</div>
						<div class="module">
							<div>
								<Calendar ref="calendar" selectionMode="one" view="portrait" hideOtherMonthDays
									viewSections={["title", "header", "footer"]} displayModeView="list"
									footerTemplate="templateWithButtons"></Calendar>
							</div>
							<br />
							<p>Date and year picker: portrait, month display mode</p>
						</div>
						<div class="module">
							<div>
								<Calendar ref="calendar2" selectionMode="one" view="portrait" hideOtherMonthDays
									viewSections={["title", "header", "footer"]} displayModeView="list"
									displayMode="decade" footerTemplate="templateWithButtons"></Calendar>
							</div>
							<br />
							<p>Date and year picker:portrait, decade display mode.</p>
						</div>
						<div class="module">
							<p>The picker has a landscape view as well to suite the different screen
			                        orientations.</p>
						</div>
						<div class="module">
							<Calendar ref="calendar3" selectionMode="one" view="landscape" hideOtherMonthDays
								viewSections={["title", "header", "footer"]} displayModeView="list"
								footerTemplate="templateWithButtons"></Calendar>
							<br />
							<p>Date picker: landscape, month display mode</p>
						</div>
						<div class="module">
							<Calendar ref="calendar4" selectionMode="one" view="landscape" hideOtherMonthDays
								viewSections={["title", "header", "footer"]} displayModeView="list"
								displayMode="decade" footerTemplate="templateWithButtons"></Calendar>
							<br />
							<p>Date picker: landscape, decade display mode.</p>
						</div>
					</section>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
`
## Running the React application
Start the app with
npm startand open localhost:3000 in your favorite web browser to see the output.
## Read more about using Smart UI for React: https://www.htmlelements.com/docs/react/.
