import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import watchData from "../../data/watchData";

// import "swiper/css";

export default function BestSeller() {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(watchData.watch);
    });
    return (
        <>
            <WatchList>
                <h2>Best Seller</h2>
                {/* <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper> */}
                <ul>
                    {data.map((item, idx) => {
                        return (
                            <li>
                                <div className="img">
                                    <img src={item.src} alt="" />
                                </div>
                                <h4 className="name">{item.name}</h4>
                                <p className="price">
                                    {" "}
                                    <strong>$</strong> {item.price}.00
                                </p>
                                <p className="tag"></p>
                            </li>
                        );
                    })}
                </ul>
            </WatchList>
        </>
    );
}

const WatchList = styled.div`
    margin: 60px 0px;
    h2 {
        text-align: center;
        font-size: 34px;
        margin-bottom: 40px;
    }
    ul {
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
                color: #222;
            }
        }
    }
`;
