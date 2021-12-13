export const useGridSettings = (width: number) => {
    if (width >= 1200) {
        const numberOfAllColumns = 4;
        return numberOfAllColumns;
    } else if (width <= 600) {
        const numberOfAllColumns = 1;
        return numberOfAllColumns;
    }
    const numberOfAllColumns = 2;
    return numberOfAllColumns;
};
