import * as React from "react";
import { useState, useEffect } from "react";
import images from "./images";

const counterOfColumns = (width: number) => {
    if (width >= 1200) {
        const numberOfColumns = 4;
        return numberOfColumns;
    } else if (width < 1200 && width > 600) {
        const numberOfColumns = 2;
        return numberOfColumns;
    } else if (width <= 600) {
        const numberOfColumns = 1;
        return numberOfColumns;
    }
    return 0;
};

export const useGridSettings = (width: number) => {
    const numberOfImages: number = images.length;
    const numberOfColumns: number = counterOfColumns(width);
    const numberOfRows = Math.ceil(numberOfImages / numberOfColumns);
    return { numberOfImages, numberOfColumns, numberOfRows };
};
