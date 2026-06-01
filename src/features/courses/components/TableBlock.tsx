import type { TableBlock as TableBlockType } from "../types/course";
import { AppIcon } from "./AppIcon";

interface TableBlockProps {
    block: TableBlockType;
}

export const TableBlock = ({ block }: TableBlockProps) => {
    return (
        <article className="course-table-card" id={block.id}>
            <p className="course-block-type"><AppIcon name="table" /> Tableau HTML</p>
            <h3>{block.title}</h3>
            <div className="course-table-wrap">
                <table>
                    <caption>{block.caption}</caption>
                    <thead>
                        <tr>
                            {block.columns.map((column) => (
                                <th scope="col" key={column}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {block.rows.map((row, rowIndex) => (
                            <tr key={`${block.title}-${rowIndex}`}>
                                {row.map((cell, cellIndex) => {
                                    const content = cell.strong ? <strong>{cell.label}</strong> : cell.label;
                                    return cellIndex === 0 ? (
                                        <th scope="row" key={`${block.id ?? block.title}-${rowIndex}-${cellIndex}`}>{content}</th>
                                    ) : (
                                        <td key={`${block.id ?? block.title}-${rowIndex}-${cellIndex}`}>{content}</td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </article>
    );
};
