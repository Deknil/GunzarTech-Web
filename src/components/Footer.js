import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import logo from '../assets/logo512.png';
import { Icon } from '@iconify/react';

export default function Footer() {
    const handleClick = () => {
        scroll.scrollToTop({
            duration: 0,
            smooth: false,
        });
    };
    return (
        <div className='footer' style={{ background: '#1F1F1F' }}>
            <Container className='d-flex flex-column'>
                <Row className='mt-auto pt-3 pb-3'>
                    <Col
                        xl={5}
                        md={4}
                        sm={12}
                        className='d-flex flex-column align-items-center mb-3'
                    >
                        <Link
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
                                className='fw-bold fs-2'
                                style={{
                                    marginLeft: 25,
                                }}
                            >
                                Gunzar
                            </span>
                        </Link>
                    </Col>
                    <Col
                        xl={2}
                        md={2}
                        sm={3}
                        className='d-flex flex-column align-items-center align-items-md-start align-items-sm-start'
                    >
                        <span className='fw-bold mb-3'>Навигация</span>
                        <Link to='/' className='mb-3' onClick={handleClick}>
                            Главная
                        </Link>
                        <Link
                            to='/about'
                            className='mb-3'
                            onClick={handleClick}
                        >
                            О нас
                        </Link>
                        <Link
                            to='/products'
                            className='mb-3'
                            onClick={handleClick}
                        >
                            Продукты
                        </Link>
                        <Link
                            to='/contacts'
                            className='mb-3'
                            onClick={handleClick}
                        >
                            Контакты
                        </Link>
                    </Col>
                    <Col
                        xl={3}
                        md={3}
                        sm={5}
                        className='d-flex flex-column align-items-center align-items-md-start align-items-sm-start'
                    >
                        <span className='fw-bold mb-3'>Контакты</span>
                        <a href='tel:+79883689376' className='mb-3'>
                            +7 (988) 368-93-76
                        </a>
                        <a
                            href='mailto:gunzar@list.ru?subject=Заявка на обратную связь'
                            className='mb-3'
                        >
                            gunzar@list.ru
                        </a>
                        <Link
                            to='/policy'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='mb-3'
                            onClick={handleClick}
                        >
                            Политика конфиденциальности
                        </Link>
                    </Col>
                    <Col
                        xl={2}
                        md={3}
                        sm={4}
                        className='d-flex flex-column align-items-center align-items-md-start align-items-sm-start'
                    >
                        <span className='fw-bold mb-3'>Социальные сети</span>
                        <div>
                            <a
                                href='https://vk.com/gunzar'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='me-3'
                            >
                                <Icon className='fs-1' icon='uil:vk' />
                            </a>
                            <a
                                href='https://t.me/gunzartech'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='ms-3'
                            >
                                <Icon
                                    className='fs-1'
                                    icon='ic:baseline-telegram'
                                />
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col align='middle'>
                        <span className='mt-auto'>
                            2023 © Gunzar Technologies <br /> Все права
                            защищены.
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
