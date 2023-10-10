import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

export default function NotFoundPage() {
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
                style={{ marginTop: 200 }}
            >
                <Row>
                    <Col
                        className='d-flex flex-column align-items-center'
                        style={{ marginBottom: 20 }}
                    >
                        <span
                            className='text-center fs-1 fw-bold title-text mb-3'
                            data-text='404'
                        >
                            404
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col
                        className='d-flex flex-column align-items-center'
                        style={{ marginBottom: 50 }}
                    >
                        <span className='text-center fs-1 mb-3' data-text='404'>
                            Данной страницы не существует!
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col
                        className='d-flex flex-column align-items-center'
                        style={{ marginBottom: 20 }}
                    >
                        <Link
                            className='btn-outline-gunzar'
                            to='/'
                            onClick={handleClick}
                        >
                            Вернуться на главную
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
