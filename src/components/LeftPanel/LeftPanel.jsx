import styles from './LeftPanel.module.css';
import { useContext } from 'react';
import { SideBarContext } from '../../context/sideBar.context';

function LeftPanel({ children}) {
	const {sidebar} = useContext(SideBarContext);

	return (
		<div className={`${styles['left-panel']} ${sidebar ? '' : styles['collapse']}`}>
			{children}
		</div>
	);
}

export default LeftPanel;