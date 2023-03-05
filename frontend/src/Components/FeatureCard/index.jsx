import React, { useEffect } from "react";
import { useRef } from "react";
import "./style.css";

export default function FeatureCard({ title }) {
    const cardHeaderRef = useRef(null);

    return (
        <div className="feature-card">
            <h1>{title}</h1>
        </div>
    );
}
