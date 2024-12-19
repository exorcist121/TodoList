import styles from './BodyListItem.module.css';
import TaskAddButton from '../TaskAddButton/TaskAddButton';
import { useContext } from 'react';
import { TabContext } from '../../context/Tab.context';

function BodyListItem({ id, value}) {
	const {tabId} = useContext(TabContext);

	return (
		<div className={`${tabId === id ? 'list-item active' : styles['list-item']}`}>
			<h1 className="tittle">{value}</h1>
			<TaskAddButton/>
			<ul className="TaskList">
				<li className="Task"></li>
				<li className="Task"></li>
				<li className="Task"></li>
			</ul>
		</div>
	);
}

export default BodyListItem;