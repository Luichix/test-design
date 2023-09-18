import Check from './svg/Check';
import styles from './Stage.module.css';
import classNames from 'classnames';

interface StageProps {
  id: number;
  label: string;
  completed: boolean;
  active: boolean;
}

const Stage = ({ id, label, completed, active }: StageProps) => {
  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.icon, {
          [styles.checked]: completed,
          [styles.review]: active,
          [styles.pending]: !active && !completed,
        })}
      >
        {completed ? <Check /> : <span>{id}</span>}
      </div>
      <span className={classNames(styles.label, { [styles.active]: active })}>
        <span className="hidden xl:inline">Step {id}:</span>&nbsp;
        {label}
      </span>
    </div>
  );
};

export default Stage;
