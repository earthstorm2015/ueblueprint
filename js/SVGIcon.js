import { html } from "lit"

export default class SVGIcon {

    static branchNode = html`
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2H6C5.44772 2 5 2.44772 5 3V13C5 13.5523 5.44772 14 6 14H11V12H7V4H11V2Z" fill="white" />
            <rect x="1" y="7" width="4" height="2" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 6L15 3L11 0V6Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 16L15 13L11 10V16Z" fill="white" />
        </svg>
    `

    static close = html`
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <line x1="2" y1="2" x2="30" y2="30" stroke="currentColor" stroke-width="4" />
            <line x1="30" y1="2" x2="2" y2="30" stroke="currentColor" stroke-width="4" />
        </svg>
    `

    static correct = html`
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path fill="#2da800" d="M 2 16 L 14 30 L 30 2 L 13 22 Z" />
        </svg>
    `

    static execPin = html`
        <svg viewBox="-2 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path class="ueb-pin-tofill" stroke-width="1.25" stroke="white" fill="none"
                d="M 2 1 a 2 2 0 0 0 -2 2 v 10 a 2 2 0 0 0 2 2 h 4 a 2 2 0 0 0 1.519 -0.698 l 4.843 -5.651 a 1 1 0 0 0 0 -1.302 L 7.52 1.7 a 2 2 0 0 0 -1.519 -0.698 z" />
        </svg>
    `

    static expandIcon = html`
        <svg fill="currentColor" viewBox="4 4 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M 16.003 18.626 l 7.081 -7.081 L 25 13.46 l -8.997 8.998 -9.003 -9 1.917 -1.916 z" />
        </svg>
    `

    static forEachLoop = html`
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2C1.8 2 0 3.8 0 6V9C0 11.2 2 13 4 13H10V11H5C3.2 11 2 9.7 2 8V7C2 5.63882 2.76933 4.53408 4 4.14779V2ZM12 4C13.8 4 14 5.3 14 7V8C14 8.8 13.7 9.5 13.3 10L15.2 11.4C15.7 10.7 16 9.9 16 9V6C16 3.8 14.2 2 12 2V4Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16L13 12L8 8V16Z" fill="white" />
            <rect x="5" y="1" width="1" height="4" fill="white" />
            <rect x="7" y="1" width="1" height="4" fill="white" />
            <rect x="9" y="1" width="1" height="4" fill="white" />
            <rect x="11" y="2" width="1" height="2" fill="white" />
        </svg>
    `

    static functionSymbol = html`
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9.72002 6.0699C9.88111 4.96527 10.299 3.9138 10.94 2.99991C10.94 2.99991 10.94 3.05991 10.94 3.08991C10.94 3.36573 11.0496 3.63026 11.2446 3.8253C11.4397 4.02033 11.7042 4.12991 11.98 4.12991C12.2558 4.12991 12.5204 4.02033 12.7154 3.8253C12.9105 3.63026 13.02 3.36573 13.02 3.08991C13.0204 2.90249 12.9681 2.71873 12.8691 2.5596C12.7701 2.40047 12.6283 2.27237 12.46 2.18991H12.37C11.8725 2.00961 11.3275 2.00961 10.83 2.18991C9.21002 2.63991 8.58002 4.99991 8.58002 4.99991L8.40002 5.1199H5.40002L5.15002 6.1199H8.27002L7.27002 11.4199C7.11348 12.0161 6.79062 12.5555 6.33911 12.9751C5.8876 13.3948 5.32607 13.6773 4.72002 13.7899C4.78153 13.655 4.81227 13.5081 4.81002 13.3599C4.81002 13.0735 4.69624 12.7988 4.4937 12.5962C4.29116 12.3937 4.01646 12.2799 3.73002 12.2799C3.44359 12.2799 3.16889 12.3937 2.96635 12.5962C2.76381 12.7988 2.65002 13.0735 2.65002 13.3599C2.66114 13.605 2.75692 13.8386 2.92104 14.021C3.08517 14.2033 3.30746 14.3231 3.55002 14.3599C7.91002 15.1999 8.55002 11.4499 8.55002 11.4499L9.55002 7.05991H12.55L12.8 6.05991H9.64002L9.72002 6.0699Z"
                fill="currentColor"
            />
        </svg>
    `

    static genericPin = html`
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <circle class="ueb-pin-tofill" cx="16" cy="16" r="14" fill="none" stroke="currentColor" stroke-width="5" />
            <path d="M 34 6 L 34 26 L 42 16 Z" fill="currentColor" />
        </svg>
    `

    static loopNode = html`
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <style>
                    .cls-1 {
                        fill: #fff;
                        fill-rule: evenodd;
                    }

                    .cls-2 {
                        fill: none;
                    }
                </style>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_4" data-name="Layer 4">
                    <path class="cls-1" d="M16,2H4A4,4,0,0,0,0,6v4a4.14,4.14,0,0,0,4,4H9v5l8-6L9,7v5H4.5A2.36,2.36,0,0,1,2,9.5v-3A2.36,2.36,0,0,1,4.5,4h11A2.36,2.36,0,0,1,18,6.5V9a3,3,0,0,1-.69,2l1.88,1.41A4,4,0,0,0,20,10V6A4,4,0,0,0,16,2Z" />
                    <rect class="cls-2" width="20" height="20" />
                </g>
            </g>
        </svg>
    `

    static macro = html`
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2.92L10 12.29L14.55 2.61C14.662 2.4259 14.8189 2.27332 15.0061 2.16661C15.1933 2.05989 15.4045 2.00256 15.62 2H19L18.66 2.89C18.66 2.89 17.17 3.04 17.11 3.63C17.05 4.22 16 15.34 15.93 16.13C15.86 16.92 17.33 17.13 17.33 17.13L17.17 17.99H13.84C13.7241 17.9764 13.612 17.9399 13.5103 17.8826C13.4086 17.8253 13.3194 17.7484 13.2477 17.6562C13.176 17.5641 13.1234 17.4586 13.0929 17.346C13.0624 17.2333 13.0546 17.1157 13.07 17L14.43 5.52L10 14.57C9.8 15.03 9.07 15.72 8.63 15.71H7.75L6.05 4.86L3.54 17.39C3.51941 17.5514 3.44327 17.7005 3.32465 17.8118C3.20603 17.9232 3.05235 17.9897 2.89 18H1L1.11 17.09C1.11 17.09 2.21 17.09 2.3 16.69C2.39 16.29 5.3 3.76 5.41 3.32C5.52 2.88 4.19 2.81 4.19 2.81L4.46 2H6.62C7.09 2 7.92 2.38 8 2.92Z" fill="white"/>
        </svg>
    `

    static referencePin = html`
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <polygon class="ueb-pin-tofill" points="4 16 16 4 28 16 16 28" stroke="currentColor" stroke-width="5" />
        </svg>
    `
}
