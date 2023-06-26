import './App.scss';
import HomePage from "./pages/homePage";
import Weather from "./pages/weatherPage";
import TopMenu from "./components/menu/menu"
import {
  Routes,
  Route,
} from 'react-router-dom';
function App() {
  const menuItems = [
    { name: "Главная страница", link: "/", element: (<HomePage />) },
    { name: "Диаграмма погоды", link: "/weather/", element: (<Weather />) },
  ];


  return (
    <div className="app">
      <header>
        <TopMenu menu={menuItems} />
      </header>
      <section>
        <Routes>
          {menuItems.map((item, key) => {
            return <Route key={key} exact path={item.link} element={item.element}></Route>
          })}
        </Routes>
      </section>
    </div>
  );
}

export default App;
