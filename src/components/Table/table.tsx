import React from 'react'

type Props = {
    dataSource?: any
    columns?: any
    children?: React.ReactNode
}

const Table = ({ dataSource, columns }: Props) => {
    const renderHeader = columns.map((column: any) => {
        return <th key={column.key}>{column.header ? column.header(column) : column.title}</th>
    })
    const renderRows = dataSource.map((item: any) => {
        const renderCells = columns.map((columns: any) => {
            return <td key={columns.key}>{
                columns.render ? columns.render(item) : item[columns.dataIndex]
            }</td>
        })

        return <tr key={item.id}>{renderCells}</tr>
    })

    return (
        <div>
            <table>
                <thead>
                    <tr>{renderHeader}</tr>
                </thead>
                <tbody>
                    {renderRows}
                </tbody>
            </table>
        </div>
    )
}

export default Table