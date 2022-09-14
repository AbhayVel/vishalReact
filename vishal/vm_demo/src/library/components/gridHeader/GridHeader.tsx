
export interface TableHeader {
    columnId: string,
    caption: string,
    allowSorting: boolean,
    columnType?: string,
    customCaption?: String,
    image?: any
}
const CASE_SENSETIVE_STRING = "CaseSensitiveString";
const SORT_ASC = 1;
const SORT_DESC = -1;

const GridHeader = (props: any) => {
    const { tableHeader, tableConfig, setTableConfig } = props;


    const columnHeaderClick = (header: TableHeader) => {
        debugger;
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
        <thead className=" text-primary">
            {
                tableHeader.map((e: TableHeader) => {
                    return (
                        <th onClick={() => {
                            columnHeaderClick(e);
                        }}>
                            {e.caption}
                        </th>
                    )
                })
            }
        </thead>
    );
}

export default GridHeader;