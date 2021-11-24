import * as React from "react";
import { useState, useEffect } from "react";

const showLoader = { display: "block", color: "red" };
const hideLoader = { display: "none" };

export const Loading = ({ status }: { status: boolean }) => {
    useEffect(() => {}, []);
    return (
        <div className="loading" style={status ? showLoader : hideLoader}>
            <h1>Loading....</h1>
        </div>
    );
};
