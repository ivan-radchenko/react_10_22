
import { Routes, Route } from 'react-router-dom'
import { ChatsList, Header } from '../../components'
import { ChatsRoutes } from '../ChatsRoutes'
import { LoginRoute } from '../LoginRoute'
import { Page404 } from '../Page404'
import { Profile } from '../Profile'
import { SignUp } from '../../components'
import { PrivatRoute } from "../PrivatRoute"
import { auth } from '../../services/firebase'
import { useDispatch } from "react-redux"
import { useEffect } from 'react'
import { signIn, signOut, } from '../../store/profile/actions'


export const ProjectRoutes = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        let unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(signIn())
            }
            else { dispatch(signOut()) }
        })

        return unsubscribe

    }, [])

    return (
        <Routes>
            <Route path='/' element={<Header />}>

                <Route index element={<LoginRoute />} />
                <Route path='signup' element={<SignUp />} />

                <Route path="chats" element={<PrivatRoute><ChatsList /></PrivatRoute>} />
                <Route path="chats/:chatId" element={<PrivatRoute><ChatsRoutes /></PrivatRoute>} />

                <Route exact path={"profile"} element={<PrivatRoute><Profile /></PrivatRoute>} />

                <Route path={"*"} element={<Page404 />} />

            </Route>
        </Routes>

    )
}