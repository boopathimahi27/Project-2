import React, { useState } from "react";
import Card from '../UI/Card';
import classes from  './AddUsers.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser=(props)=>{

    const[enteredName,setEnteredName]=useState('')
    const[enteredAge,setEenteredAge]=useState('')
    const[contentForModal,setContentForModal]=useState('')
    const[modalOpen,setModalOpen]=useState(false)
    const modalStateChange=(currentStatus)=>{
        setModalOpen(false)
    }
    const addUserHandler=(e)=>{
        e.preventDefault();
        
        if (enteredName.trim().length===0 ){
            setContentForModal({title:'Tell me a title',message:'Please Enter a valid Name and Age'})
            setModalOpen(true)
            return
            
        }
        if (+enteredAge<0 || !enteredAge){
            setContentForModal({title:'Tell me a title',message:' Please enter Age in positive'})
            setModalOpen(true)
            return
        }
   
        props.gettingUser({userName:enteredName,userAge:enteredAge})
        setEnteredName('')
        setEenteredAge('')
        
    }
    const usernameChangeHandler=(event)=>{
        setEnteredName(event.target.value)
    }
    const ageChangeHandler=(event)=>{
        setEenteredAge(event.target.value)
    }


    return(
    <div>
        {modalOpen&&<ErrorModal message={contentForModal.message} onChange={modalStateChange} title={contentForModal.title}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id='username' type='text' placeholder="Name" value={enteredName} onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age</label>
                <input id='age' type='number' placeholder="Age" value={enteredAge} onChange={ageChangeHandler}/>
                <Button type="submit" name='Add User' onClick={addUserHandler}>Add User</Button>
            </form>
        </Card>
    </div>
    )
  
};

export default AddUser;