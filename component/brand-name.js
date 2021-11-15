var brandNameTemp = document.createElement("template");
brandNameTemp.innerHTML = `
<style>
    .brand-name {
      margin-bottom: 0px;
    }
    .brand-name .text {
      font-family: 'Starfish';
      font-size: 210%;
      font-weight: normal;
    }
</style>

<meta id="selectors" color=".text">

<div class="comp brand-name">
  <a href="#" class="text">

    <meta slot="text" refParent="comp-brand-name">
    
  </a>
</div>
`;




class BrandName extends Comp {
  constructor() {
    super(brandNameTemp);

  }
};
window.customElements.define("comp-brand-name", BrandName);