const footerTemp = document.createElement("template");
footerTemp.innerHTML = `
<style for="comp-footer">
    .footer {
        --bounds-w: 1px;
        --bounds-color: #fff;
    }
    .footer main {
        background-color: pink;
        padding-bottom: 64px;
    }
    .footer main .wrapper {
        width: 80%;
        max-width: 1400px;
        margin: 0 auto;
    }

    .footer main .heading {
        display: flex;
        justify-content: center;
    }
    .footer .heading .brand-name {
        transform: translateY(-55%);
    }


    
    .footer a {
        text-decoration: none;
        color: #000;
    }



    .footer-grids {
        border: 1px solid var(--bounds-color);
        border-width: calc(var(--bounds-w) * 2) 0;
    }



    footer-grid {
        padding: 36px 0;
        display: grid;
        border: 1px solid var(--bounds-color);
        border-width: var(--bounds-w) 0;
    }
    footer-grid:first-of-type {
        border-top-width: 0;
    }
    footer-grid:last-of-type {
        border-bottom-width: 0;
    }

    footer-grid.cols-1 {
        grid-template-columns: 1fr;
    }
    footer-grid.cols-2 {
        grid-template-columns: 1fr 1fr;
    }
    footer-grid.cols-3 {
        grid-template-columns: 1fr 1fr 1fr;
    }
    footer-grid.cols-4 {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    footer-grid.cols-5 {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    footer-grid .col {
        border: 1px solid var(--bounds-color);
        border-width: 0 var(--bounds-w) 0 0;
        display: flex;
        padding: 0 54px;
    }
    footer-grid .col:last-child {
        border-right-width: 0;
    }
    footer-grid .col.vertical {
        flex-direction: column;
    }
    footer-grid .col h5 {
        color: #000;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 81%;
        letter-spacing: .9px;
        margin-bottom: 16px;
    }
    footer-grid .col hr {
        opacity: 0;
        margin-top: 12px;
    }
    footer-grid .col p {
        color: #000;
        font-weight: 600;
        font-size: 75%;
        letter-spacing: 1.5px;
        line-height: 180%;
    }
    footer-grid .col .note {
        font-weight: 900;
        font-size: 70.5%;
    }

    footer-grid .col ul {
        list-style: none;
        margin-top: 4px;
    }
    footer-grid .col ul li {
        margin-bottom: 12px;
        text-transform: capitalize;
        font-size: 81%;
        font-weight: 600;
        text-align: center;
        letter-spacing: 1px;
    }


    
    footer-grid.nav {
        display: flex;
        flex-flow: wrap;
        justify-content: center;
        padding: 2px 0px;
    }
    footer-grid.nav .link {
        padding: 0px 32px;
        margin: 6px 0;
        border: 1px solid var(--bounds-color);
        border-width: 0 0 0 var(--bounds-w);
    }
    footer-grid.nav .link:first-child {
        border-left-width: 0;
    }
    footer-grid.nav .link a {
        text-transform: uppercase;
        font-weight: 400;
        font-size: 81%;
        letter-spacing: 1.2px;
    }



    .footer .media {
        display: flex;
    }
    .footer .media .icon {
        width: 24px;
        margin: 0 0 0 24px;
    }
    .footer .label {
        font-family: var(--font1);
        font-size: 120%;
        font-weight: 400;
        letter-spacing: 1px;
        margin: 0 4px 8px;
    }



    .footer .copy-right {
        padding: 15px 0;
        text-align: center;
        font-size: 69%;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
</style>

<meta id="selectors" bgColor="main">

<footer class="footer">
    <main>
        <div class="wrapper">

            <div class="heading">
                <comp-brand-name color="var(--fg-color1)">
                    <div for="comp-brand-name" insert="content">Boho Princess</div>
                </comp-brand-name>
            </div>
            <div class="footer-grids">

                <footer-grid class="nav">
                    <div class="link">
                        <a href="#">about us</a>
                    </div>
                    <div class="link">
                        <a href="#">event</a>
                    </div>
                    <div class="link">
                        <a href="#">consultation</a>
                    </div>
                    <div class="link">
                        <a href="#">our joy family</a>
                    </div>
                    <div class="link">
                        <a href="#">faq</a>
                    </div>
                </footer-grid>

                <footer-grid class="cols-3">
    
                    <div class="col vertical align-items-center">
                        <h5>contact</h5>
                        <p>248.876.0833</p>
                        <p>info@joyabendmode.com</p>
                        <hr>
                        <p>506 S. Washington Avenue
                            Royal Oak, Michigan 48067
                        </p>
                    </div>
                    
                    <div class="col vertical align-items-center">
                        <h5>hours</h5>
                        <p class="note">* by appointment only *</p>
                        <hr>
                        <p class="capitalize">tues, thurs, & fri | <span class="uppercase">11am-5am</span></p>
                        <p class="capitalize">wed & sat | <span class="uppercase">11am-7pm</span></p>
                        <p class="uppercase">closed sunday & monday</p>
                    </div>
    
                    <div class="col vertical align-items-center">
                        <h5>information</h5>
                        <ul>
                            <li><a href="#">contact us</a></li>
                            <li><a href="#">browse collections</a></li>
                            <li><a href="#">terms & conditions</a></li>
                            <li><a href="#">privacy policy</a></li>
                        </ul>
                    </div>

                </footer-grid>

                <footer-grid class="cols-2">
    
                    <div class="col justify-content-end align-items-center">
                        <h1 class="label">Let's connect :</h1>
                        <div class="media">
                            <i class="icon twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 350 350" xml:space="preserve">
                                    <desc>Created with Fabric.js 1.7.22</desc>
                                    <defs>
                                    </defs>
                                    <g id="icon" style="stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform="translate(-1.9444444444444287 -1.9444444444444287) scale(3.89 3.89)" >
                                        <path d="M 28.304 81.572 c 33.964 0 52.537 -28.138 52.537 -52.537 c 0 -0.8 -0.016 -1.595 -0.053 -2.387 c 3.605 -2.606 6.739 -5.858 9.212 -9.561 c -3.309 1.47 -6.869 2.46 -10.604 2.907 c 3.812 -2.286 6.739 -5.903 8.119 -10.214 c -3.569 2.115 -7.519 3.654 -11.724 4.482 c -3.37 -3.589 -8.168 -5.834 -13.478 -5.834 c -10.198 0 -18.468 8.27 -18.468 18.464 c 0 1.449 0.162 2.858 0.479 4.21 C 28.978 30.33 15.37 22.982 6.264 11.81 c -1.587 2.728 -2.501 5.899 -2.501 9.281 c 0 6.406 3.26 12.061 8.217 15.37 c -3.029 -0.093 -5.874 -0.925 -8.363 -2.31 c -0.004 0.077 -0.004 0.154 -0.004 0.235 c 0 8.944 6.366 16.409 14.814 18.102 c -1.551 0.422 -3.183 0.649 -4.868 0.649 c -1.19 0 -2.347 -0.118 -3.471 -0.333 c 2.351 7.336 9.167 12.674 17.25 12.825 c -6.321 4.953 -14.282 7.904 -22.933 7.904 c -1.49 0 -2.96 -0.085 -4.405 -0.256 C 8.172 78.515 17.875 81.572 28.304 81.572" style="stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                    </g>
                                </svg>
                            </i>
                            <i class="icon facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 350 350" xml:space="preserve">
                                    <desc>Created with Fabric.js 1.7.22</desc>
                                    <defs>
                                    </defs>
                                    <g id="icon" style="stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform="translate(-1.9444444444444287 -1.9444444444444287) scale(3.89 3.89)" >
                                        <path d="M 45 -0.228 c -24.853 0 -45 20.25 -45 45.229 c 0 22.806 16.797 41.66 38.633 44.77 V 58.779 h -10.64 V 46.328 h 10.64 v -9.182 c 0 -10.656 6.441 -16.458 15.849 -16.458 c 4.506 0 8.38 0.339 9.508 0.491 v 11.136 l -6.525 0.003 c -5.116 0 -6.107 2.457 -6.107 6.061 v 7.949 h 12.202 l -1.589 12.451 H 51.359 v 30.993 C 73.199 86.666 90 67.81 90 45.001 C 90 20.022 69.853 -0.228 45 -0.228 z" style="stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                    </g>
                                </svg>
                            </i>
                            <i class="icon instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 350 350" xml:space="preserve">
                                    <desc>Created with Fabric.js 1.7.22</desc>
                                    <defs>
                                    </defs>
                                    <g id="icon" style="stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform="translate(-1.9444444444444287 -1.9444444444444287) scale(3.89 3.89)" >
                                        <path d="M 62.263 90 H 27.738 C 12.443 90 0 77.557 0 62.263 V 27.738 C 0 12.443 12.443 0 27.738 0 h 34.525 C 77.557 0 90 12.443 90 27.738 v 34.525 C 90 77.557 77.557 90 62.263 90 z M 27.738 7 C 16.303 7 7 16.303 7 27.738 v 34.525 C 7 73.697 16.303 83 27.738 83 h 34.525 C 73.697 83 83 73.697 83 62.263 V 27.738 C 83 16.303 73.697 7 62.263 7 H 27.738 z" style="stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                        <circle cx="45.254999999999995" cy="45.254999999999995" r="21.715" style="stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                                        <circle cx="68.557" cy="21.947000000000003" r="4.897" style="stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                                    </g>
                                </svg>
                            </i>
                        </div>
                    </div>
                    
                    <div class="col vertical justify-content-center">
                        <p class="uppercase">stay in the know with joy abendmode:</p>
                        <div class="form form2">
                            <div class="input">
                                <p>Your email address here</p>
                            </div>
                            <div class="submit">
                                <i class="icon send">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 350 350" xml:space="preserve">
                                        <desc>Created with Fabric.js 1.7.22</desc>
                                        <defs>
                                        </defs>
                                        <g id="icon" style="stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform="translate(20.80555555555557 20.80555555555557) scale(3.39 3.39)" >
                                            <path d="M 89.999 3.075 C 90 3.02 90 2.967 89.999 2.912 c -0.004 -0.134 -0.017 -0.266 -0.038 -0.398 c -0.007 -0.041 -0.009 -0.081 -0.018 -0.122 c -0.034 -0.165 -0.082 -0.327 -0.144 -0.484 c -0.018 -0.046 -0.041 -0.089 -0.061 -0.134 c -0.053 -0.119 -0.113 -0.234 -0.182 -0.346 C 89.528 1.382 89.5 1.336 89.469 1.29 c -0.102 -0.147 -0.212 -0.288 -0.341 -0.417 c -0.13 -0.13 -0.273 -0.241 -0.421 -0.344 c -0.042 -0.029 -0.085 -0.056 -0.129 -0.082 c -0.118 -0.073 -0.239 -0.136 -0.364 -0.191 c -0.039 -0.017 -0.076 -0.037 -0.116 -0.053 c -0.161 -0.063 -0.327 -0.113 -0.497 -0.147 c -0.031 -0.006 -0.063 -0.008 -0.094 -0.014 c -0.142 -0.024 -0.285 -0.038 -0.429 -0.041 C 87.03 0 86.983 0 86.936 0.001 c -0.141 0.003 -0.282 0.017 -0.423 0.041 c -0.035 0.006 -0.069 0.008 -0.104 0.015 c -0.154 0.031 -0.306 0.073 -0.456 0.129 L 1.946 31.709 c -1.124 0.422 -1.888 1.473 -1.943 2.673 c -0.054 1.199 0.612 2.316 1.693 2.838 l 34.455 16.628 l 16.627 34.455 C 53.281 89.344 54.334 90 55.481 90 c 0.046 0 0.091 -0.001 0.137 -0.003 c 1.199 -0.055 2.251 -0.819 2.673 -1.943 L 89.815 4.048 c 0.056 -0.149 0.097 -0.3 0.128 -0.453 c 0.008 -0.041 0.011 -0.081 0.017 -0.122 C 89.982 3.341 89.995 3.208 89.999 3.075 z M 75.086 10.672 L 37.785 47.973 L 10.619 34.864 L 75.086 10.672 z M 55.136 79.381 L 42.027 52.216 l 37.302 -37.302 L 55.136 79.381 z" style="stroke-width: 4px; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                        </g>
                                    </svg>
                                </i>
                            </div>
                        </div>
                    </div>
    
                </footer-grid>

            </div>

        </div>
    </main>
    <div class="copy-right">
        <p>2019 joy abendmode bridal botique</p>
    </div>
</footer>
`;

class Footer extends Comp {
  constructor() {
    super(footerTemp)
  }
};
window.customElements.define("comp-footer", Footer);



class FooterGrid extends HTMLElement {
    constructor() {
      super()
    }
};
window.customElements.define("footer-grid", FooterGrid)