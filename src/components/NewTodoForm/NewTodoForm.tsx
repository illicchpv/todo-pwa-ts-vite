import style from './NewTodoForm.module.scss'
// import { useAppDispatch, useAppSelector } from '../../hooks/useApp';

interface NewTodoFormProps {
  value: string;
  updateText: (str: string) => void;
  handleAction: () => void;
}

const NewTodoForm: React.FC<NewTodoFormProps> = ({ value, updateText, handleAction }) => {
  return (
    <div className={style.box}>
      <input
        placeholder='напишите что сделать'
        value={value}
        onChange={(e) => updateText(e.target.value)}
      />
      <button className={style.ok} disabled={!value} onClick={handleAction}> + </button>
    </div>
  );
};

export default NewTodoForm;