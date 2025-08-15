import { useEffect, useState } from "react"
import styles from "./Card.module.css"

export const CardApi = ()=>{
    const [users,setUsers] = useState([])
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>{
        setUsers(data)
    })
    console.log(users)
},[])
    return(
        <>
        <div className={styles.cardContainerApi}>
            {
                users.map((user)=>(
                    <div className={styles.card} key={user.id}> 
                    <h3>{user.name}</h3>
                    <h3>{user.username}</h3>
                    <h3>{user.address.city}</h3>
                    <h3>{user.address.street}</h3>
                    <h3>{user.zipcode}</h3>
                    </div>
                ))
            }
        </div>
        </>
    )
}
