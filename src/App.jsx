import './App.css';
import LeftPanel from './components/leftPanel/leftPanel';
import Header from './components/Header/Header';
import TaskAddButton from './components/TaskAddButton/TaskAddButton';
import Body from './components/Body/Body';
import LeftPanelBody from './components/LeftPanelBody/LeftPanelBody';
import SelectUser from './components/SelectUser/SelectUser';
import TurnPanel from './components/TurnPanel/TurnPanel';
import TabList from './components/TabList/TabList';
import { useState } from 'react';
import { SideBarContext } from './context/sideBar.context';
import { TabContext } from './context/Tab.context';
function App() {
	const [tabId, setTabid] = useState(0);
	const [sidebar, setSidebar] = useState(true);

	return (
		<div className='app'>
			<SideBarContext.Provider value={{sidebar, setSidebar}}>
				<LeftPanel>
					<Header>
						<SelectUser/>
						<TurnPanel/>
					</Header>
					<LeftPanelBody>
						<TaskAddButton/>
						<TabContext.Provider value={{tabId, setTabid}}>
							<TabList />
						</TabContext.Provider>
					</LeftPanelBody>
				</LeftPanel>
				<TabContext.Provider value={{tabId, setTabid}}>
					<Body/>
				</TabContext.Provider>
			</SideBarContext.Provider>
		</div>
	);
}

export default App;
