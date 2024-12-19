import styles from './Body.module.css';
import BodyList from '../BodyLists/BodyLists';
import { useContext } from 'react';
import { SideBarContext } from '../../context/sideBar.context';

function Body() {
	const {sidebar} = useContext(SideBarContext);

	return (
		<div className={`${styles['body']} ${sidebar ? '' : styles['collapse']}`}>
			<BodyList/>
		</div>
	);
}

export default Body;