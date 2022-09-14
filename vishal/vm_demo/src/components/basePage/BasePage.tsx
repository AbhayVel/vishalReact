import SideBar from "../sideBar/SideBar";

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