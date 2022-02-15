import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo';

class TodosContainer extends Component {

  renderTodos = () => this.props.todos.map((todo) => <Todo key={todo.id} text={todo} delete={this.props.delete} />)
  
  render() {
    return(
      <ol>
        {this.renderTodos()}
      </ol>
    );
  }
};
  
  const mapStateToProps = state => {
    return {
      todos: state.todos
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      delete: text => dispatch({type: "DELETE_TODO", payload: text})
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);