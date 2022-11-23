import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './Home.module.scss';
import images from '~/assets/images';
import ItemProduct from '~/components/ItemProduct';
import video from '~/assets/video';
import ProductItems from '~/components/ListProductItems';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '~/config';

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
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img
                                className={cx('img-banner2')}
                                src={images.homeImg3}
                                alt=""
                            />
                        </div>
                        <div className="col-6">
                            <img
                                className={cx('img-banner2')}
                                src={images.homeImg4}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('store-address')}>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className={cx('banner-item', 'wrap-img')}>
                                <div className={cx('info')}>
                                    <span>Cơ sở 3: Sông Công Thái Nguyên</span>
                                </div>
                                <img className={cx('img')} src={images.homeImg5} alt="" />
                                <div className={cx('ov1')}></div>
                                <div className={cx('ov2')}></div>
                                <div className={cx('ov3')}></div>
                                <div className={cx('ov4')}></div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className={cx('banner-item', 'wrap-img')}>
                                <div className={cx('info')}>
                                    <span>
                                        Cơ sở 29 - Phan Đình Phùng - TP Thái Nguyên
                                    </span>
                                </div>
                                <img className={cx('img')} src={images.homeImg6} alt="" />
                                <div className={cx('ov1')}></div>
                                <div className={cx('ov2')}></div>
                                <div className={cx('ov3')}></div>
                                <div className={cx('ov4')}></div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className={cx('banner-item', 'wrap-img')}>
                                <div className={cx('info')}>
                                    <span>Cơ sở 66 - Phổ Yên, Thái Nguyên</span>
                                </div>
                                <img className={cx('img')} src={images.homeImg7} alt="" />
                                <div className={cx('ov1')}></div>
                                <div className={cx('ov2')}></div>
                                <div className={cx('ov3')}></div>
                                <div className={cx('ov4')}></div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className={cx('banner-item', 'wrap-img')}>
                                <div className={cx('info')}>
                                    <span>Cơ sở 54 - TP Yên Bái</span>
                                </div>
                                <img className={cx('img')} src={images.homeImg8} alt="" />
                                <div className={cx('ov1')}></div>
                                <div className={cx('ov2')}></div>
                                <div className={cx('ov3')}></div>
                                <div className={cx('ov4')}></div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className={cx('banner-item', 'wrap-img')}>
                                <div className={cx('info')}>
                                    <span>Cơ sở 69 - Bình Chánh Hồ Chí Minh</span>
                                </div>
                                <img className={cx('img')} src={images.homeImg9} alt="" />
                                <div className={cx('ov1')}></div>
                                <div className={cx('ov2')}></div>
                                <div className={cx('ov3')}></div>
                                <div className={cx('ov4')}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('popular-products')}>
                <h1 className={cx('header')}>Popular products</h1>
                <div className="container">
                    <div className="row">
                        {popularProductsItems.map((item) => (
                            <div className="col-3" key={item.id}>
                                <ItemProduct item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={cx('best-selling-product')}>
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <div className={cx('category')}>
                                <h1 className={cx('heading')}>Category</h1>
                                <div className={cx('list-category')}>
                                    <Link
                                        className={cx('item')}
                                        to={config.routes.outstanding}
                                    >
                                        Outstanding (7)
                                    </Link>
                                    <Link
                                        className={cx('item')}
                                        to={config.routes.coconutCream}
                                    >
                                        Coconut Cream (7)
                                    </Link>
                                    <Link
                                        className={cx('item')}
                                        to={config.routes.drinks}
                                    >
                                        Drinks (0)
                                    </Link>
                                    <Link
                                        className={cx('item')}
                                        to={config.routes.iceCreamCup}
                                    >
                                        Ice cream cup (7)
                                    </Link>
                                    <Link
                                        className={cx('item')}
                                        to={config.routes.topping}
                                    >
                                        Topping (7)
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-10">
                            <h1 className={cx('header')}>Best Selling Product</h1>
                            <div className={cx('list-best-selling-product')}>
                                <div className="row">
                                    {bestSellingProductItems.map((item) => (
                                        <div className="col-3" key={item.id}>
                                            <ItemProduct item={item} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('about-us')}>
                <h1 className={cx('header')}>About us</h1>
                <div className="container">
                    <div className={cx('wrap-about-us')}>
                        <div className={cx('description')}>
                            <h3 className={cx('heading')}>Cocoo - Kem dừa Côn Đảo</h3>
                            <div className={cx('content')}>
                                Xuất phát từ một thức quà vặt dân dã mang hương vị truyền
                                thống từ 80 năm trước tại xứ dừa Côn Đảo,
                                <strong>Kem dừa COCOO </strong>xuất hiện tại Hà Nội hứa
                                hẹn sẽ là một món giải khát CỰC HOT mùa hè này!
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
                </div>
            </div>
        </div>
    );
}

export default Home;
