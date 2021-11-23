import './App.css';
import React from  'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

const GlobalStyle = createGlobalStyle`
  body {
    background: #6799FF;
  }
`

function App() {
  return (
    <>
    <GlobalStyle />
    <TodoTemplate>
      <TodoHeader />
      <TodoList />
    </TodoTemplate>
    </>
  );
}

export default App;
