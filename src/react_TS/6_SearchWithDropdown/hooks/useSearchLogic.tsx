import * as React from "react";
import { useState, useEffect } from "react";

export const useSearchLogic = (e: { target: { value: string } }) => {
    console.log(`ok`);
    const { value } = e.target;
    setSearchWord(value);
};
