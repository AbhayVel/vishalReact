import React from 'react';


const QdnThead = (props: any) => {   //pure function    , @Input 
    
    const { tableConfig, config, sortData, setConfig } = props;

    const sortDataThead = (columnName: any, orderBy: any, type: any, te: any) => {
        if (!te.isSortble) {
            return;
		}
        if (sortData) {
            sortData(columnName, orderBy, type);
        } else {

                     if (orderBy == 'asc') {
                config.data.sort((a: any, b: any) => {
                    if (type === 'cistr') {
                        return a[columnName].toLowerCase() > b[columnName].toLowerCase() ? 1 : -1;
                    } else {
                        return a[columnName] > b[columnName] ? 1 : -1;
					}

                })
            } else {
                         config.data.sort((a: any, b: any) => {
                    if (type === 'cistr') {
                        return a[columnName].toLowerCase() > b[columnName].toLowerCase() ? -1 : 1;
                    } else {
                        return a[columnName] > b[columnName] ? -1 : 1;
                    }
                })
			}




        if (orderBy == 'asc') {
            setConfig({ data: [...config.data], orderBy: "desc" });
        } else {
            setConfig({ data: [...config.data], orderBy: "asc" });
        }
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
                                {te.displayName}
                            </th>
                        </>

                    )
                })
            }

        </thead>

      
  );
}



export default QdnThead;
