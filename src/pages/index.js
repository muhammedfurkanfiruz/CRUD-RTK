import { useSelector, useDispatch } from "react-redux";
import {
  addUser,
  deleteUser,
  updateUsername,
} from "../features/Users";
import { useState } from "react";





export default function Home() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");
  return (
    <div className="">
      <div className= "">
        <input
          type="text "
          placeholder="Name.."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text "
          placeholder="UserName.."
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            );
          }}
        >
          Add User
        </button>
        <button>deneme</button>
      </div>
      <div>
        {userList.map((user) => {
          return (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <h1>{user.username}</h1>
              <input
                type="text"
                placeholder="new user name"
                onChange={(e) => {
                  setNewUsername(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  dispatch(
                    updateUsername({ id: user.id, username: newUsername })
                  );
                }}
              >
                Update User
              </button>
              <button onClick={() => dispatch(deleteUser({ id: user.id }))}>
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
