import styles from './Tab.module.css';
import { useContext } from 'react';
import { TabContext } from '../../context/Tab.context';

function Tab({ children, className, id, ...props }) {
	const {tabId} = useContext(TabContext);
	const cl = styles['tab'] + (className ? ' ' + styles[className] : '');
	
	return (
		<button {...props} className={`${cl} ${tabId === id ? styles['active'] : ''}`}>
			{children}
		</button>
	);
}

export default Tab;