import { FC } from 'react';
import styles from './SquareInput.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> { }

export const SquareInput: FC <Props> = ({ ...rest }) => {
  return (
    <input 
      type='text'
      className={ styles.square__input }
      maxLength={ 3 }
      { ...rest }
    />
  );
}
