import React, {useEffect, useState} from 'react';
import axios from "axios";

const RecordForm = ({numList, setNumList}) => {
    const [num, setNum] = useState(0);

    return(
        <div>
            <div>현재 숫자 : {num}</div>
            <button onClick={()=>{setNum(num+1)}}>숫자 증가</button>
            <button onClick={()=>{setNum(num-1)}}>숫자 감소</button>
            <button onClick={()=>{setNum(0)}}>숫자 초기화</button>
            <hr/>
            <button onClick={()=>{setNumList([...numList, num])}}>숫자 기록</button>
            <button onClick={()=>{setNumList([])}}>숫자 초기화</button>
        </div>
    )
}

const RecordList = ({numList}) => {

    return (
        <div>
            <h2>기록된 숫자</h2>
            {numList.length > 0? <div>기록 있음</div> : <div>기록 없음</div>}
            <ul>
                {numList.map((num)=>(
                    <li>{num}</li>
                ))}
            </ul>
            <hr/>
        </div>
    )
}

const Input = () => {

    const [text, setText] = useState("111");
    const [edit, setEdit] = useState(false);


    let content = <div>
        {text}<button onClick={() => setEdit(true)}>수정</button>
    </div>

    if(edit) {
        content = <div>
            <input type="text" value={text} onChange={(e) => {
                setText(e.target.value)
            }} />
            <button onClick={() => {setEdit(false)}}>수정</button>
        </div>
    }
    return (
        <>
            {content}
        </>
    );
}
const TestComponent = () => {
    const [numList, setNumList] = useState([]);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function fetchData(){
            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
                setPosts(response.data);
            }catch(error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    return (
        <div style={{margin : "0 auto",
            width : "800px",
            textAlign : "center",
        }}>
            <RecordForm numList={numList} setNumList={setNumList}/>
            <RecordList numList={numList}/>
            <Input/>
            <hr />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <div>{post.title}</div>
                        <div><img src={post.thumbnailUrl}/></div>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default TestComponent;