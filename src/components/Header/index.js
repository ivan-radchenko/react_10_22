import classnames from 'classnames';
import styles from './header.module.css'
import { Link } from 'react-router-dom';
import { Box, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'


export const Header = () => {

    let classNameFooter = classnames(styles.footer)
    let boxStyle = classnames(styles.box_style)
    let containerStyle = classnames(styles.container_style)
    let linkStyle = classnames(styles.link_style)


    return (
        <Container className={containerStyle}>
            <Box className={boxStyle}>
                <Link to="/" className={linkStyle} style={{ color: "#48ff00" }}> Вход / Регистрация</Link >
                <Link to='/chats' className={linkStyle} style={{ color: "#48ff00" }}>Список чатов</Link>
                <Link to='/profile' className={linkStyle} style={{ color: "#48ff00" }}> Личный кабинет</Link >
            </Box >
            <Outlet />
            <footer className={classNameFooter}>2022 Radchenko Ivan (c)</footer>
        </Container>

    )
}

