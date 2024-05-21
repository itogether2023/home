import styled from "styled-components";


export const Canvas = styled.div`   

    body {
        overflow-x: hidden;
        overflow-y: hidden;
        margin: 0;
    }

    .whole {
        width: 100vw;
        height: 100vh;
        position: relative;
        background-color: black;
        display: flex;
        justify-content: center;
    }

    .canvas-container .leftContent {
        background-color: #e7e6e7;
        border-right: dotted;
        text-align: center;
    }
    .canvas-container .leftContent .figure {
        display: flex;
        flex-direction: column;
    }
    .canvas-container .leftContent .figure button{
        padding-top: 20px;
    }
    .canvas-container .leftContent .figure i {
        font-size: 30px;
    }

    .canvas-container .lower-canvas {
        background-color: #e7e6e7;
    }

    .canvas-container>button i {
        font-size: 20px;
        color: black;
        padding: 5px;
        background-color: #e7e6e7;
    }

    .tool-bar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 8px;
        gap: 8px;
        border-radius: 10px;
        background-color: #e7e6e7;
        border: 1px solid #e7e6e7;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        position: absolute;
        top: 10px;
    }

    .tool-bar button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        border-radius: 10px;
        border: none;
        background-color: #e7e6e7;
        cursor: pointer;
    }

    .tool-bar button svg {
        fill: #000000;
    }

    .tool-bar button i {
        font-size: 20px;
        color: #000000;
    }

    .tool-bar button:disabled {
        background-color: #7279ff;
    }

    .tool-bar button.active {
        background-color: #7279ff;
    }

    .tool-bar button:disabled svg {
        fill: #ffffff;
    }

    .tool-bar button:disabled i {
        color: #ffffff;
    }

    .tool-bar button.active i {
        color: #ffffff;
    }
`