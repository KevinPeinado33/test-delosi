import { FC } from 'react';

import { BasicButton } from '@/shared/components/atoms/buttons';

import styles from './Controls.module.scss';

interface Props {
  onAddField: () => void
  onResetField: () => void
}
export const MatrixControls: FC<Props> = ({ onAddField, onResetField }) => {
  return (
    <div className={styles.square__controls}>
      <BasicButton value='Agregar campos' onClick={onAddField} />
      <BasicButton value='Restaurar' variant='secondary' onClick={onResetField} />
    </div>
  )
}
