import styles from './TaskCreate.module.css';
import Button from '../Button/Button.jsx';

function TaskCreate() {
	return (
		<form className={styles['task']}>
			<div className={styles['task-inputs']}>
				<input type="text" className={styles['task-input']} placeholder='Название задачи'/>
				<input type="text" className={styles['task-input']} placeholder='Описание'/>
			</div>
			<div className={styles['task-controls']}>
				<input type="date" />
				<Button type='button'><img src="/taskIcon-1.svg" alt="" />Приоритет</Button>
				<Button type='button'><img src="/taskIcon-2.svg" alt="" />Напоминание</Button>
			</div>
			<div className={styles['form-controls']}>
				<Button type='reset' className={styles['big']}>Отмена</Button>
				<Button type='submit' className={styles['red']}>Добавить задачу</Button>
			</div>
		</form>
	);
}

export default TaskCreate;