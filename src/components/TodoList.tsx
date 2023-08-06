import React, { FC, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useAction';

const TodoList: FC = () => {
    const {page, error, loading, todos, limit} =useTypedSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useActions();
    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (loading) {
        return <h1>loading...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    
    return (
        <div>
            {todos.map(todo => 
                <div key={todo.id}>{todo.id} - {todo.title}</div>
            )}
            {pages.map(p => 
            <div style={{display: 'inline-block'}}>
                <div 
                    style={{border:p === page? '3px solid darkred' : '1px solid black', padding: '10px'}}
                    onClick={() => setTodoPage(p)}
                    key={p}>
                        {p}
                </div>
            </div>
            )}
        </div>
    );
};

export default TodoList;