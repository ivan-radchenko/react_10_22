import React, {useContext} from 'react';
import Form from "./components/Form/Form";
import {GlobalContext} from "./context/GlobalContext";
import {useDispatch, useSelector} from "react-redux";
import {WithClasses} from "./HOC/WithClasses";
import List from "./components/List/List";
import {Link, useParams} from "react-router-dom";

const MessageListWithClasses = WithClasses(List)

export const Chat = () => {
    const {id} = useParams();
    const chatList = useSelector((store) => store.chatList)
    console.log(chatList)

    const { title } = useContext(GlobalContext)

    const inputs = useSelector((store) => store.postInputs)
    const dispatch = useDispatch()

    const handleInputs = (event) => {
        dispatch({ type: 'POST_TYPING', payload: { [event.target.name]: event.target.value } })
    }

    const handlerForm = (event) => {
        event.preventDefault()
        console.log('Submit form')

        const dataFromForm = {
            myId: Math.round(Math.random() * 99),
            title: inputs.title,
            text: inputs.text,
            likes: 0,
        }
        dispatch({ type: 'SET_POST', payload: dataFromForm })
        dispatch({ type: 'POST_CLEAR_INPUTS', payload: { title: '', text: '' } })
    }

    const removeChat = (chatList) => {
        dispatch({type:'DEL_CHAT',payload:chatList.id})
    }

    return(

        <div>
            <header>
                {chatList.map((item, index) =>
                    <div key={item.id}>
                        <Link to={`/chat/${item.id}`}>chat_{item.name}</Link>
                        <button onClick={()=>removeChat(chatList)}>remove</button>
                    </div>
                )}
            </header>
            <section>

                <div className="container">
                    <Form handlerForm={handlerForm} handleInputs={handleInputs} inputs={inputs} />
                    <h1>CHAT ID:{id}</h1>
                    <MessageListWithClasses title={title} />
                </div>
            </section>
        </div>
    )
}

export default Chat;