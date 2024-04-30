import React, { useEffect, useState } from "react";
import watchData from "../../data/watchData";
import styled from "styled-components";

export default function WatchBox({ select }) {
    const [selected, setSelected] = useState([]);
    useEffect(() => {
        setSelected(() => watchData.cateData[select]);
    }, [select]);
    return (
        <CateBox>
            {selected.map((item, idx) => {
                return (
                    <li>
                        <div className="img">
                            <img src={item.src} alt="" />
                        </div>
                        <h4 className="name">{item.name}</h4>
                        <p className="price">$ {item.price}</p>
                        <p className="tag"></p>
                    </li>
                );
            })}
        </CateBox>
    );
}

const CateBox = styled.ul`
    display: flex;
    gap: 30px;
    padding: 0px 20px;
    li {
        text-align: center;
        overflow: hidden;
        .img {
            width: 400px;
            height: 300px;
            border-radius: 15px;
        }
        .img img {
            width: 100%;
            height: 100%;
        }
        h4 {
            font-size: 24px;
            margin: 10px 0;
        }
        .price {
            font-size: 18px;
        }
    }
`;
