import classNames from 'classnames/bind';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import images from '~/assets/images';
import video from '~/assets/video';
import ItemProduct from '~/components/ItemProduct';
import ProductItems from '~/components/ListProductItems';
import config from '~/config';
import styles from './Home.module.scss';

import { Col, Container, Row } from 'reactstrap';

const cx = classNames.bind(styles);

function Home() {
    const popularProductsItems = ProductItems.filter(
        (item) => item.popularProducts === 'true',
    );
    const bestSellingProductItems = ProductItems.filter(
        (item) => item.bestSellingProduct === 'true',
    );

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
    };
    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner1')}>
                <div className={cx('swiper')}>
                    <Swiper
                        grabCursor={true}
                        spaceBetween={0}
                        centeredSlides={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className={cx('img')}>
                                <img src={images.homeImg1} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={cx('img')}>
                                <img src={images.homeImg1} alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className={cx('banner2')}>
                <Container>
                    <Row>
                        <Col lg="6" md="6" className="mb-4">
                            <img
                                className={cx('img-banner2')}
                                src={images.homeImg3}
                                alt=""
                            />
                        </Col>
                        <Col lg="6" md="6" className="mb-4">
                            <img
                                className={cx('img-banner2')}
                                src={images.homeImg4}
                                alt=""
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={cx('store-address')}>
                <Container>
                    <Row>
                        <Col lg="4" className="mb-4">
                            <div className={cx('banner-item', 'wrap-img')}>
                                <div className={cx('info')}>
                                    <span>C?? s??? 3: S??ng C??ng Th??i Nguy??n</span>
                                </div>
                                <img className={cx('img')} src={images.homeImg5} alt="" />
                                <div className={cx('ov1')}></div>
                                <div className={cx('ov2')}></div>
                                <div className={cx('ov3')}></div>
                                <div className={cx('ov4')}></div>
                            </div>
                        </Col>
                        <Col lg="4" className="mb-4">
                            <div className={cx('banner-item', 'wrap-img')}>
                                <div className={cx('info')}>
                                    <span>
                                        C?? s??? 29 - Phan ????nh Ph??ng - TP Th??i Nguy??n
                                    </span>
                                </div>
                                <img className={cx('img')} src={images.homeImg6} alt="" />
                                <div className={cx('ov1')}></div>
                                <div className={cx('ov2')}></div>
                                <div className={cx('ov3')}></div>
                                <div className={cx('ov4')}></div>
                            </div>
                        </Col>

                        <Col lg="4" className="mb-4">
                            <div className={cx('banner-item', 'wrap-img')}>
                                <div className={cx('info')}>
                                    <span>C?? s??? 66 - Ph??? Y??n, Th??i Nguy??n</span>
                                </div>
                                <img className={cx('img')} src={images.homeImg7} alt="" />
                                <div className={cx('ov1')}></div>
                                <div className={cx('ov2')}></div>
                                <div className={cx('ov3')}></div>
                                <div className={cx('ov4')}></div>
                            </div>
                        </Col>

                        <Col lg="4" className="mb-4">
                            <div className={cx('banner-item', 'wrap-img')}>
                                <div className={cx('info')}>
                                    <span>C?? s??? 54 - TP Y??n B??i</span>
                                </div>
                                <img className={cx('img')} src={images.homeImg8} alt="" />
                                <div className={cx('ov1')}></div>
                                <div className={cx('ov2')}></div>
                                <div className={cx('ov3')}></div>
                                <div className={cx('ov4')}></div>
                            </div>
                        </Col>

                        <Col lg="4" className="mb-4">
                            <div className={cx('banner-item', 'wrap-img')}>
                                <div className={cx('info')}>
                                    <span>C?? s??? 69 - B??nh Ch??nh H??? Ch?? Minh</span>
                                </div>
                                <img className={cx('img')} src={images.homeImg9} alt="" />
                                <div className={cx('ov1')}></div>
                                <div className={cx('ov2')}></div>
                                <div className={cx('ov3')}></div>
                                <div className={cx('ov4')}></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={cx('popular-products')}>
                <h1 className={cx('header')}>Popular products</h1>
                <Container>
                    <Row>
                        {popularProductsItems.map((item) => (
                            <Col
                                lg="3"
                                md="4"
                                sm="6"
                                xs="6"
                                key={item.id}
                                className="mb-4"
                            >
                                <ItemProduct item={item} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            <div className={cx('best-selling-product')}>
                <Container>
                    <Row>
                        <Col lg="2" md="2">
                            <div className={cx('category')}>
                                <h1 className={cx('heading')}>Category</h1>
                                <div className={cx('list-category')}>
                                    <Link
                                        className={cx('item')}
                                        to={config.routes.outstanding}
                                    >
                                        Outstanding (
                                        {
                                            ProductItems.filter(
                                                (item) => item.outStanding === 'true',
                                            ).length
                                        }
                                        )
                                    </Link>
                                    <Link
                                        className={cx('item')}
                                        to={config.routes.coconutCream}
                                    >
                                        Coconut Cream (
                                        {
                                            ProductItems.filter(
                                                (item) => item.coconutCream === 'true',
                                            ).length
                                        }
                                        )
                                    </Link>
                                    <Link
                                        className={cx('item')}
                                        to={config.routes.drinks}
                                    >
                                        Drinks (
                                        {
                                            ProductItems.filter(
                                                (item) => item.drinks === 'true',
                                            ).length
                                        }
                                        )
                                    </Link>
                                    <Link
                                        className={cx('item')}
                                        to={config.routes.iceCreamCup}
                                    >
                                        Ice cream cup (
                                        {
                                            ProductItems.filter(
                                                (item) => item.iceCreamCup === 'true',
                                            ).length
                                        }
                                        )
                                    </Link>
                                    <Link
                                        className={cx('item')}
                                        to={config.routes.topping}
                                    >
                                        Topping (
                                        {
                                            ProductItems.filter(
                                                (item) => item.topping === 'true',
                                            ).length
                                        }
                                        )
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg="10" md="10">
                            <h1 className={cx('header')}>Best Selling Product</h1>
                            <div className={cx('list-best-selling-product')}>
                                <Row>
                                    {bestSellingProductItems.map((item) => (
                                        <Col
                                            xs="6"
                                            lg="3"
                                            md="3"
                                            sm="6"
                                            key={item.id}
                                            className="mb-4"
                                        >
                                            <ItemProduct item={item} />
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={cx('about-us')}>
                <h1 className={cx('header')}>About us</h1>
                <Container>
                    <div className={cx('wrap-about-us')}>
                        <div className={cx('description')}>
                            <h3 className={cx('heading')}>Cocoo - Kem d???a C??n ?????o</h3>
                            <div className={cx('content')}>
                                Xu???t ph??t t??? m???t th???c qu?? v???t d??n d?? mang h????ng v??? truy???n
                                th???ng t??? 80 n??m tr?????c t???i x??? d???a C??n ?????o,
                                <strong>Kem d???a COCOO </strong>xu???t hi???n t???i H?? N???i h???a
                                h???n s??? l?? m???t m??n gi???i kh??t C???C HOT m??a h?? n??y!
                            </div>
                        </div>
                        <div className={cx('video')}>
                            <video
                                src={video.video1}
                                controls="controls"
                                height="100%"
                                width="100%"
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Home;
