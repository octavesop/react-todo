import React from 'react';
import styled from 'styled-components';
import { useTodoState } from './TodoContext';

const TodoHeaderBlock = styled.div`
    padding: 30px;
    border-bottom: 1px solid #C4DEFF;
    
    h1 {
        margin: 0;
        font-size: 40px;
        color: #0B243B;
    }
    .day {
        margin-top: 4px;
        color: #888888;
        font-size: 25px;
    }
    .work {
        color: #666666;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

function TodoHeader() {
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done);
    
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const dayName = today.toLocaleDateString('ko-KR', {weekday: 'long'});

    return (
    <TodoHeaderBlock>
        <h1>{dateString}</h1>
        <div className="day">{dayName}</div>
        <div className="work">남은 일은 {undoneTasks.length}개입니다.</div>
    </TodoHeaderBlock>
    );
}

export default TodoHeader;