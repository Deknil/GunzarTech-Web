import { Icon } from '@iconify/react/dist/iconify';
import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { animateScroll as scroll } from 'react-scroll';

import Logo from '../assets/logo512.png';
import Mirror from '../assets/mirror.png';

import REA from '../assets/rea.png';
import FASIE from '../assets/fasie.png';
import ReactInputMask from 'react-input-mask';

export default function Home() {
    const inputName = useRef(null);
    const inputPhone = useRef(null);
    const inputEmail = useRef(null);
    const inputCheckBox = useRef(null);

    const handleClick = () => {
        scroll.scrollToTop({
            duration: 0,
            smooth: false,
        });
    };

    const toParams = data => {
        const form_data = [];
        for (const key in data) {
            form_data.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        return form_data.join('&');
    };
    const handleFormSubmit = event => {
        event.preventDefault();
        const data = {
            access_token: 'gdlvtak4a7h1g2yu3mvbff4e',
            subject: 'GunzarTech | Запрос на обратную связь',
            text: `Пользователь ${inputName.current.value} (${inputEmail.current.value}) с номером телефона ${inputPhone.current.value} оставил заявку на обратную связь на сайте gunzar.tech`,
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
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        request.send(params);

        inputName.current.value = '';
        inputEmail.current.value = '';
        inputPhone.current.value = '';
        inputCheckBox.current.checked = false;
    };

    return (
        <>
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                    height: '980px',
                    zIndex: -2,

                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundImage: 'url("./assets/images/welcomeBackground.png")',
                }}
            ></div>
            <Container className='d-flex flex-column min-vh-100'>
                <div className='Section Section-Welcome'>
                    <Row className='Section-Welcome__helloMessage'>
                        <Col className='d-flex flex-column align-items-center'>
                            <span className='text-center fs-1'>
                                Строим цифровое будущее
                                <br /> <b>Создаем передовые технологии</b>
                                <br /> Расширяем возможности мира
                            </span>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: 200 }}>
                        <Col
                            md={12}
                            lg={6}
                            xl={6}
                            className='d-flex mb-4 flex-column align-items-lg-end align-items-xl-end align-items-sm-center align-items-md-center align-items-center'
                        >
                            <Link to='/about' className='btn btn-outline-gunzar' onClick={handleClick}>
                                Подробнее о нас
                            </Link>
                        </Col>
                        <Col
                            md={12}
                            xl={6}
                            lg={6}
                            className='d-flex flex-column align-items-lg-start align-items-xl-start align-items-sm-center align-items-md-center align-items-center'
                        >
                            <Link to='/products' className='btn btn-outline-gunzar' onClick={handleClick}>
                                Посмотреть каталог
                            </Link>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: 100 }}>
                        <Col>
                            <div className='d-flex flex-column align-items-center mouse-wave'>
                                <Icon icon='ic:outline-mouse' />
                                <Icon icon='material-symbols:keyboard-double-arrow-down-rounded' />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='Section' style={{ marginBottom: 100 }}>
                    <Row className='mt-5' style={{ marginBottom: 200 }}>
                        <Col lg={6} sm={12} md={6} className='d-flex flex-column align-items-center mb-5'>
                            <div id='HomeCardImg'>
                                <img src={Logo} width='350px' alt='GunzarLogo' />
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={6} className='d-flex flex-column'>
                            <span className='text-uppercase fw-bold fs-1' style={{ marginBottom: 40 }}>
                                Кто мы
                            </span>
                            <span
                                style={{
                                    marginBottom: 80,
                                    textAlign: 'justify',
                                }}
                            >
                                ООО «Гунзар» - молодая и крайне амбициозная компания, основанная при поддержке Фонда Содействия
                                Инновациям в рамках федерального проекта «Платформа университетского технологического
                                предпринимательства».
                                <br />
                                <br />
                                Мы занимаемся производством инновационной продукции с использованием передовых технологий, которая
                                позволит упростить быт.
                            </span>
                            <Link to='/about' className='btn btn-outline-gunzar btn-card' onClick={handleClick}>
                                Подробнее
                            </Link>
                        </Col>
                    </Row>
                    <Row className='mb-5 mt-5 d-flex flex-column-reverse flex-lg-row flex-md-row flex-sm-column-reverse'>
                        <Col sm={12} md={6} lg={6} className='d-flex flex-column'>
                            <span className='text-uppercase fw-bold fs-1' style={{ marginBottom: 40 }}>
                                Наши продукты
                            </span>
                            <span
                                style={{
                                    marginBottom: 80,
                                    textAlign: 'justify',
                                }}
                            >
                                Несмотря на недолгое существование компании, мы смогли заручиться поддержкой и привлечь инвестиции в
                                наш основной продукт - умное зеркало «SpecAR», которое использует передовые технологии, чтобы
                                предложить уникальный интерактивный опыт. Благодаря элегантному дизайну и инновационным функциям мы
                                уверены, что умное зеркало SpecAR изменит то, как люди видят себя и свое окружение.
                                <br />
                                <br />
                                Наша команда стремится к созданию наилучшего возможного продукта и предоставлению превосходного
                                обслуживания всем нашим клиентам.
                            </span>
                            <Link to='/products' className='btn btn-outline-gunzar btn-card' onClick={handleClick}>
                                Подробнее
                            </Link>
                        </Col>
                        <Col lg={6} sm={12} md={6} className='d-flex flex-column align-items-center mb-5'>
                            <div id='HomeCardImg'>
                                <img src={Mirror} width='250px' alt='GunzarLogo' />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='Section' style={{ marginBottom: 100 }}>
                    <Row>
                        <Col className='d-flex flex-column align-items-center'>
                            <span className='text-center fs-1 fw-bold title-text' data-text='Почему стоит выбрать нас?'>
                                Почему стоит выбрать нас?
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} xl={4} md={6} sm={12} className='d-flex flex-column align-items-center mb-5'>
                            <Icon icon='ph:brain-bold' className='advantage-icon mb-5' style={{ fontSize: 100 }} />
                            <span className='fw-bold fs-3 mb-4 text-center'>Передовые технологии</span>
                            <span className='fs-7 text-center'>
                                Наши проекты основаны на использовании последних достижений в области технологий, чтобы обеспечить
                                интерактивный и захватывающий опыт, не похожий ни на что, что вы видели раньше
                            </span>
                        </Col>
                        <Col lg={4} xl={4} md={6} sm={12} className='d-flex flex-column align-items-center  mb-5'>
                            <Icon icon='fluent:people-team-16-filled' className='advantage-icon mb-5' style={{ fontSize: 100 }} />
                            <span className='fw-bold fs-3 mb-4 text-center'>Надежная команда</span>
                            <span className='fs-7 text-center'>
                                Наша команда увлечена разработкой наилучшего продукта и обеспечением превосходного обслуживания
                                клиентов на каждом этапе
                            </span>
                        </Col>
                        <Col lg={4} xl={4} md={6} sm={12} className='d-flex flex-column align-items-center  mb-5'>
                            <Icon icon='material-symbols:avg-time' className='advantage-icon mb-5' style={{ fontSize: 100 }} />
                            <span className='fw-bold fs-3 mb-4 text-center'>Цели на будущее</span>
                            <span className='fs-7 text-center'>
                                Мы убеждены, что нужно идти на опережение и постоянно внедрять инновации, выбирая нас вы можете быть
                                уверены, что инвестируете в продукт, который выдержит испытание временем
                            </span>
                        </Col>
                        <Col lg={4} xl={4} md={6} sm={12} className='d-flex flex-column align-items-center  mb-5'>
                            <Icon icon='mdi:partnership' className='advantage-icon mb-5' style={{ fontSize: 100 }} />
                            <span className='fw-bold fs-3 mb-4 text-center'>Надежные партнеры</span>
                            <span className='fs-7 text-center'>
                                Нам удалось установить продуктивные партнерские отношения с поставщиками и инвесторами, благодаря этому
                                мы можем гарантировать, что наши продукты соотвутствуют стандартам даже самых требовательных клиентов
                            </span>
                        </Col>
                        <Col lg={4} xl={4} md={6} sm={12} className='d-flex flex-column align-items-center  mb-5'>
                            <Icon icon='material-symbols:design-services' className='advantage-icon mb-5' style={{ fontSize: 100 }} />
                            <span className='fw-bold fs-3 mb-4 text-center'>Дизайн</span>
                            <span className='fs-7 text-center'>
                                Мы уверены, что дизайн играет такую же важную роль, как и функциональность, поэтому наши продукты
                                разрабатываются с ориентацией на современный стиль и придерживаются лаконичных форм
                            </span>
                        </Col>
                        <Col lg={4} xl={4} md={6} sm={12} className='d-flex flex-column align-items-center  mb-5'>
                            <Icon icon='mdi:user-check' className='advantage-icon mb-5' style={{ fontSize: 100 }} />
                            <span className='fw-bold fs-3 mb-4 text-center'>Простота использования</span>
                            <span className='fs-7 text-center'>
                                Наши продукты разработаны таким образом, чтобы быть простыми и интуитивно понятными в использовании,
                                что делает их идеальным выбором для тех, кто ищет позитивный и беспроблемный опыт
                            </span>
                        </Col>
                    </Row>
                </div>
                <div className='Section' style={{ marginBottom: 100 }}>
                    <Row>
                        <Col className='d-flex flex-column align-items-center'>
                            <span className='text-center fs-1 fw-bold title-text' data-text='Наши партнеры'>
                                Наши партнеры
                            </span>
                        </Col>
                    </Row>
                    <Row className='d-flex'>
                        <Col
                            md={12}
                            lg={6}
                            xl={6}
                            className='d-flex flex-column align-items-lg-end align-items-xl-end align-items-sm-center align-items-md-center align-items-center'
                            style={{ marginBottom: 50 }}
                        >
                            <a href='https://new2.rea.ru/' target='_blank' rel='noopener noreferrer'>
                                <img src={REA} height={100} alt='REA' />
                            </a>
                        </Col>
                        <Col
                            md={12}
                            lg={6}
                            xl={6}
                            className='d-flex flex-column align-items-lg-start align-items-xl-start align-items-sm-center align-items-md-center align-items-center'
                        >
                            <a href='https://fasie.ru/' target='_blank' rel='noopener noreferrer'>
                                <img src={FASIE} height={100} alt='FASIE' />
                            </a>
                        </Col>
                    </Row>
                </div>
                <div className='Section'>
                    <Row>
                        <Col className='d-flex flex-column align-items-center'>
                            <span className='text-center fs-1 fw-bold title-text mb-3' data-text='Оставить заявку'>
                                Оставить заявку
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex flex-column align-items-center mb-5'>
                            <span className='text-center fs-5'>
                                Вы можете оставить заявку на подбор продукции под ваши личные нужды.
                            </span>
                            <span className='text-center fs-5'>
                                Менеджер свяжется с вами и проконсультирует по интересующим вопросам.
                            </span>
                        </Col>
                    </Row>

                    <form onSubmit={handleFormSubmit}>
                        <Row>
                            <Col lg={4} xl={4} md={4} sm={12} className='d-flex flex-column align-items-center mb-5'>
                                <input type='text' placeholder='Ваше имя *' name='name' ref={inputName} required />
                            </Col>
                            <Col lg={4} xl={4} md={4} sm={12} className='d-flex flex-column align-items-center mb-5'>
                                <input type='email' placeholder='Ваша почта *' name='email' ref={inputEmail} required />
                            </Col>
                            <Col lg={4} xl={4} md={4} sm={12} className='d-flex flex-column align-items-center mb-5'>
                                <ReactInputMask
                                    mask='+7 (999) 999-99-99'
                                    type='text'
                                    placeholder='+7 (___) ___-__-__ *'
                                    name='phone'
                                    ref={inputPhone}
                                    required
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col className='d-flex flex-column align-items-center mb-5'>
                                <label className='input-checkbox d-flex flex-row align-items-center'>
                                    <input type='checkbox' ref={inputCheckBox} required />
                                    <span className=''>
                                        Даю своё согласие на законную обработку персональных данных.
                                        <Link to='/policy' target='_blank' rel='noopener noreferrer'>
                                            Правила обработки.
                                        </Link>
                                    </span>
                                </label>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='d-flex flex-column align-items-center' style={{ marginBottom: 50 }}>
                                <input className='btn-submit' type='submit' title='Отправить' />
                            </Col>
                        </Row>
                    </form>
                </div>
            </Container>
        </>
    );
}
