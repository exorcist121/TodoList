import styles from './TurnPanel.module.css';
import { useContext } from 'react';
import { SideBarContext } from '../../context/sideBar.context';

function TurnPanel() {
	const {sidebar, setSidebar} = useContext(SideBarContext);

	return (
		<button type={'button'} className={`${styles['turn-panel']} ${sidebar ? '' : styles['collapse']}`} onClick={() => setSidebar(!sidebar)}>
			<img src="/turn.svg" alt="Иконка сворачивания панели" className={styles['turn-panel__icon']}/>
		</button>
	);
}

export default TurnPanel;