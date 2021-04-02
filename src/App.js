import 'smart-webcomponents-react/source/styles/smart.default.css';
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
	