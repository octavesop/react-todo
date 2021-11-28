import './App.css';
import React from  'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './components/TodoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #6799FF;
  }
`

function App() {
  return (
    <>
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHeader />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
    </>
  );
}

export default App;
