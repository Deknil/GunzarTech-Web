import { Icon } from '@iconify/react/dist/iconify';
import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactInputMask from 'react-input-mask';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Contacts() {
    const inputName = useRef(null);
    const inputPhone = useRef(null);
    const inputEmail = useRef(null);
    const inputOrganization = useRef(null);
    const inputMessage = useRef(null);
    const inputCheckBox = useRef(null);

    const toParams = data => {
        const form_data = [];
        for (const key in data) {
            form_data.push(
                encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
            );
        }
        return form_data.join('&');
    };
    const handleFormSubmit = event => {
        event.preventDefault();

        const data = {
            access_token: 'gdlvtak4a7h1g2yu3mvbff4e',
            subject: 'GunzarTech | Запрос на обратную связь',
            text: `Пользователь ${inputName.current.value} (${inputEmail.current.value}) с номером телефона ${inputPhone.current.value} оставил заявку на обратную связь на сайте gunzar.tech\n
            Организация пользователя: ${inputOrganization.current.value}\n
            Оставленное сообщение: ${inputMessage.current.value}\n
            `,
        };
        const request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    toast.success('Заявка успешно отправлена!');
                } else {
                    toast.error('Возникла ошибка, повторите отправку!');
                }
            }
        };

        const params = toParams(data);

        request.open('POST', 'https://postmail.invotes.com/send', true);
        request.setRequestHeader(
            'Content-type',
            'application/x-www-form-urlencoded'
        );
        request.send(params);

        inputName.current.value = '';
        inputEmail.current.value = '';
        inputPhone.current.value = '';
        inputOrganization.current.value = '';
        inputMessage.current.value = '';
        inputCheckBox.current.checked = false;
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
                            data-text='Связь с нами'
                        >
                            Связь с нами
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col
                        lg={6}
                        xl={6}
                        md={6}
                        sm={12}
                        className='d-flex flex-column mb-5'
                    >
                        <Row className='d-flex flex-column'>
                            <Col className='d-flex flex-column align-items-center align-items-md-start align-items-sm-start'>
                                <span className='fw-bold mb-3'>Реквизиты</span>
                                <span className='mb-3'>ООО «Гунзар»</span>
                                <span className='mb-3'>ИНН: 2370012438</span>
                                <span className='mb-3'>КПП: 237001001</span>
                                <span className='mb-3'>
                                    ОГРН: 1222300039774
                                </span>
                            </Col>
                            <Col className='d-flex flex-column align-items-center align-items-md-start align-items-sm-start'>
                                <span className='fw-bold mb-3'>Контакты</span>
                                <a
                                    href='tel:+79883689376'
                                    className='mb-3 d-flex flex-row align-items-center'
                                >
                                    <Icon
                                        className='fs-3 me-3'
                                        icon='material-symbols:phone-in-talk-rounded'
                                    />
                                    <span>+7 (988) 368-93-76</span>
                                </a>
                                <a
                                    href='mailto:gunzar@list.ru?subject=Заявка на обратную связь'
                                    className='mb-3 d-flex flex-row  align-items-center'
                                >
                                    <Icon
                                        className='fs-3 me-3'
                                        icon='material-symbols:attach-email'
                                    />
                                    <span>gunzar@list.ru</span>
                                </a>
                            </Col>
                            <Col className='d-flex flex-column align-items-center align-items-md-start align-items-sm-start'>
                                <span className='fw-bold mb-3'>
                                    Социальные сети
                                </span>
                                <div className='d-flex flex-row'>
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
                    </Col>
                    <Col
                        lg={6}
                        xl={6}
                        md={6}
                        sm={12}
                        className='d-flex flex-column align-items-center'
                    >
                        <form onSubmit={handleFormSubmit}>
                            <Row className='d-flex flex-column align-items-center'>
                                <Col
                                    lg={12}
                                    xl={12}
                                    md={12}
                                    sm={12}
                                    className='d-flex flex-column align-items-center mb-5'
                                >
                                    <input
                                        type='text'
                                        placeholder='Ваше имя *'
                                        name='name'
                                        ref={inputName}
                                        required
                                    />
                                </Col>
                                <Col
                                    lg={12}
                                    xl={12}
                                    md={12}
                                    sm={12}
                                    className='d-flex flex-column align-items-center mb-5'
                                >
                                    <input
                                        type='email'
                                        placeholder='Ваша почта *'
                                        name='email'
                                        ref={inputEmail}
                                        required
                                    />
                                </Col>
                                <Col
                                    lg={12}
                                    xl={12}
                                    md={12}
                                    sm={12}
                                    className='d-flex flex-column align-items-center mb-5'
                                >
                                    <ReactInputMask
                                        mask='+7 (999) 999-99-99'
                                        type='text'
                                        placeholder='+7 (___) ___-__-__ *'
                                        name='phone'
                                        ref={inputPhone}
                                        required
                                    />
                                </Col>
                                <Col
                                    lg={12}
                                    xl={12}
                                    md={12}
                                    sm={12}
                                    className='d-flex flex-column align-items-center mb-5'
                                >
                                    <input
                                        type='text'
                                        placeholder='Ваша организация'
                                        ref={inputOrganization}
                                        name='organization'
                                    />
                                </Col>
                                <Col
                                    lg={12}
                                    xl={12}
                                    md={12}
                                    sm={12}
                                    className='d-flex flex-column align-items-center mb-5'
                                >
                                    <textarea
                                        placeholder='Ваше сообщение *'
                                        name='message'
                                        required
                                        ref={inputMessage}
                                        style={{ minHeight: 200 }}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col className='d-flex flex-column align-items-center mb-5'>
                                    <label className='input-checkbox d-flex flex-row align-items-center'>
                                        <input
                                            type='checkbox'
                                            required
                                            ref={inputCheckBox}
                                        />
                                        <span className=''>
                                            Даю своё согласие на законную
                                            обработку персональных данных.
                                            <Link
                                                to='/policy'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                Правила обработки.
                                            </Link>
                                        </span>
                                    </label>
                                </Col>
                            </Row>
                            <Row>
                                <Col
                                    className='d-flex flex-column align-items-center'
                                    style={{ marginBottom: 50 }}
                                >
                                    <input
                                        className='btn-submit'
                                        type='submit'
                                        title='Отправить'
                                    />
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
