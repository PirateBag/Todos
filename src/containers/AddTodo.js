import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { addTodoWithSummary } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input
    let description
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        if (description.value.trim() ) {
            dispatch(addTodo(input.value)) }
        else { dispatch( addTodoWithSummary(
            { text: input.value, summary : description.value } ) ) }

        input.value = ''
        description.value = '';
      }}>
        <input ref={node => input = node} />
        <input ref={node => description = node } />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
