const heroSliderTemp = document.createElement("template");
heroSliderTemp.innerHTML = `
<style for="comp-hero-slider">
    .hero-slider {
        --slider-h: 95vh;
        height: var(--slider-h);
        position: relative;
    }
    .hero-slider > .container {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }



    .hero-slider > .container .hero {
        --hero-h: var(--slider-h);
    }



    .hero-slider .nav-btn {
        position: absolute;
        width: 10%;
        height: 100%;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .hero-slider .nav-btn.next {
        right: 0;
    }
    .hero-slider .nav-btn p {
        font-family: var(--font1);
        font-size: 300%;
        font-weight: bold;
        color: pink;
    }
    .hero-slider .nav-btn:hover p {
        color: white;
        font-size: 270%;
    }
</style>

<section class="hero-slider">
    <div class="container">

        <meta slot="slides" refParent="comp-hero-slider">

    </div>

    <div class="nav-btn prev">
        <p><</p>
    </div>
    <div class="nav-btn next">
        <p>></p>
    </div>
</section>
`;

class HeroSlider extends Comp {
  constructor() {
    super(heroSliderTemp)
  }
};
window.customElements.define("comp-hero-slider", HeroSlider)