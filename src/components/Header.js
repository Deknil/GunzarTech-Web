import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { animateScroll as scroll } from 'react-scroll';

import logo from '../assets/logo512.png';

export default function Header() {
    const handleClick = () => {
        scroll.scrollToTop({
            duration: 0,
            smooth: false,
        });
    };
    return (
        <div className='header'>
            <Container className='d-flex flex-column'>
                <Navbar bg='dark' expand='lg'>
                    <Navbar.Brand>
                        <NavLink
                            to='/'
                            className='d-flex align-items-center'
                            onClick={handleClick}
                        >
                            <img
                                src={logo}
                                width='70'
                                height='auto'
                                className='d-inline-block align-center ms-25'
                                alt='Gunzar logo'
                            />
                            <span
                                className='fw-bold fs-1'
                                style={{
                                    marginLeft: 25,
                                }}
                            >
                                Gunzar
                            </span>
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls='Header_NavBar'
                        style={{
                            boxShadow: 'none',
                        }}
                    >
                        <Icon
                            icon='charm:menu-hamburger'
                            style={{
                                fontSize: 50,
                                boxShadow: 'none',
                            }}
                        />
                    </Navbar.Toggle>
                    <Navbar.Collapse id='Header_NavBar'>
                        <Nav className='ms-auto'>
                            <NavLink
                                to='/'
                                data-text='Главная'
                                className='me-3 text-uppercase'
                                style={{ fontSize: 18 }}
                                onClick={handleClick}
                            >
                                Главная
                            </NavLink>
                            <NavLink
                                to='/about'
                                data-text='О нас'
                                className='me-3 text-uppercase'
                                style={{ fontSize: 18 }}
                                onClick={handleClick}
                            >
                                О нас
                            </NavLink>
                            <NavLink
                                to='/products'
                                data-text='Продукты'
                                className='me-3 text-uppercase'
                                style={{ fontSize: 18 }}
                                onClick={handleClick}
                            >
                                Продукты
                            </NavLink>
                            <NavLink
                                to='/contacts'
                                data-text='Контакты'
                                className='text-uppercase'
                                style={{ fontSize: 18 }}
                                onClick={handleClick}
                            >
                                Контакты
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
}
