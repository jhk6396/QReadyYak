import React, {useEffect, useState} from 'react';
import axios from "axios";

const UserListComponent = () => {
    const [userList, setUserList] = useState();

    // useEffect(()=> {
    //     async function fetchUser(){
    //         try{
    //             const response = await axios.get('/user')
    //             setUserList(response.data);
    //         }catch(error) {
    //             console.log(error);
    //         }
    //     }
    //     fetchUser();
    // }, []);

    return (
        <div>
            <h2>사용자 화면</h2>
            <button>사용자 추가</button>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>UserName</th>
                    <th>Age</th>
                    <th>Salary</th>
                </tr>
                </thead>
                <tbody>
                {/*UserList map*/}
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
                </tbody>
            </table>
        </div>
    );
}

export default UserListComponent;