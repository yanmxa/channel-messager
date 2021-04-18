
export function getOffset(currentPage = 1, pageSize: number): number {
    return (currentPage - 1) * pageSize;
}

export function emptyOrRows(rows: any): any[] {
    if (!rows) {
        return [];
    }
    return rows;
}