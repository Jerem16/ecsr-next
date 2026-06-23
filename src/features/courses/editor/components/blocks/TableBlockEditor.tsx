"use client";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import type { TableBlock, TableCell } from "../../../types/course";
import {
    editorDangerIconButtonClassName,
    editorGhostButtonClassName,
    editorGridTwoClassName,
    editorGroupCardClassName,
    editorGroupHeaderClassName,
    editorSubcardClassName,
    editorTitleClassName,
} from "../editorClassNames";
import { CheckboxField } from "../fields/CheckboxField";
import { StringListField } from "../fields/StringListField";
import { TextInputField } from "../fields/TextInputField";
import { BlockEditorFrame } from "./BlockEditorFrame";

interface TableBlockEditorProps {
    block: TableBlock;
    onChange: (block: TableBlock) => void;
    onDelete: () => void;
}

const createEmptyCell = (): TableCell => ({ label: "" });

export const TableBlockEditor = ({ block, onChange, onDelete }: TableBlockEditorProps) => {
    const updateRow = (rowIndex: number, row: TableCell[]) => {
        onChange({ ...block, rows: block.rows.map((currentRow, index) => (index === rowIndex ? row : currentRow)) });
    };

    const updateCell = (rowIndex: number, cellIndex: number, cell: TableCell) => {
        const row = block.rows[rowIndex] ?? [];
        updateRow(rowIndex, row.map((currentCell, index) => (index === cellIndex ? cell : currentCell)));
    };

    const addRow = () => {
        onChange({ ...block, rows: [...block.rows, block.columns.map(createEmptyCell)] });
    };

    const removeRow = (rowIndex: number) => {
        onChange({ ...block, rows: block.rows.filter((_, index) => index !== rowIndex) });
    };

    return (
        <BlockEditorFrame title={block.title} blockType="Tableau" onDelete={onDelete}>
            <div className={editorGridTwoClassName}>
                <TextInputField label="ID du bloc" value={block.id ?? ""} onChange={(id) => onChange({ ...block, id })} />
                <TextInputField label="Titre" value={block.title} onChange={(title) => onChange({ ...block, title })} />
                <TextInputField label="Légende" value={block.caption} onChange={(caption) => onChange({ ...block, caption })} />
            </div>
            <StringListField label="Colonne" values={block.columns} addLabel="Ajouter une colonne" onChange={(columns) => onChange({ ...block, columns })} />
            <div className={editorGroupCardClassName}>
                <div className={`course-editor-group__header ${editorGroupHeaderClassName}`}>
                    <h4 className={editorTitleClassName}>Lignes</h4>
                    <button type="button" className={editorGhostButtonClassName} onClick={addRow}>
                        <AddIcon fontSize="small" /> Ajouter une ligne
                    </button>
                </div>
                <div className="course-editor-table-edit grid gap-3">
                    {block.rows.map((row, rowIndex) => (
                        <section className={`course-editor-subcard ${editorSubcardClassName}`} key={`${block.id ?? block.title}-row-${rowIndex}`}>
                            <div className="course-editor-subcard__header mb-3 flex items-start justify-between gap-3">
                                <h5 className={editorTitleClassName}>Ligne {rowIndex + 1}</h5>
                                <button type="button" className={editorDangerIconButtonClassName} onClick={() => removeRow(rowIndex)} aria-label="Supprimer la ligne">
                                    <DeleteIcon fontSize="small" />
                                </button>
                            </div>
                            <div className={editorGridTwoClassName}>
                                {row.map((cell, cellIndex) => (
                                    <div className="course-editor-cell" key={`${block.id ?? block.title}-cell-${rowIndex}-${cellIndex}`}>
                                        <TextInputField
                                            label={block.columns[cellIndex] ?? `Cellule ${cellIndex + 1}`}
                                            value={cell.label}
                                            onChange={(label) => updateCell(rowIndex, cellIndex, { ...cell, label })}
                                        />
                                        <CheckboxField
                                            label="Gras"
                                            checked={Boolean(cell.strong)}
                                            onChange={(strong) => updateCell(rowIndex, cellIndex, { ...cell, strong })}
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </BlockEditorFrame>
    );
};
