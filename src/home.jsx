import React, {useContext} from 'react';
import Form from "./components/Form/Form";
import {GlobalContext} from "./context/GlobalContext";
import {useDispatch, useSelector} from "react-redux";
import {WithClasses} from "./HOC/WithClasses";
import List from "./components/List/List";

const MessageListWithClasses = WithClasses(List)

export const Home = () => {

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

    return(
        <div>
            <section>
                <div className="container">
                    <Form handlerForm={handlerForm} handleInputs={handleInputs} inputs={inputs} />
                    <MessageListWithClasses title={title} />
                </div>
            </section>
        </div>
    )
}

export default Home;