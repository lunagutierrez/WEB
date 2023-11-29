import { Outlet } from "react-router-dom"
import Footer from "../../footer/Footer"
import AdminHeader from "../admin_header/AdminHeader"


/**
 * 
 * @param {Node} children
 * @param {String} type
 * @returns The layout of the page, can be either blank or with header and footer
 */
const AdminLayout = ({ type }) => {
    return (
        <>
            {type !== "blank" && <AdminHeader />}
            <Outlet />
            {type !== "blank" && <Footer />}
        </>
    )
}

export default AdminLayout;