import { React } from 'react';
import { SignForm } from "../../components/SignForm"
import { Link } from "react-router-dom"
import classnames from 'classnames';
import styles from './home.module.css'
import { logIn } from '../../services/firebase'
import { useState } from 'react'
import { Box } from '@mui/material';
import { selectAuth } from "../../store/profile/selectors"
import { useSelector } from 'react-redux';
import { logOut } from '../../services/firebase';
import { Button } from '@mui/material'
export const LoginRoute = () => {



    const authed = useSelector(selectAuth)
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSignIn = async (email, pass) => {
        setLoading(true)
        try {
            await logIn(email, pass)
            setLoading(false)
        }
        catch (err) {
            console.error(err)
            setErr(err.message)
        }
        finally {
            setLoading(false)
        }
    }
    const handleClickLogOut = async () => {
        setLoading(true)
        try {
            await logOut()
            setLoading(false)
        } catch (err) {
            console.error(err)
            setErr(err)
        } finally { setLoading(false) }
    }

    let classNames = classnames(styles.link, styles.margin);

    return (!authed ? <>

        <Box sx={{ height: 60, marginTop: "40px", color: "white", marginLeft: '20px', fontSize: '20px' }}>Вход:</Box>
        <SignForm onSubmit={handleSignIn} error={err} loading={loading} />
            <Link to="/signup" className={classNames}>Зарегистрироваться</Link>
    </> : <>
            <Box sx={{ height: 60, marginTop: "40px", color: "green", marginLeft: '20px', fontSize: '20px' }}>Авторизация успешна. Вам доступны чаты и личный кабинет.</Box>
            <Button sx={
                { display: 'flex', marginTop: '70px', marginLeft: '10px' }}
                onClick={handleClickLogOut}
                color="secondary" > Выйти из аккаунта  </Button>
        </>
    )
}

