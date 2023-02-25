import React from "react";
import "./style.css";

export default function BadgeCircle({ src, title, size, description }) {
    return (
        <div className="badge-circle" style={{ width: `${size}px` }}>
            <img className="badge-circle__img" src={src} alt="badge img"></img>
            <label className="badge-circle__title">{title}</label>
            <label className="badge-circle__description">{description}</label>
        </div>
    );
}
