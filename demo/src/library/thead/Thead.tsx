import React from 'react';

export const QdnTh = (props: any) => {
    const { children } = props;

    return (
        <>
            {children}
        </>
    );
}

const GetChild = (props: any) => {
    const { te, childP } = props;

    let child = childP[0];
    childP.forEach((e: any) => {
        if (te.customDisplaySort === e.props.name) {
            child = e;
        }
    })
    return (
        <>
            {child}
        </>
    )
}

const QdnThead = (props: any) => {   //pure function    , @Input 

    const { tableConfig, config, sortData, setConfig, children } = props;


    const filterDataThead = (columnName: any, value: any, type: any, te: any, f: any) => {
        console.log(value);
    }


    const sortDataThead = (columnName: any, orderBy: any, type: any, te: any) => {

        if (!te.isSortable) {
            return;
        }
        if (sortData) {
            sortData(columnName, orderBy, type);
        } else {


            let sortOption = -1;
            if (orderBy === 'asc') {
                sortOption = 1;
            }



            config.data.sort((a: any, b: any) => {              
                if (te.customSort) {
                    return te.customSort(a, b, sortOption);
                }
                if (type === 'cistr') {
                    return a[columnName].toLowerCase() > b[columnName].toLowerCase() ? sortOption : -1 * sortOption;
                }

                return a[columnName] > b[columnName] ? sortOption : -1 * sortOption;
            });
        }



        if (orderBy === 'asc') {
            setConfig({ data: [...config.data], orderBy: "desc" });
        } else {
            setConfig({ data: [...config.data], orderBy: "asc" });
        }

    }
    return (
        <thead className=" text-primary">
                <tr>
            {
                tableConfig.columnConfig.map((te: any) => {
                    return (
                        <>
                            <th key={ te.id} className={te.className} onClick={(eve) => {
                                sortDataThead(te.columnName, config.orderBy, te.columnType, te);
                                eve?.preventDefault();
                            }
                            }>
                                {!te.customDisplaySort && te.displayName}

                                {te.customDisplaySort !== undefined && <GetChild te={te} childP={children} />}
                            </th>
                        </>

                    )
                })
            }
            </tr>
            {
                tableConfig.isFilter  && <tr>
                {
                    tableConfig.columnConfig.map((te: any) => {
                        return (
                            <>
                                <th key={ te.id} className={te.className}>

                                    {
                                        te.filter &&    te.filter.map((f: any) => {
                                           return (
                                               <input key={te.fid} type="text" onChange={(eve: any) => {
                                                    filterDataThead(te.columnName, eve.target.value, te.columnType, te,f);
                                                    eve?.preventDefault();
                                                }
                                                } />
                                            
                                            )
										})
									}
                                    
                                   
                                </th>
                            </>

                        )
                    })
                }
            </tr>
            }
        </thead>


    );
}



export default QdnThead;
