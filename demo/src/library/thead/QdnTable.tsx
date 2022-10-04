import React from 'react';

import QdnThead from './Thead';


export const TdContext = React.createContext("");



 export const QdnTd = (props: any) => {
    const { children } = props;

    return (
        <>
            {children}
        </>
    );
}


const GetChildRowTd = (props: any) => {
    const { td, childP } = props;

    let child = childP[0];
    childP.forEach((e: any) => {
        if (td.customDisplayName === e.props.name) {
            child = e;
        }
    })
    return (
        <>
            {child}
        </>
    )
}

const QdnTable = (props: any) => {   //pure function    , @Input 

    const { tableConfig, config, sortData, setConfig, children, data } = props;


     return (
        
         <table className="table">

             <QdnThead tableConfig={tableConfig} config={config} setConfig={setConfig} data={data} >
                 {children }
             </QdnThead>
             <tbody>

                 {
                     config.data.map((e: any) => {
                         return (
                             <tr key={e.id}>
                                 {

                                     tableConfig.columnConfig.map((t: any) => {
                                         return (
                                               
                                             <td>
                                                 {!t.customDisplayName &&   e[t.columnName]}

                                                 {t.customDisplayName && <TdContext.Provider value={e} > <GetChildRowTd td={t} childP={children} /> </TdContext.Provider> }
                                             </td>
                                             )
									 })
								 }
                             </tr>

                         )
                     })
                 }




             </tbody>
         </table>


    );
}



export default QdnTable;
