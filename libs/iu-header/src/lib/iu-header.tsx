import styles from './iu-header.module.css';

/* eslint-disable-next-line */
export interface IuHeaderProps {}

export function IuHeader(props: IuHeaderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to IuHeader!</h1>
    </div>
  );
}

export default IuHeader;
