import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import config from '~/config';

import styles from './Direction.module.scss';

const cx = classNames.bind(styles);

function Direction({ title }) {
    return (
        <div className="direction">
            <Container>
                <Row>
                    <Col lg="12">
                        <div className={cx('wrap')}>
                            <Link className={cx('link-home')} to={config.routes.home}>
                                Home
                            </Link>{' '}
                            | <span>{title}</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Direction;
