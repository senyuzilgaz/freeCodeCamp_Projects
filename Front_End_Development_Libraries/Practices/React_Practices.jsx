{/* This is 
    How you add comments */}
const JSX = <div id="wrapper">
                <h1> Hi!</h1>
                <p> Here are 3 things that I love</p>
                <ul>
                  <li> Playing Chess   </li>
                  <li> Learning New Stuff  </li>
                  <li> Watching Films  </li>
                </ul>
            </div>
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  
    return (
      <div>
        <h1>Hello React! </h1>
      </div>
    );
  }
};

const MyComponent = function() {

  return ( <div> I have created component </div>);
};

ReactDOM.render(JSX, document.getElementById("challenge-node"));