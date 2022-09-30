import React from "react";
import Card from "../UI/Card";
import styles from './UserList.module.css'

const UserList=(props)=>{
    console.log(props)
    return  (
        <Card className={styles.users}>
    <ul>
        {props.users.map(user=>{
            return(
            <li key={user.userName}>
                {user.userName} ({user.userAge} years old)
            </li>
            )
        })
    }
    </ul>
        </Card>
    )
};

export default UserList;