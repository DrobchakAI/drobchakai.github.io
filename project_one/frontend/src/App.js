import './App.scss';
import HomePage from "./pages/homePage";
import WeatherPage from "./pages/weatherPage";
import VeryWellPage from "./pages/veryWellPage";
import TopMenu from "./components/menu/menu"
import {
  Routes,
  Route,
} from 'react-router-dom';
function App() {
  const menuItems = [
    { name: "Главная страница", link: "/", element: (<HomePage />) },
    { name: "Диаграмма погоды", link: "/weather/", element: (<WeatherPage />) },
    { name: "Сделать хорошо", link: "/veryWell/", element: (<VeryWellPage />) },
  ];
  let date = new Date();

  return (
    <div className="app">
      <header>
        <TopMenu menu={menuItems} />
      </header>
      <section className='content'>
        <Routes>
          {menuItems.map((item, key) => {
            return <Route key={key} exact path={item.link} element={item.element}></Route>
          })}
          
        </Routes>
      </section>
      <footer>
        <div className='lic'>Разработанно Алексеем Дробчак. {date.getFullYear()}</div>
      </footer>
    </div>
  );
}

export default App;
