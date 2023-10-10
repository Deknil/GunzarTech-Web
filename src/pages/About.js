import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import Logo from '../assets/logoWithBackground.png';
export default function About() {
    const handleClick = () => {
        scroll.scrollToTop({
            duration: 0,
            smooth: false,
        });
    };
    return (
        <>
            <Container
                className='d-flex flex-column min-vh-100'
                style={{ marginTop: 100 }}
            >
                <Row>
                    <Col
                        className='d-flex flex-column align-items-center'
                        style={{ marginBottom: 50 }}
                    >
                        <span
                            className='text-center fs-1 fw-bold title-text mb-3'
                            data-text='Наша история'
                        >
                            Наша история
                        </span>
                    </Col>
                </Row>
                <Row style={{ marginBottom: 50 }}>
                    <Col
                        lg={12}
                        md={12}
                        sm={12}
                        xl={12}
                        className='align-items-center'
                        style={{ textAlign: 'justify', marginBottom: 50 }}
                    >
                        <img
                            width={350}
                            src={Logo}
                            alt='Gunzar Logo'
                            id='AboutImg'
                            style={{
                                float: 'left',
                                marginRight: '80px',
                                marginBottom: '80px',
                            }}
                        />
                        <span style={{ clear: 'left' }}>
                            ООО «Гунзар» - это молодая и динамично развивающаяся
                            компания, которая была основана участниками
                            федерального проекта «Платформа университетского
                            технологического предпринимательства». Мы с
                            удовольствием можем сообщить, что наша компания
                            победила в грантовом конкурсе «Студенческий стартап»
                            от Фонда Содействия Инновациям.
                            <br />
                            <br />
                            Нашим ключевым проектом является «Умное зеркало
                            “SpecAR”» , который основан на объединении
                            существующих и разработке собственных инновационных
                            технологии в производство зеркал и программного
                            обеспечения. Мы верим, что наш продукт может сделать
                            жизнь людей легче и удобнее, и мы готовы воплотить
                            эту мечту в реальность.
                            <br />
                            <br />
                            Мы уверены, что с нашими инновационными продуктами и
                            командой талантливых специалистов, мы сможем достичь
                            успеха и стать ведущей компанией в нашем секторе. Мы
                            объединяем технологические инновации, креативные
                            идеи и высокие стандарты качества, чтобы создать
                            лучшее решение для наших клиентов.
                            <br />
                            <br />
                            Мы всегда открыты для сотрудничества и новых идей, и
                            мы всегда рады выслушать ваши пожелания и
                            предложения. Мы заинтересованы в развитии
                            долгосрочных и стабильных отношений с нашими
                            клиентами, партнерами и инвесторами.
                            <br />
                            <br />
                            Мы гордимся тем, что являемся частью ООО «Гунзар» и
                            мы всегда стремимся к успеху и развитию. Мы верим в
                            то, что с нашими усилиями и поддержкой наших
                            клиентов мы сможем достигнуть высот, о которых
                            мечтаем.
                        </span>
                    </Col>
                    <Col className='d-flex flex-column align-items-center'>
                        <Link
                            className='btn-outline-gunzar'
                            to='/contacts'
                            onClick={handleClick}
                        >
                            Связаться с нами
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
