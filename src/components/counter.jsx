import React, { Component } from "react";
// contolled component , does not contain its own state
class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  // tags: [],
  // imageUrl: "https://picsum.photos/200", // generated random photos 200 x 200
  // };

  // conditional rendering
  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //   return (
  //     <ul>
  //       {/* rendering a list in reach: looping via map */}
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // // for events the () call is not needed in the jsx expression
  // // arrow function for binding event handlers!!
  // handleIncrement = (product) => {
  //   // updating the state
  //   this.setState({ value: this.state.value + 1 });
  // };

  // internally jsx expressions calls React.createElement() to generate the html
  // you would need a parent element
  // TO DO: research React.Fragment, replaces divs
  render() {
    console.log("counter-rendered");
    return (
      // <React.Fragment>
      <div>
        {/* {this.props.children} */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
      </div>
      // </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // object destructuring
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
