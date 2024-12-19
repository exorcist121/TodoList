import styles from './BodyLists.module.css';
import {items} from '../TabList/TabListItems';
import BodyListItem from '../BodyListItem/BodyListItem';
function BodyList() {
	return (
		items.map(el =>(
			<div className={styles['list']} key={el.id}>
				<BodyListItem id={el.id} value={el.value}/>
			</div>
		))
	);
}

export default BodyList;