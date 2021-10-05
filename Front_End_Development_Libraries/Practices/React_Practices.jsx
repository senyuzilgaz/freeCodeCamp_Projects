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

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        < ChildComponent />
      </div>
    );
  }
};

const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      <TypesOfFruit />
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
      </div>
    );
  }
};
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        <NonCitrus />
        <Citrus />
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
};
class MyComponent extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
    <div>
      <h1>My First React Component!</h1>
    </div>
    );
  };
};
const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date}</p>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()} />
      </div>
    );
  }
};
const List = (props) => {

  return <p>{props.tasks.join(', ')}</p>

};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>

        <List tasks={["fistik","selen"]} />

        <h2>Tomorrow</h2>

        <List tasks={["selen","fistik","ilgaz"]}/>

      </div>
    );
  }
};

const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
ShoppingCart.defaultProps = {items: 0, user: "ilgazsenyuz", topic: "React"};

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return <Items quantity={10}/>

  }
};
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

Items.propTypes = {
  quantity: PropTypes.number.isRequired
            
  };

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
ReactDOM.render(JSX, document.getElementById("challenge-node"));
ReactDOM.render(<TypesOfFood />,document.getElementById('challenge-node'));