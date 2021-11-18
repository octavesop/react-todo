import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    width: 35rem;
    height: 60rem;

    position: relative;
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px rgba(0,0,0,0.04);

    margin: 0 auto;

    margin-top: 10rem;
    display: flex;
    flex-direction: column;
`;

function TodoTemplate({ children }) {
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>
}

export default TodoTemplate;
