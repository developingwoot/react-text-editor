import React from 'react';
import ReactDOM from 'react-dom';

export default class Starter extends React.Component {
	render() {
		return (
			<div>HelloWorld</div>
		);
	}
}

ReactDOM.render(
  <Starter />,
  document.getElementById('content')
);