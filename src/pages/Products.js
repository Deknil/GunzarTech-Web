import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import Product from '../assets/mirror.png';

export default function Products() {
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
                        style={{ marginBottom: 20 }}
                    >
                        <span
                            className='text-center fs-1 fw-bold title-text mb-1'
                            data-text='Наши продукты'
                        >
                            Наши продукты
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col
                        className='d-flex flex-column align-items-center'
                        style={{ marginBottom: 50 }}
                    >
                        <span className='text-center fs-5 mb-3'>
                            Здесь вы можете просмотреть продукцию,
                            разрабатываемую нашей компанией
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
                        <div id='ProductImg'>
                            <img
                                height={450}
                                src={Product}
                                alt='Mirror SpecAR'
                                style={{
                                    float: 'left',
                                    marginRight: '150px',
                                    marginBottom: '80px',
                                    transform: 'matrix(-1, 0, 0, 1, 0, 0)',
                                }}
                            />
                        </div>

                        <span style={{ clear: 'left' }}>
                            <span className='fw-bold fs-1'>
                                Умное зеркало «
                                <span style={{ color: '#00d097' }}>SpecAR</span>
                                »
                            </span>
                            <br />
                            <br />
                            Принцип работы устройства заключается в анализе
                            данных из окружающей среды, других умных устройств и
                            обработке речи человека. В зависимости от
                            потребностей пользователя, на рабочую поверхность
                            зеркала выводится необходимая ему информация,
                            инфографика и изображение с камер, скорректированное
                            посредством дополненной реальностью.
                            <br />
                            <br />
                            Благодаря фирменному программному обеспечению у Вас
                            появится возможность сформировать собственные
                            пользовательские профили, которые будут хранить
                            только ту информацию (полученную из соц. сетей,
                            новостей, аккаунтов других умных устройств и т.п.) и
                            те настройки, которые непосредственно относятся к
                            создателю профиля. Система распознавания лиц
                            позволит быстро их переключать в зависимости от
                            того, кто стоит перед зеркалом.
                            <br />
                            <br />
                            Кроме этого, у Вас появится возможность, буквально
                            не выходя из дома, примерять и формировать заказы
                            элементов гардероба из различных магазинов в режиме
                            реального времени посредством технологий дополненной
                            реальности. А также ряд других встроенных приложений
                            позволит упростить ежедневный уход за Вашим внешним
                            видом, предоставит комплексный анализ и предложит
                            персональные рекомендации. Они даже покажут Вам, как
                            правильно наносить продукты, используя визуальные
                            руководства, наложенные на ваше отражение.
                            <br />
                            <br />
                            Но это еще не все - зеркало также имеет встроенного
                            голосового помощника, который может ответить на
                            любые ваши вопросы и предоставить дополнительные
                            советы и рекомендации. И если у вас заканчивается
                            определенный продукт, вы можете легко изменить его
                            заказав через интерфейс зеркала. мечтаем.
                            <br />
                            <br />
                            <span
                                className='fs-10'
                                style={{ color: '#00d097' }}
                            >
                                * На фотографии сгенерированная 3D-модель
                                продукта, актуальную информацию можно узнать у
                                менеджера
                            </span>
                            <br />
                            <br />
                            <span className='fw-bold'>Цена: </span>
                            рассчитывается индивидуально по размерам зеркала и
                            дополнительным модификациям
                        </span>
                    </Col>
                    <Col className='d-flex flex-column align-items-center'>
                        <Link
                            className='btn-outline-gunzar'
                            to='/contacts'
                            onClick={handleClick}
                        >
                            Рассчитать цену
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
