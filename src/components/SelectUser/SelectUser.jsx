import styles from './SelectUser.module.css';

function SelectUser({children}) {
	return (
		<div className={styles['select-user']}>
			<img src="https://d1nbslm0j6pual.cloudfront.net?text=%D0%94&amp;size=195&amp;bg=ffffff" alt="Иконка пользователя" className={styles['select-user__icon']} />
			{children}
			<img src="/change.svg" alt="Иконка смены пользователя" className="SelectUser-toggle" />
		</div>
	);
}

export default SelectUser;