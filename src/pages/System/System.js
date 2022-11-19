import classNames from 'classnames/bind';
import { useEffect } from 'react';
import Direction from '~/components/Direction';

import styles from './System.module.scss';

const cx = classNames.bind(styles);

function System() {
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
            <Direction title="System" />
            <div className="container">
                <div className="row">
                    <div className={cx('header-page')}>
                        <h1>System</h1>
                    </div>
                </div>
                <div className={cx('content')}>
                    <h2 className={cx('des')}>
                        COCOO STORE SYSTEM - CON DAO COCONUT CREAM
                    </h2>
                    <h2 className={cx('header-list')}>HA NOI</h2>
                    <ul className={cx('list-location')}>
                        <li>
                            <h2>Deadquarters : 48 Tố Hữu, Nam Từ Liêm, Hà Nội.</h2>
                        </li>
                        <li>
                            <h2>
                                Infrastructure 6: Liền kề TT2-02 IEC Tứ Hiệp, Thanh Trì,
                                Hà Nội
                            </h2>
                        </li>
                        <li>
                            <h2>Infrastructure 23: Ngã 3 Đại Áng, Thanh Trì, Hà Nội</h2>
                        </li>
                        <li>
                            <h2>
                                Infrastructure 25 : Đội 6, Thôn Bầu, Kim Chung, Đông Anh,
                                Hà Nội
                            </h2>
                        </li>
                        <li>
                            <h2>Infrastructure 32: 77 Lâm Hạ, Long Biên, Hà Nội</h2>
                        </li>
                        <li>
                            <h2>
                                Infrastructure 39 : Biệt thự 11-No05 KĐT Sài Đồng, Long
                                Biên, Hà Nội
                            </h2>
                        </li>
                        <li>
                            <h2>
                                Infrastructure 40 : SH5 Sunshine City, Đông Ngạc, Từ Liêm,
                                Hà Nội
                            </h2>
                        </li>
                        <li>
                            <h2>
                                Infrastructure 50 : Ngõ 157 Chùa Láng, Đống Đa, Hà Nội
                            </h2>
                        </li>
                        <li>
                            <h2>
                                Infrastructure 60 : SH01 Anland Complex KĐT Dương Nội, Hà
                                Đông, Hà Nội
                            </h2>
                        </li>
                        <li>
                            <h2>Infrastructure 62: 50 Duy Tân, Cầu Giấy, Hà Nội</h2>
                        </li>
                        <li>
                            <h2>
                                Infrastructure 64: KĐT Sóc Sơn, thị trấn Sóc Sơn, huyện
                                Sóc Sơn, Hà Nội
                            </h2>
                        </li>
                        <li>
                            <h2>
                                Infrastructure 74: Tổ 3 Dãy Chi Cục Thuế, Thị Trấn Đông
                                Anh, Hà Nội
                            </h2>
                        </li>
                        <li>
                            <h2>
                                Infrastructure 80: SỐ 40 DH05 Yên Sở - Hoài Đức - Hà Nội
                            </h2>
                        </li>
                        <li>
                            <h2>
                                Infrastructure 86: Khu chung cư Hà Hương, Liên Hà, Đông
                                Anh, Hà Nội
                            </h2>
                        </li>
                        <li>
                            <h2>
                                Infrastructure 89: Đối diện trường cấp 1B, Thạch Đà, Mê
                                Linh, Hà Nội
                            </h2>
                        </li>
                    </ul>
                    <h2 className={cx('header-list')}>HO CHI MINH CITY</h2>
                    <ul className={cx('list-location')}>
                        <li>
                            <h2>
                                {' '}
                                Infrastructure 26 : Chung cư Mizuki Floria, Q. Bình Chánh
                            </h2>
                        </li>
                        <li>
                            <h2>
                                {' '}
                                Infrastructure 55 : 401/18 - 401/20 Bình Lợi, Phường 13,
                                Quận Bình Thạnh
                            </h2>
                        </li>
                        <li>
                            <h2>
                                {' '}
                                Infrastructure 61: 796 Hương Lộ 2, Quận Bình Tân, TP. Hồ
                                Chí Minh
                            </h2>
                        </li>
                        <li>
                            <h2>
                                {' '}
                                Infrastructure 69: 70 đường 14C khu dân cư Phong Phú 4, Q.
                                Bình Chánh
                            </h2>
                        </li>
                        <li>
                            <h2>
                                {' '}
                                Infrastructure 93: S1.07.01.S10 Vinhomes Grand Park, P.
                                Long Thạch Mỹ, TP. Thủ Đức, TP. HCM
                            </h2>
                        </li>
                    </ul>
                    <h2 className={cx('header-list')}>Other province</h2>
                    <ul className={cx('list-location')}>
                        <li>
                            <h2> Cơ sở 8: 245 Nguyễn Cao, Thành phố Bắc Ninh</h2>
                        </li>
                        <li>
                            <h2>
                                {' '}
                                Cơ sở 11: Khu lưu niệm 6 điều Bác Hồ dạy, TT. Nhã Nam, Tân
                                Yên, Bắc Giang
                            </h2>
                        </li>
                        <li>
                            <h2>
                                {' '}
                                Cơ sở 15 : 39 Nguyễn Tất Thành, Thành Phố Yên Bái, tỉnh
                                Yên Bái
                            </h2>
                        </li>
                        <li>
                            <h2>
                                {' '}
                                Cơ sở 20 : Thiện Kế , Quang Khải, Bình Xuyên, Vĩnh Phúc
                            </h2>
                        </li>
                        <li>
                            <h2>Cơ sở 22 : thành phố Biên Hoà, Đồng Nai (coming soon)</h2>
                        </li>
                        <li>
                            <h2> Cơ sở 28 : Thị trấn Đông Thái, Vĩnh Bảo, Hải Phòng</h2>
                        </li>
                        <li>
                            <h2>
                                {' '}
                                Cơ sở 29 : 12 Hồ điều hoà Hoàng Ngân, thành phố Thái
                                Nguyên, Thái Nguyên
                            </h2>
                        </li>
                        <li>
                            <h2> Cơ sở 30 : Cổng thợ Quỳnh Côi, Quỳnh Phụ, Thái Bình</h2>
                        </li>
                        <li>
                            <h2>
                                {' '}
                                Cơ sở 33 : Nguyễn Du, Sầm Sơn, Thanh Hoá (coming soon)
                            </h2>
                        </li>
                        <li>
                            <h2> Cơ sở 35 : Tân Quang, Bắc Quang, Hà Giang</h2>
                        </li>
                        <li>
                            <h2> Cơ sở 42: Lịch Sơn, Cẩm Lý, Lục Nam, Bắc Giang</h2>
                        </li>
                        <li>
                            <h2>
                                {' '}
                                Cơ sở 45: Hoàng Hoa Thám - Mạo Khê- Đông Triều- Quảng Ninh
                            </h2>
                        </li>
                        <li>
                            <h2>
                                {' '}
                                Cơ sở 46 : Số 457, Tổ 4, Thị trấn Việt Quang, Bắc Quang,
                                Hà Giang
                            </h2>
                        </li>
                        <li>
                            <h2> Cơ sở 47 : Đồng Hới, Quảng Bình (coming soon)</h2>
                        </li>
                        <li>
                            <h2>
                                Cơ sở 54: 39 Nguyễn Tất Thành, P. Đồng Tâm, TP Yên Bái
                            </h2>
                        </li>
                        <li>
                            <h2>Cơ sở 58 : Thị trấn Hồ, Thuận Thành, Bắc Ninh</h2>
                        </li>
                        <li>
                            <h2>
                                Cơ sở 59 : Khu Phố 2, Thị trấn Hương Canh, Bình Xuyên,
                                Vĩnh Phúc.
                            </h2>
                        </li>
                        <li>
                            <h2>Cơ sở 58 : Thị trấn Hồ, Thuận Thành, Bắc Ninh</h2>
                        </li>
                        <li>
                            <h2>
                                {' '}
                                Cơ sở 59 : Khu Phố 2, Thị trấn Hương Canh, Bình Xuyên,
                                Vĩnh Phúc.
                            </h2>
                        </li>
                        <li>
                            <h2>
                                Cơ sở 65: 239 Nguyễn Văn Cừ, P. Hưng Bình, TP. Vinh, Nghệ
                                An
                            </h2>
                        </li>
                        <li>
                            <h2>
                                {' '}
                                Cơ sở 66: Số 818, TDP4, P. Ba Hàng, TP. Phổ Yên, Thái
                                Nguyên
                            </h2>
                        </li>
                        <li>
                            <h2>
                                {' '}
                                Cơ sở 68: Ngô Sĩ Liên, P. Kinh Bắc, TP. Bắc Ninh, Bắc Ninh
                            </h2>
                        </li>
                        <li>
                            <h2> Cơ sở 70: 25 Đinh Điền, P. Đông Thành, TP. Ninh Bình</h2>
                        </li>
                        <li>
                            <h2>
                                {' '}
                                Cơ sở 71: 43 Nguyễn Lương Bằng, Phúc Tân, Phúc Thành, TP
                                Ninh Bình
                            </h2>
                        </li>
                        <li>
                            <h2> Cơ sở 72: Thị Trấn An Châu, Sơn Động , Bắc Giang</h2>
                        </li>
                        <li>
                            <h2>
                                {' '}
                                Cơ sở 73: Khóm Phước Bình , P2 , Tx Duyên Hải , Trà Vinh
                            </h2>
                        </li>
                        <li>
                            <h2>
                                {' '}
                                Cơ sở 75: Số 10 Tổ 13 Đường Bình Thuận, Phường Tân Quang,
                                TP Tuyên Quang
                            </h2>
                        </li>
                        <li>
                            <h2> Cơ sở 76: Thị Trấn Gia Bình, Bắc Ninh (coming soon)</h2>
                        </li>
                        <li>
                            <h2>Cơ sở 77: TP. Buôn Mê Thuột, Đắc Lắc (coming soon)</h2>
                        </li>
                        <li>
                            <h2>
                                Cơ sở 79: 123 Trần Quốc Tuấn, Ngô Quyền, TP. Vĩnh Yên,
                                Vĩnh Phúc
                            </h2>
                        </li>
                        <li>
                            <h2> Cơ sở 81: Thị trấn Thổ Tang, Vĩnh Tường, Vĩnh Phúc</h2>
                        </li>
                        <li>
                            <h2>
                                Cơ sở 82: Thôn Vân Tra, Đường máng nước, Xã An Đồng, Huyện
                                An Dương, Thành Phố Hải Phòng&nbsp;
                            </h2>
                        </li>
                        <li>
                            <h2>
                                Cơ sở 83: 90-92 Lê Hồng Phong, Thành Phố Bắc Giang, Bắc
                                Giang
                            </h2>
                        </li>
                        <li>
                            <h2>
                                Cơ sở 85: CC1, Ecoriver, Thành Phố Hải Dương, Hải Dương
                            </h2>
                        </li>
                        <li>
                            <h2>
                                Cơ sở 87: Số 452 Trần Hưng Đạo Sao Đỏ Chí Linh Hải Dương
                            </h2>
                        </li>
                        <li>
                            <h2>
                                {' '}
                                Cơ sở 90: số 60 Lý Thái Tổ, Thị trấn Thứa, Lương Tài, Bắc
                                Ninh
                            </h2>
                        </li>
                        <li>
                            <h2>
                                {' '}
                                Cơ sở 91: số 55A Lê Quý Đôn, P. Nguyễn Trãi, TP. Hà Giang
                            </h2>
                        </li>
                        <li>
                            <h2>
                                {' '}
                                Cơ sở 94: Số 85 minh khai, thị trấn chũ, Lục Ngạn, Bắc
                                Giang
                            </h2>
                        </li>
                        <li>
                            <h2> Cơ sở 95: 32 Trần Nguyên Hãn, Thành phố Hải Dương</h2>
                        </li>
                        <li>
                            <h2>
                                {' '}
                                Cơ sở 96: Số 178 Quang trung, Phường Phạm Hồng Thái, Quận
                                Hồng Bàng, Hải phòng
                            </h2>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default System;
