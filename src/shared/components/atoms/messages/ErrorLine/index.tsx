import { FC } from 'react';

import styles from './ErrorLine.module.scss';

interface Props {
    message: string
}
export const ErrorLine: FC< Props > = ({ message }) =>
    <p className={styles.errorLine}>{ message }</p>;
