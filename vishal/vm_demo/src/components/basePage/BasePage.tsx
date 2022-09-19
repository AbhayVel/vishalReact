import React from 'react'

const BasePage = (props: any) => {

    const { children } = props;
    return (
        <div className="wrapper ">
            {/*             <SideBar />
 */}            {children}
        </div>
    );
}

export default BasePage;