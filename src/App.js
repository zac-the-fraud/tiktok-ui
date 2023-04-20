import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './Routes'
import DefaultLayout from '~/components/Layout/DefaultLayout'
function App() {
  return (
    <div className='App'>
      <Routes>
        {publicRoutes.map((route, index) => {
          // const Layout = route.layout === null ? Fragment : DefaultLayout //use DefaultLayout when the route do not define the layout, check layout of the route
          const Page = route.component
          let Layout = DefaultLayout
          if (route.layout)
          Layout = route.layout
          else if (route.layout === null)
          Layout = Fragment
          return <Route key={index} path={route.path} element={
            <Layout>
              <Page />
            </Layout>} />
        })}
      </Routes>
    </div>
  );
}

export default App;
