import React from "react"
import Footer from "./Footer";
import Header from './Header'

const Layout = ({children}) => {
    return (
        <div>
            <Header siteTitle="Gatsby Blogs By Osama Ameer" />
            <div
                style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0 1.0875rem 1.45rem`,
                }}
            >

                <main>
                    {children}

                </main>
                <Footer/>

            </div>
            
        </div>
    );
}
export default Layout;