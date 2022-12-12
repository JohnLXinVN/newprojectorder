import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { Container } from 'reactstrap';
import Direction from '~/components/Direction';

import styles from './Introduce.module.scss';

const cx = classNames.bind(styles);

function Introduce() {
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
            <Direction title="Introduce" />
            <div className={cx('page')}>
                <Container>
                    <div className={cx('header-page')}>
                        <h1>Introduce</h1>
                    </div>
                    <div className={cx('content-page')}>
                        <h3>COCOO - Thương hiệu kem dừa đươc yêu thích nhất !</h3>
                        <p>
                            Xuất phát từ một thức quà vặt dân dã mang hương vị truyền
                            thống từ 80 năm trước tại xứ dừa Côn Đảo,{' '}
                            <b>Kem dừa COCOO </b>xuất hiện tại Hà Nội hứa hẹn sẽ là một
                            món giải khát CỰC HOT mùa hè này! Vị ngọt thanh từ nước dừa,
                            chút bùi bùi của lớp cùi non, hòa cùng những viên kem béo thơm
                            ngậy cốt, ăn kèm chút topping ngọt ngào như dừa khô, quả sơ ri
                            mọng đỏ hay chút xôi dẻo mềm, tất cả hòa quyện tạo thành một
                            hương vị đặc biệt của ngày bé thơ.
                        </p>
                        <p>
                            Có thể nói sản phẩm của <b>COCOO</b> giống như một làn gió
                            tươi mới thổi vào Hà Nội khi các món trà sữa hay sữa chua trân
                            châu đã trở nên quá quen thuộc. Được làm từ dừa tươi, hương vị
                            kem được giữ nguyên vẹn nhờ cách chế biến hoàn toàn thủ công:
                            hương vị tươi mát, thơm vị dừa mà không hề gây cảm giác béo
                            ngấy khó chịu.
                        </p>

                        <p>
                            Trong khi các loại kem bình thường đều quá đậm mùi kem, ngọt
                            vị sữa, thì kem dừa COCOO giữ được gần như nguyên vẹn hương vị
                            dừa đặc biệt tươi mát, bên cạnh đó vẫn bảo trì được kết cấu
                            mềm mịn không hề dăm đá. Kem tại cửa hàng cũng được trình bày
                            trong vỏ quả dừa tươi được chọn lựa kỹ càng, hoàn toàn có thể
                            khiến thực khách an tâm từ phần nhìn bề ngoài cho đến hương vị
                            bên trong.
                        </p>
                        <p>
                            Từng viên kem trắng ngần được đặt trong trái dừa chính hiệu
                            Côn Đảo trông vừa xinh xắn, vừa bắt mắt. Đi kèm với kem là
                            phần dừa non vừa ngọt vừa mát cùng với đa dạng các loại
                            topping từ đậu phộng đến sơ ri, dừa khô... Ngoài món kem dừa
                            tươi truyền thống, kem dừa sầu riêng, kem dừa xôi lá dứa và
                            kem dừa socola,... cũng là lựa chọn không thể bỏ lỡ.
                        </p>
                        <p>
                            Ngoài ra, <b>COCOO - Kem Dừa Côn Đảo</b> với không gian xanh
                            trong lành, sở hữu nhiều góc “checkin xịn sò” chắc chắn sẽ gây
                            thương nhớ cho các tín đồ sống ảo. Đặc biệt, cửa hàng cũng sẽ
                            là địa điểm lý tưởng để giao lưu, trò truyện kết bạn hay họp
                            nhóm và làm việc. Tìm đúng địa điểm check-in đâu hề quá khó,
                            đúng không nào? Hơn nữa nhân viên tại COCOO - Kem Dừa Côn Đảo
                            hoàn toàn có thể giúp bạn có thể có được những bức hình so
                            deep nhất nhé.
                        </p>
                        <p>
                            Với mong muốn giới thiệu và phổ biến một món ăn vặt giải nhiệt
                            vào mùa hè 2021, cùng hi vọng mang đến những nét ẩm thực đặc
                            trưng tại mỗi vùng miền đến với khắp mọi nơi,
                            <b> Kem dừa Côn Đảo Cocoo</b> cũng đang tìm kiếm các đối tác
                            nhượng quyền để nhân rộng thương hiệu trên toàn quốc.
                        </p>
                        <h3>HỆ THỐNG CỬA HÀNG COCOO - KEM DỪA CÔN ĐẢO</h3>
                        <ul>
                            <li>
                                {' '}
                                🌴Cơ sở 39 :HỆ THỐNG CỬA HÀNG COCOO - KEM DỪA CÔN ĐẢO{' '}
                            </li>
                            <li> 🌴Trụ sở : 48 Tố Hữu, Nam Từ Liêm, Hà Nội.</li>
                            <li>
                                {' '}
                                🌴Cơ sở 2: 218C Đường cách mạng tháng 10, TP. Sông Công,
                                Thái Nguyên
                            </li>
                            <li>
                                {' '}
                                🌴Cơ sở 3: 68 đường Bắc Nam, Thị trấn Quốc Oai, Hà Nội
                            </li>
                            <li>
                                {' '}
                                🌴Cơ sở 6: Liền kề TT2-02 IEC Tứ Hiệp, Thanh Trì, Hà Nội
                            </li>
                            <li> 🌴 Cơ sở 8: 245 Nguyễn Cao, Thành phố Bắc Ninh</li>
                            <li>
                                {' '}
                                🌴Cơ sở 9 : 29 Vĩnh Tuy (Trụ cầu H11), Hai Bà Trưng, Hà
                                Nội
                            </li>
                            <li> 🌴Cơ sở 11: Lỗ Hà, Duy Tiên, Hà Nam</li>
                            <li> 🌴Cơ sở 14: Tiêu Sơn, Đoan Hùng, Phú Thọ</li>
                            <li>
                                {' '}
                                🌴Cơ sở 15 : Yên Thịnh, Thành Phố Yên Bái, tỉnh Yên Bái
                            </li>
                            <li>
                                {' '}
                                🌴Cơ sở 18 :Đường đôi thị trấn Lim, huyện Tiên Du, Bắc
                                Ninh
                            </li>
                            <li> 🌴Cơ sở 19 : Thủy Nguyên , Hải Phòng (coming soon)</li>
                            <li>
                                {' '}
                                🌴Cơ sở 20 : Thiện Kế , Quang Khải, Bình Xuyên, Vĩnh Phúc
                            </li>
                            <li>
                                {' '}
                                🌴Cơ sở 22 : 518 Nguyễn Ái Quốc, thành phố Biên Hoà, Đồng
                                Nai
                            </li>
                            <li> 🌴Cơ sở 23: Ngã 3 Đại Áng, Thanh Trì, Hà Nội</li>
                            <li>
                                {' '}
                                🌴Cơ sở 25 : Đội 6, Thôn Bầu, Kim Chung, Đông Anh, Hà Nội
                            </li>
                            <li>
                                {' '}
                                🌴Cơ sở 26 : Chung cư Mizuki Floria, Bình Chánh, Hồ Chí
                                Minh
                            </li>
                            <li> 🌴Cơ sở 28 : Thị trấn Đông Thái, Vĩnh Bảo, Hải Phòng</li>
                            <li>
                                {' '}
                                🌴Cơ sở 29 : Hồ điều hoà Hoàng Ngân, thành phố Thái
                                Nguyên, Thái Nguyên
                            </li>
                            <li>
                                {' '}
                                🌴Cơ sở 30 : Cổng thợ Quỳnh Côi, Quỳnh Phụ, Thái Bình
                            </li>
                            <li> 🌴Cơ sở 32: 77 Lâm Hạ, Long Biên, Hà Nội</li>
                            <li> 🌴Cơ sở 33 : Nguyễn Du, Sầm Sơn, Thanh Hoá</li>
                            <li> 🌴Cơ sở 35 : Tân Quang, Bắc Quang, Hà Giang</li>
                            <li> 🌴Cơ sở 36 : Đông Sơn, Triệu Sơn, Thanh Hóa</li>
                            <li>
                                {' '}
                                🌴Cơ sở 39 : Biệt thự&nbsp; 11-No05 KĐT Sài Đồng, Long
                                Biên, Hà Nội
                            </li>
                            <li>
                                {' '}
                                🌴Cơ sở 40 : SH5 Sunshine City, Đông Ngạc, Từ Liêm, Hà Nội
                            </li>
                            <li> 🌴Cơ sở 41 : TP Tam Kỳ, Quảng Nam</li>
                            <li> 🌴Cơ sở 42: Lịch Sơn, Cẩm Lý, Lục Nam, Bắc Giang</li>
                            <li>
                                {' '}
                                🌴Cơ sở 45: SH01B Anland Complex KĐT Dương Nội, Hà Đông,
                                Hà Nội
                            </li>
                            <li>
                                {' '}
                                🌴Cơ sở 46 : Số 457, Tổ 4, Thị trấn Việt Quang, Bắc Quang,
                                Hà Giang
                            </li>
                            <li> 🌴Cơ sở 47 : 12 Nguyễn Du, Đồng Hới, Quảng Bình.</li>
                            <li> 🌴Cơ sở 48: 238 U Rê - Trường Chinh - TP. Kon Tum</li>
                            <li> 🌴Cơ sở 50 : Ngõ 157 Chùa Láng, Đống Đa, Hà Nội</li>
                            <li>
                                {' '}
                                🌴Cơ sở 51: 796 Hương Lộ 2, Quận Bình Tân, TP. Hồ Chí Minh
                            </li>
                            <li> 🌴Cơ sở 54: Tổ 2 phường Yên Thịnh TP Yên Bái</li>
                            <li>
                                {' '}
                                🌴Cơ sở 55 : 401/18 - 401/20 Bình Lợi, Phường 13, Quận
                                Bình Thạnh, TP Hồ Chí Minh .
                            </li>
                            <li> 🌴Cơ sở 56 : Số 56 Tô Hiệu, Thường Tín, Hà Nội</li>
                            <li> 🌴Cơ sở 58 : Thị trấn Hồ, Thuận Thành, Bắc Ninh</li>
                            <li>
                                {' '}
                                🌴Cơ sở 59 : Khu Phố 2, Thị trấn Hương Canh, Bình Xuyên,
                                Vĩnh Phúc.
                            </li>
                            <li>
                                {' '}
                                🌴Cơ sở 60 : Hoàng Hoa Thám - Mạo Khê- Đông Triều- Quảng
                                Ninh
                            </li>
                            <li>
                                {' '}
                                🌴Cơ sở 61: 70 đường 14C khu dân cư Phong Phú 4, Bình
                                Chánh, TP Hồ Chí Minh
                            </li>
                        </ul>
                        <div className={cx('link-face')}>
                            <strong>Fanpage</strong>
                            <a
                                href="https://www.facebook.com/kemduacondao.cocoo/"
                                rel="nofollow"
                            >
                                https://fb.com/kemduacondao.cocoo/
                            </a>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Introduce;
