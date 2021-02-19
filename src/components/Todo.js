import React from 'react'
import PropTypes from 'prop-types'

const Todo = ( todo ) => (

    <li
        onClick={true}
        style={{
            textDecoration: todo.completed ? 'line-through' : 'none'
        }}
    >
            {typeof todo.text === 'string' ? todo.text : 'object was found'}
        {typeof todo.summary === 'string' ? todo.summary : 'object was found'}
    </li>
)

Todo.propTypes = {
  /* lick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
     summary: PropTypes.string.isRequired

   */
  todo: PropTypes.object.isRequired
}

export default Todo
