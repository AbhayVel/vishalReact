import React from 'react';

export const QdnTh = (props: any) => {
    const { name, children } = props;
   
    return (
        <>
            {children }
        </>
    );
}

const GetChild = (props: any) => {
    const { te, childP } = props;
    debugger;
    let child = childP[0];
    childP.forEach((e: any) => {
        if (te.customDisplaySort == e.props.name) {
            child = e;
        }
    })
    return (
     <>
        { child }
     </>
    )
}

const QdnThead = (props: any) => {   //pure function    , @Input 
    
    const { tableConfig, config, sortData, setConfig, children } = props;

    debugger;

    const sortDataThead = (columnName: any, orderBy: any, type: any, te: any) => {
        debugger;
        if (!te.isSortable) {
            return;
		}
        if (sortData) {
            sortData(columnName, orderBy, type);
        } else {

            debugger;
            let sortOption = -1;
            if (orderBy == 'asc') {
                sortOption = 1;
            }

            config.data.sort((a: any, b: any) => {
                if (type === 'cistr') {
                    return a[columnName].toLowerCase() > b[columnName].toLowerCase() ? sortOption : -1 * sortOption;
                }

                return a[columnName] > b[columnName] ? sortOption : -1 * sortOption;
            });
        }



        if (orderBy == 'asc') {
            setConfig({ data: [...config.data], orderBy: "desc" });
        } else {
            setConfig({ data: [...config.data], orderBy: "asc" });
        }
		
	}
    return (
        <thead className=" text-primary">

            {
                tableConfig.map((te: any) => {
                    return (
                        <>
                            <th className={te.className} onClick={(eve) => {
                                sortDataThead(te.columnName, config.orderBy, te.columnType,te);
                                eve?.preventDefault();
                            }
                            }>
                                {!te.customDisplaySort && te.displayName}

                                {te.customDisplaySort != undefined && <GetChild te={te} childP={children} /> }
                            </th>
                        </>

                    )
                })
            }

        </thead>

      
  );
}



export default QdnThead;
