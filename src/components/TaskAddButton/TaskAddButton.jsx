import styles from './TaskAddButton.module.css';

function TaskAddButton() {
	return (
		<button className={styles['task-add-button']} type='button'>
			<img src="/plus.svg" alt="Иконка добавления" className={styles['task-add-button__icon']}/>
					Добавить Задачу
		</button>
	);
}

export default TaskAddButton;