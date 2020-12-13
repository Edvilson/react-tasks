import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { TodoContextType } from '../contexts/TodoContextType';
import TodoListItem from './TodoListItem';

const TodoList = () => { 
    
    const { todos } = useContext<TodoContextType>(TodoContext);

    return (
       <table className="uk-table">
           <caption>Tasks List</caption>
           <thead>
               <tr>
                   <td>#</td>
                   <td>Task</td>
                   <td></td>
               </tr>
           </thead>
           <tbody>
               {
                   todos?.map(
                       todo => (<TodoListItem key={todo.id} todo={todo}></TodoListItem>)
                   )
               }
           </tbody>
       </table>       
    );
}

export default TodoList;