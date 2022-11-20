import './App.css';
import { HomecardCollection
 } from './ui-components'
 import { NewHomes, NavBar, MarketingFooter } from './ui-components'

function App() {
return (
<div className="App">
<NavBar width={"100vw"}/>
      <HomecardCollection isPaginated itemsPerPage={3}/>
      <MarketingFooter width={"100vw"}/>
/>
</div>
);
}

export default App;