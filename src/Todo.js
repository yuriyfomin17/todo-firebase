import React, {useState} from 'react';
import './Todo.css'
import {List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Modal from '@material-ui/core/Modal';
import db from "./Firebase";

function Todo(props) {
    const {todo, id} = props
    const [open, setOpen] = useState(false)
    return (
        <>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
            >
                <div>
                    <h1>open</h1>
                    <button onClick={e=>setOpen(false)}>Close</button>
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

