const heroTemp = document.createElement("template");
heroTemp.innerHTML = `
<style for="comp-hero">
    .hero {
        height: 90vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .hero .wrapper {
        width: 80%;
        max-width: 1400px;
        height: 100%;
        margin: 0 auto;
    }
</style>

<meta id="selectors" bgColor=".hero" bgImg=".hero">

<section class="hero">
    <div class="wrapper">

    </div>
</section>
`;

class Hero extends Comp {
  constructor() {
    super(heroTemp)
  }
};
window.customElements.define("comp-hero", Hero)