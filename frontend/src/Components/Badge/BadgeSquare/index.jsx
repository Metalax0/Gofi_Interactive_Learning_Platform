import React from "react";
import { Card } from "antd";
import "./style.css";

const { Meta } = Card;

export default function BadgeSquare({ src, title, size }) {
    return (
        <div className="badge">
            <Card
                hoverable
                style={{
                    width: size,
                }}
                cover={<img alt="example" src={src} />}
            >
                <Meta title={`${title}`} />
            </Card>
        </div>
    );
}
