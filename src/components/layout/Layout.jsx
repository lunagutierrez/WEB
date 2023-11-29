import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import { AuthContext } from "../../context/auth"
import { useState } from "react"

/**
 * 
 * @param {Node} children
 * @param {String} type
 * @returns The layout of the page, can be either blank or with header and footer
 */
const Layout = ({ type }) => {

    return (
        <>
            {type !== "blank" && <Header />}
            <Outlet />
            {type !== "blank" && <Footer />}
        </>
    )
}

export default Layout