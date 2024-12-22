import styles from './Body.module.css';
import BodyList from '../BodyLists/BodyLists';
import TaskCreate from '../TaskCreate/TaskCreate';
import { useContext } from 'react';
import { SideBarContext } from '../../context/sideBar.context';

function Body() {
	const {sidebar} = useContext(SideBarContext);

	return (
		<div className={`${styles['body']} ${sidebar ? '' : styles['collapse']}`}>
			<BodyList/>
			<TaskCreate/>
		</div>
	);
}

export default Body;