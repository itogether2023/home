import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Autoplay } from "swiper/modules";
import styled from "styled-components";
import watchData from "../../data/watchData";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function BestSeller() {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(watchData.watch);
    });

    const navigationNextRef = useRef(null);
    const navigationPrevRef = useRef(null);

    const [swipe, setSwipe] = useState("");
    return (
        <>
            <WatchList>
                <h2>Best Seller</h2>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    modules={[FreeMode, Autoplay, Navigation]}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.navigation.nextEl = navigationNextRef.current;
                        swiper.navigation.prevEl = navigationPrevRef.current;
                    }}
                    className="swiperContainer"
                >
                    {data.map((item, idx) => {
                        return (
                            <SwiperSlide className="slideBox">
                                <div className="img">
                                    <img src={item.src} alt="" />
                                </div>
                                <h4 className="name">{item.name}</h4>
                                <p className="price">
                                    {" "}
                                    <strong>$</strong> {item.price}.00
                                </p>
                                <p className="tag"></p>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <div
                    ref={navigationPrevRef}
                    className="swiper-button-prev"
                ></div>
                <div
                    ref={navigationNextRef}
                    className="swiper-button-next"
                ></div>
                <div></div>
            </WatchList>
        </>
    );
}

const WatchList = styled.div`
    margin-top: 60px;
    margin-bottom: 100px;
    h2 {
        text-align: center;
        font-size: 34px;
        margin-bottom: 60px;
    }
    .swiperContainer {
        width: 80%;
        cursor: default;
        .slideBox {
            text-align: center;
            .img {
                img {
                    width: 100%;
                    height: 300px;
                    border-radius: 5px;
                }
            }
            .name {
                font-size: 24px;
                margin-top: 10px;
                margin-bottom: 10px;
            }
            .price {
                font-size: 18px;
            }
        }
        .slideBox:hover img {
            border: 3px solid lightgray;
            transition: 0.5s all;
        }
    }
    .swiper-button-prev {
        top: 1010px;
        left: 50px;
        color: black;
    }
    .swiper-button-next {
        top: 1010px;
        right: 50px;
        color: black;
    }
`;
