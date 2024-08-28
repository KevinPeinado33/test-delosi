import { FC } from 'react';
import clsx from 'clsx';
import styles from './BasicButton.module.scss';

type VariantType = 
  | 'primary'
  | 'secondary';

interface Props extends React.ButtonHTMLAttributes< HTMLButtonElement > {
    value: string
    variant?: VariantType
}

export const BasicButton: FC<Props> = ({ value, variant = 'primary', ...rest }) => {
  
  const buttonClass = clsx(styles.button, {
    [ styles.button__primary ]  : variant === 'primary',
    [ styles.button__secondary ]: variant === 'secondary',
  });

  return (
    <button
        className={ buttonClass }
        { ...rest }
    >
        { value }
    </button>
  )
}
