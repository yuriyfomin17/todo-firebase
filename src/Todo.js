import React, {useState} from 'react';
import './Todo.css'
import {List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Modal from '@material-ui/core/Modal';
import db from "./Firebase";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Todo(props) {
    const classes = useStyles()
    const {todo, id} = props
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState('')
    const updateTodo = () => {
        // update the todo with the new input text
        db.collection('todos').doc(id).set({
            todo:input
        }, {merge: true})
        setInput('')
        setOpen(false)
    }
    return (
        <>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
            >
                <div className={classes.paper}>
                    <h1>open</h1>
                    <input placeholder={todo} value={input} onChange={e => setInput(e.target.value)}/>
                    <button onClick={updateTodo}>Update Todo</button>
                </div>
            </Modal>
            <List>
                <ListItem className='todo_list'>
                    <ListItemAvatar>

                    </ListItemAvatar>
                    <ListItemText primary={todo} secondary="dummy deadline"/>
                </ListItem>
                <button onClick={e => setOpen(true)}>Edit</button>
                <DeleteForeverIcon onClick={event => db.collection('todos').doc(id).delete()}/>


            </List>
        </>
    );
}

export default Todo;

