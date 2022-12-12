import classNames from 'classnames/bind';
import { useField, ErrorMessage } from 'formik';

import styles from './TextField.module.scss';

const cx = classNames.bind(styles);

const TextField = ({ placeholder, label, textArea, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className={cx('form-group')}>
            <label htmlFor={field.name} className={cx('title-item')}>
                {label} <span>*</span>
            </label>

            {textArea === true ? (
                <textArea
                    rows={4}
                    name=""
                    id=""
                    {...field}
                    {...props}
                    autoComplete="off"
                    placeholder={placeholder}
                    className={cx('textarea', meta.touched && meta.error && 'is-invalid')}
                />
            ) : (
                <input
                    name=""
                    id=""
                    {...field}
                    {...props}
                    autoComplete="off"
                    placeholder={placeholder}
                    className={cx('input', meta.touched && meta.error && 'is-invalid')}
                />
            )}

            <ErrorMessage component="div" name={field.name} className={cx('error-mes')} />
        </div>
    );
};

export default TextField;
