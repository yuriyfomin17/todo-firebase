import React, {useEffect, useState} from "react";
import './App.css'
import {Button, FormControl, InputLabel, Input} from '@material-ui/core';
import Todo from "./Todo";
import db from './Firebase'
import firebase from "firebase";


// firebase
// React
// TODO app
// deployed online
// Database

function App() {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')

    // when the app loads we need to listen to the database and fetch new todos as they get added /removed
    const addTodo = (event) => {
        // this  will fire when button will clicked
        event.preventDefault()
        // setTodos([...todos, input])
        db.collection('todos').add({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')
    }
    useEffect(() => {
        // this code fires when the app.js loads
        // collection in Firebase is simple array
        //snapshot.docs.map(doc => doc.data()) is array of objects

        db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
        })
    }, [])
    return (
        <div className="App">
            <h1>Hello world</h1>


            <form>
                <FormControl>
                    <InputLabel> write a todo</InputLabel>
                    <Input value={input} onChange={(e) => {
                        setInput(e.target.value)
                    }}/>
                </FormControl>
                <Button disabled={!input} onClick={addTodo} variant="contained" color="primary">
                    Add Todo
                </Button>
            </form>

            <ul>
                {todos.map(todo => (
                    <Todo key={todo.id} todo={todo.todo} id={todo.id}/>
                ))}
            </ul>
        </div>
    );
}

export default App;
