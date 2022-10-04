import React from 'react';

export interface TableHeader {
    columnId: string,
    caption: string,
    allowSorting: boolean,
    columnType?: string,
    customCaption?: String,
    image?: any,
    filterEnabled?: boolean;

}
const CASE_SENSETIVE_STRING = "CaseSensitiveString";

export const GridHeaderFragment = (props: any) => {
    const { name } = props;
    return (
        <>
        </>
    );
}
const GridHeader = (props: any) => {

    const filterIco = "/img/filter.png";

    const { tableHeader, tableConfig, setTableConfig, children } = props;

    const getChild = (header: TableHeader) => {
        if (header.customCaption) {
            return (children[0].props.children)
        } else {
            return header.caption
        }
    }
    const columnHeaderClick = (header: TableHeader) => {
        if (!header.allowSorting) {
            return;
        }
        let currentSort = -1 * tableConfig.currentSort;
        tableConfig.data.sort((a: any, b: any) => {

            if (header.columnType === CASE_SENSETIVE_STRING) {
                return a[header.columnId].toLowerCase() > b[header.columnId].toLowerCase() ? 1 * currentSort : -1 * currentSort;
            } else {
                return a[header.columnId] > b[header.columnId] ? 1 * currentSort : -1 * currentSort;
            }
        });

        setTableConfig({ data: [...tableConfig.data], currentSort: currentSort });
    }
    return (
        <>
            <thead className=" text-primary">
                {
                    tableHeader.map((e: TableHeader) => {
                        return (
                            <th >
                                <a onClick={(eve) => {
                                    columnHeaderClick(e)
                                    // eve?.preventDefault();
                                }}>   {getChild(e)}  </a>
                                {(e.filterEnabled) && <img style={{ height: "0.833rem" }} src={filterIco} alt="filter"
                                    onClick={(eve: any) => {
                                        alert("filterClicked");
                                        eve.stopPropagation();
                                    }}
                                />}



                            </th>

                        )
                    })
                }
            </thead>
            <thead className=" text-primary">
                {
                    tableHeader.map((e: TableHeader) => {
                        if (e.filterEnabled) {
                            console.log(e.caption);
                            return (
                                <th >
                                    <input type="text" placeholder={e.caption} />
                                </th>
                            )
                        } else {
                            <th></th>
                        }

                    })
                }
            </thead>

        </>
    );
}

export default GridHeader;