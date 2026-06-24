"use client";

import { useEffect } from "react";

export const RouteVisualEffect = () => {
    useEffect(() => {
        const shell = document.querySelector(".ecsr-route-shell");

        if (!shell) {
            return;
        }

        const frame = window.requestAnimationFrame(() => {
            shell.classList.add("ecsr-route-shell--settled");
        });

        return () => window.cancelAnimationFrame(frame);
    }, []);

    return null;
};
