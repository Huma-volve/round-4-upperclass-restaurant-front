
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
    <main>
        <Outlet/>
    </main>
    {/* <Footer/> */}
    </>
  )
}

export default Layout