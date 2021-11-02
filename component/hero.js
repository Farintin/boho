const heroTemp = document.createElement("template");
heroTemp.innerHTML = `
<style for="comp-hero">
    .hero {
        --hero-height: 95vh;
        height: var(--hero-height);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }
    .hero .overlay {
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 20%;
    }

    .hero .container {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }
    .hero .container .wrapper {
        width: 80%;
        max-width: 1400px;
        height: 100%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 5%;
    }

    .hero .col {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .hero .col-1 > * {
        margin: 16px 0;
    }
    .hero .col-2 {
        align-items: center;
    }

    .hero .col-2 .image {
        --image-h: calc(var(--hero-height) * .87);
        --image-w: calc(var(--image-h) * .75);
        width: var(--image-w);
        height: var(--image-h);
        position: relative;
    }
    .hero .col-2 .image .frame {
        position: absolute;
        top: 0;
        right: 0;
        width: calc(100% - 36px);
        height: calc(100% - 36px);
        border: 3px solid;
        border-color: #fff;
    }
    .hero .col-2 .image img {
        position: absolute;
        left: 0;
        bottom: 0;
        width: calc(100% - 36px);
        height: calc(100% - 36px);
        object-fit: cover;
    }
</style>

<meta id="selectors" bgColor=".hero" bgImg=".hero">

<section class="hero">
    <div class="overlay"></div>
    <div class="container">
        <div class="wrapper">
            <div class="col col-1">

                <h1 class="text-heading" style="color: #fff;">The Princess collection</h1>
                <p class="text-para" style="color: #fff;">
                    Our hanmade product is not only about a certain look. 
                    It is about life. 
                    About feeling right about your surroundings and what you wear, 
                    about responsible understanding and global empathy.</p>
                <div class="btn" style="border-color: #fff;">
                    <p style="color: #fff;">shop now</p>
                </div>
                
            </div>
            <div class="col col-2">

                <div class="image">
                    <div class="frame"></div>
                    <img src="img/carousel-1-2.jpg" alt="product title">
                </div>

            </div>
        </div>
    </div>
</section>
`;

class Hero extends Comp {
  constructor() {
    super(heroTemp)
  }
};
window.customElements.define("comp-hero", Hero)