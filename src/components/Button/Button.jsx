import styles from './Button.module.css';

function Button({ children, onClick, className }) {
	const cl = styles['button'] + (className ? ' ' + className : '');
	return (
		<button className={cl} onClick={onClick}>{children}</button>
	);
}

export default Button;