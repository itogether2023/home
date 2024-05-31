import React, { useEffect } from "react";
import styled from "styled-components";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Portfolio() {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);
    return (
        <>
            <Section>
                <div
                    className="container"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="1000"
                >
                    <h1>PORTFOLIO</h1>
                    <div></div>
                    <div
                        className="listStart"
                        data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-delay="100"
                    >
                        {/* <div className="verticalLine"></div>
                        <div className="circle"></div> */}
                        <div className="textLine">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Omnis vero officia iusto vitae ex eum
                            molestiae maxime quos commodi fuga quod, illum
                            tempore distinctio adipisci voluptate architecto
                            magnam, cum fugit!
                        </div>
                        <ul className="listBox">
                            <li></li>
                            <li></li>
                        </ul>
                        <ul className="listBox">
                            <li></li>
                            <li></li>
                        </ul>
                        <ul className="listBox">
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </Section>
        </>
    );
}

const Section = styled.div`
    background-color: white;
    padding-top: 120px;
    .container {
        h1 {
            font-size: 102px;
            background-color: black;
            border-top-left-radius: 50px;
            border-top-right-radius: 50px;
            display: inline-block;
            letter-spacing: 5px;
            padding: 10px 20px;
            cursor: default;
            color: white;
        }
        .listStart {
            padding-top: 120px;
            border-top-right-radius: 50px;
            background-color: black;
            padding-bottom: 500px;
            /* position: relative; */
            /* .verticalLine {
                width: 5px;
                height: 100%;
                background-color: gray;
                position: absolute;
                transform: translateX(-50%);
                left: 50%;
                top: 5%;
            }
            .circle {
                position: sticky;
                background-color: black;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                top: 50%;
                left: 50%;
                transform: translateX(-50%);
            } */
            .textLine {
                font-size: 46px;
                color: white;
                width: 90%;
                padding-bottom: 50px;
            }
            .listBox {
                display: flex;
                justify-content: space-around;
                margin-bottom: 50px;
                li {
                    width: 30%;
                    height: 500px;
                    background-color: white;
                    position: relative;
                }
                li:nth-child(2) {
                    top: 50px;
                }
            }
        }
    }
`;
