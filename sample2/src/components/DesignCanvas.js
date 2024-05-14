import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { fabric } from "fabric";
import "assets/css/canvas.css";
export default function DesignCanvas(props) {
    const canvasContainerRef = useRef(null);
    const canvasRef = useRef(null);
    const [canvas, setCanvas] = useState(null);
    const [activeTool, setActiveTool] = useState("figure");
    const [clipboard, setClipboard] = useState(null);

    let addNum = 0;
    // canvas.selection = true;

    useEffect(() => {
        const canvasContainer = canvasContainerRef.current;
        // 캔버스 생성
        const newCanvas = new fabric.Canvas(canvasRef.current, {
            width: canvasContainer.offsetWidth * 0.6,
            height: canvasContainer.offsetHeight * 0.8,
            clientTop: 90,
        });
        console.log(canvasRef);
        setCanvas(newCanvas);

        // 휠을 이용해서 줌인/줌아웃
        // newCanvas.on("mouse:wheel", function (opt) {
        //     const delta = opt.e.deltaY;
        //     let zoom = newCanvas.getZoom();
        //     zoom *= 0.999 ** delta;
        //     if (zoom > 20) zoom = 20;
        //     if (zoom < 0.01) zoom = 0.01;
        //     newCanvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
        //     opt.e.preventDefault();
        //     opt.e.stopPropagation();
        // });

        // 윈도우가 리사이즈가 되었을 때 실행
        const handleResize = () => {
            newCanvas.setDimensions({
                width: canvasContainer.offsetWidth * 0.6,
                height: canvasContainer.offsetHeight * 0.8,
            });
        };
        window.addEventListener("resize", handleResize);

        // 처음 접속했을 때 캔버스에 그리기 가능하도록 설정
        // newCanvas.freeDrawingBrush.width = 10;
        // newCanvas.isDrawingMode = true;

        // 언마운트 시 캔버스 정리, 이벤트 제거
        return () => {
            newCanvas.dispose();
            window.removeEventListener("resize", handleResize);
        };
    }, []);



    // useEffect(() => {
    //     // if (!canvasContainerRef.current || !canvasRef.current || !canvas) return;

    //     // canvas.off("mouse:down");
    //     // canvas.off("mouse:move");
    //     // canvas.off("mouse:up");

    //     switch (activeTool) {
    //         case "figure":
    //             break;
    //         case "text":
    //             break;


    //     }
    // }, [activeTool]);


    const addRect = () => {
        addNum += 2;
        const addWidth = 100;
        const addheight = 50;
        canvas.add(new fabric.Rect({
            left: canvas.width * 0.5 - addWidth + addNum,
            top: canvas.height * 0.1 - addheight + addNum,
            fill: '#ffffff',
            stroke: '#000000',
            width: addWidth,
            height: addheight,
            opacity: 0.8
        }));
    };
    const addText = () => {
        addNum += 2;
        const addWidth = 100;
        const addheight = 50;
        const text = "This text is test";
        const textSample = new fabric.Textbox(text, {
            fontSize: 20,
            left: canvas.width * 0.5 - addWidth + addNum,
            top: canvas.height * 0.1 - addheight + addNum,
            fontFamily: 'helvetica',
            fill: '#000000',
            fontWeight: '',
            originX: 'left',
            width: 300,
            hasRotatingPoint: true,
            centerTransform: true
        });
        canvas.add(textSample);
        setActiveTool("text");
    };

    const objectCopy = () => {
        setActiveTool("copy");
        setClipboard(canvas._activeObject);
    }
    const objectPaste = () => {
        setActiveTool("paste");
        console.log(clipboard);
        canvas.discardActiveObject();
        clipboard ?
            clipboard.set({
                left: clipboard.left + 10,
                top: clipboard.top + 10,
                evented: true,
            })
            : '';
        if (clipboard.type === 'activeSelection') {
            // active selection needs a reference to the canvas.
            clipboard.canvas = canvas;
            clipboard.forEachObject(function (obj) {
                canvas.add(obj);
            });
            // this should solve the unselectability
            clipboard.setCoords();
        } else {
            canvas.add(clipboard);
        }
        clipboard.top += 10;
        clipboard.left += 10;
        canvas.setActiveObject(clipboard);
        canvas.requestRenderAll();
    }

    // const handleSelectTool = () => {
    //     canvas.isDrawingMode = false;
    //     canvas.selection = true;
    //     canvas.defaultCursor = "default";
    // };
    // const handlePenTool = () => {
    //     canvas.freeDrawingBrush.width = 10;
    //     canvas.isDrawingMode = true;
    // };
    // const handleHandTool = () => {
    //     canvas.isDrawingMode = false;
    //     canvas.selection = false;
    //     canvas.defaultCursor = "move";

    //     let panning = false;
    //     const handleMouseDown = () => {
    //         panning = true;
    //     };
    //     const handleMouseMove = (event) => {
    //         if (panning) {
    //             const delta = new fabric.Point(event.e.movementX, event.e.movementY);
    //             canvas.relativePan(delta);
    //         }
    //     };
    //     const handleMouseUp = () => {
    //         panning = false;
    //     };
    //     canvas.on("mouse:down", handleMouseDown);
    //     canvas.on("mouse:move", handleMouseMove);
    //     canvas.on("mouse:up", handleMouseUp);
    // };
    return (
        <>
            <Canvas>
                <div className="canvas-container" ref={canvasContainerRef}>

                    <div className="tool-bar">
                        <button
                            onClick={() => setActiveTool("figure")}
                            disabled={activeTool === "figure"}
                        >
                            <i className="fi fi-ss-resources"></i>
                        </button>
                        <button
                            onClick={addText}
                            className={activeTool === "text" ? "active" : ""}
                        >
                            <i className="fi fi-rr-text"></i>
                        </button>
                        <button
                            onClick={objectCopy}
                            className={activeTool === "copy" ? "active" : ""}
                        >
                            <i className="fi fi-rr-copy"></i>
                        </button>
                        <button
                            onClick={objectPaste}
                            className={activeTool === "paste" ? "active" : ""}
                        >
                            <i className="fi fi-rr-add-document"></i>
                        </button>
                        <button
                            onClick={() => setActiveTool("send")}
                            disabled={activeTool === "send"}
                        >
                            <i className="fi fi-bs-arrows-from-dotted-line"></i>
                        </button>

                    </div>

                    <button className="addRect" onClick={addRect}>
                        <svg width="20" height="20">
                            <path xmlns="http://www.w3.org/2000/svg" d="m19.5,24H4.5c-2.481,0-4.5-2.019-4.5-4.5V4.5C0,2.019,2.019,0,4.5,0h15c2.481,0,4.5,2.019,4.5,4.5v15c0,2.481-2.019,4.5-4.5,4.5ZM4.5,1c-1.93,0-3.5,1.57-3.5,3.5v15c0,1.93,1.57,3.5,3.5,3.5h15c1.93,0,3.5-1.57,3.5-3.5V4.5c0-1.93-1.57-3.5-3.5-3.5H4.5Z" />
                        </svg>
                    </button>
                    <canvas ref={canvasRef} />


                </div>
            </Canvas>
        </>


    );
}
const Canvas = styled.div`
    .canvas-container{
        padding-left: 150px;
    }
`;

