import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "assets/styleComponent/canvas";
import { fabric } from "fabric";
import "assets/css/icon.css";

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
            width: 960,
            height: canvasContainer.offsetHeight * 0.8,
            clientTop: 90,
        });
        setCanvas(newCanvas);

        // left content width, height 조정
        (() => {
            const wholeCanvas = document.querySelector(".whole");
            const leftCnt = document.querySelector(".leftContent");

            wholeCanvas.style.paddingTop = `${canvasContainer.offsetHeight * 0.1}px`;


            leftCnt.style.height = `${canvasContainer.offsetHeight * 0.8}px`;
            leftCnt.style.width = '55px';
        })();

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
            const wholeCanvas = document.querySelector(".whole");
            // if (canvasContainer.offseteWidth) {
            // }
            newCanvas.setDimensions({
                width: 960,
                height: canvasContainer.offsetHeight * 0.8,
            });

        };
        window.addEventListener("resize", handleResize);

        // 언마운트 시 캔버스 정리, 이벤트 제거
        return () => {
            newCanvas.dispose();
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const viewContents = (className) => {
        const leftCnt = document.querySelectorAll(`.leftContent div`);
        const detailClass = document.querySelector(`.${className}`);
        leftCnt.forEach((item) => {
            if (item.classList.value !== className) {
                item.style.display = "none";
            } else {

                detailClass.style.display = "block";
            }
        })
    };


    useEffect(() => {
        if (!canvasContainerRef.current || !canvasRef.current || !canvas) return;

        canvas.off("mouse:down");
        canvas.off("mouse:move");
        canvas.off("mouse:up");

        switch (activeTool) {
            case "figure":

                break;
            case "text":

                break;
            case "copy":

                break;
            case "paste":

                break;
            case "removeSelected":

                break;
            case "removeAll":

                break;
            case "send":

                break;
            default:
                break;
        }
        viewContents(activeTool);
    }, [activeTool]);


    const addRect = () => {
        addNum += 2;
        const addWidth = 100;
        const addheight = 80;
        canvas.add(new fabric.Rect({
            left: canvas.width * 0.5 - addWidth + addNum,
            top: canvas.height * 0.2 - addheight + addNum,
            fill: '#ffffff',
            stroke: '#000000',
            strokeUniform: true,
            width: addWidth,
            height: addheight,
            opacity: 1
        }));
    };
    const addTri = () => {
        addNum += 2;
        const addWidth = 100;
        const addheight = 80;
        canvas.add(new fabric.Triangle({
            left: canvas.width * 0.5 - addWidth + addNum,
            top: canvas.height * 0.2 - addheight + addNum,
            fill: '#ffffff',
            stroke: '#000000',
            strokeUniform: true,
            width: addWidth,
            height: addheight,
            opacity: 1
        }));
    };
    const addCircle = () => {
        addNum += 2;
        const addWidth = 100;
        const addheight = 80;
        canvas.add(new fabric.Circle({
            left: canvas.width * 0.5 - addWidth + addNum,
            top: canvas.height * 0.2 - addheight + addNum,
            fill: '#ffffff',
            stroke: '#000000',
            strokeUniform: true,
            radius: 50,
            opacity: 1
        }));

    };
    const addText = () => {
        addNum += 3;
        const addWidth = 100;
        const addheight = 50;
        const text = "This text is test";
        const textSample = new fabric.Textbox(text, {
            fontSize: 25,
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

    const removeAll = () => {
        setActiveTool("removeAll");
        if (window.confirm("정말로 모두 삭제하시겠습니까?"))
            canvas.clear();
    }
    const removeSelected = () => {
        setActiveTool("removeSelected");
        var activeObjects = canvas.getActiveObjects();
        canvas.discardActiveObject()
        if (activeObjects.length) {
            canvas.remove.apply(canvas, activeObjects);
        }
    }
    const objectCopy = () => {
        setActiveTool("copy");
        try {
            canvas.getActiveObject().clone(function (cloned) {
                setClipboard(cloned);
            });
        } catch (error) {
            console.log("복사할 개체를 선택하세요.");
        }
    }
    const objectPaste = () => {
        setActiveTool("paste");
        try {
            clipboard.clone(function (clonedObj) {
                canvas.discardActiveObject();
                clonedObj.set({
                    left: clonedObj.left + 20, // 복사되는 객체의 위치 조정
                    top: clonedObj.top + 20, // 복사되는 객체의 위치 조정
                    evented: true,
                });

                if (clonedObj.type === 'activeSelection') {
                    // active selection needs a reference to the canvas.
                    clonedObj.canvas = canvas;
                    clonedObj.forEachObject(function (obj) {
                        canvas.add(obj);
                    });
                    // this should solve the unselectability
                    clonedObj.setCoords();
                } else {
                    canvas.add(clonedObj);
                }
                clipboard.top += 20;
                clipboard.left += 20;
                canvas.setActiveObject(clonedObj);
                canvas.requestRenderAll();
            });
        } catch (error) {
            console.log("붙여 넣을 개체를 복사하세요.");
        }

    }

    return (
        <>
            <Canvas>
                <div className="canvas-container whole" ref={canvasContainerRef}>

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
                            onClick={removeSelected}
                            className={activeTool === "removeSelected" ? "active" : ""}
                        >
                            <i class="fi fi-rs-eraser"></i>
                        </button>
                        <button
                            onClick={removeAll}
                            className={activeTool === "removeAll" ? "active" : ""}
                        >
                            <i class="fi fi-rs-trash"></i>
                        </button>
                        <button
                            onClick={() => setActiveTool("send")}
                            disabled={activeTool === "send"}
                        >
                            <i className="fi fi-bs-arrows-from-dotted-line"></i>
                        </button>

                    </div>

                    <div className="leftContent">
                        <div className="figure">
                            <button className="addRect" onClick={addRect}>
                                <i className="fi fi-tr-square"></i>
                            </button>
                            <button className="addTri" onClick={addTri}>
                                <i class="fi fi-tr-triangle"></i>
                            </button>
                            <button className="addCircle" onClick={addCircle}>
                                <i className="fi fi-tr-circle"></i>
                            </button>
                        </div>
                        <div className="test"></div>
                    </div>
                    <canvas ref={canvasRef} />


                </div>
            </Canvas>
        </>


    );
}
