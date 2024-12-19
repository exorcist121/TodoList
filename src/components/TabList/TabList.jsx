import styles from './TabList.module.css';
import Tab from '../Tab/Tab';
import { items } from './TabListItems';
import { useContext } from 'react';
import { TabContext } from '../../context/Tab.context';

function TabList() {
	const {setTabid} = useContext(TabContext);

	return (
		<>
			<ul className={styles['tabs-ul']}>
				{items
					.filter(el => !el.imgSrcTags)
					.map(el =>( 
						<li className={styles[el.className]} key={el.id}>
							<Tab onClick={() => setTabid(el.id)} id={el.id} className={el.className}>
								<img src={el.imgSrc} alt={el.imgAlt} className={styles[el.imgClassName]}/>
								{el.value}
							</Tab>
						</li>
					))}
			</ul>
			<details className={styles['projects']} open>
				<summary>Мои проекты</summary> 
				<ul className={styles['tabs-ul']}>
					{items
						.filter(el => el.imgSrcTags)
						.map(el =>( 
							<li className={styles[el.className]} key={el.id}>
								<Tab onClick={() => setTabid(el.id)} id={el.id} className={el.className}>
									<img src={el.imgSrc} alt={el.imgAlt} className={styles[el.imgClassName]}/>
									{el.value}
									{<img src={el.imgSrcTags} alt={el.imgAltTags} className={styles[el.imgClassName]}/>}
								</Tab>
							</li>
						))}
				</ul>
			</details> 
		</>
	);
}

export default TabList;