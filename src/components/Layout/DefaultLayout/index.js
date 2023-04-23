import Header from '~/components/layout/components/Header'
import Sidebar from './Sidebar'
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div class='container'>
                <Sidebar />
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
    )

}
export default DefaultLayout