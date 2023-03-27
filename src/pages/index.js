
import { useSelector, useDispatch } from "react-redux"
import { addUser } from "./features/Users"




export default function Home() {
  const dispatch = useDispatch()
  const userList = useSelector((state)=> state.users.value)
 return <>
      <div>
        <input type='text ' placeholder="Name.." />
        <input type='text ' placeholder="UserName.." />
        <button onClick={()=>{
          dispatch(addUser({}))
        }} >Add User</button>
      </div>
      <div>
        {userList.map((user)=> {
          return <div key={user.id}>
          <h1>{user.name}</h1>
          <h1>{user.username}</h1>
          </div>
        })}
      </div>
 </>
}
