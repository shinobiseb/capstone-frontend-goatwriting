import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Show } from "../pages/Show";
import { Index } from "../pages/Index";

export const Main = (props: any) => {
    return (
        <div>
            <Route path="/" element={<Index/>}/>
            <Route path="/people/:id" element={<Show/>}/>
        </div>
    )
};