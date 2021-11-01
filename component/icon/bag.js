var bagIconTemp = document.createElement("template");
bagIconTemp.innerHTML = `
<style>
  .icon.bag {
    stroke-width: 2.4px;
  }
</style>

<meta id="selectors" stroke="svg" link="a">

<a>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon bag feather feather-shopping-bag">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
</a>
`;




class bagIcon extends Icon {
  constructor() {
    super(bagIconTemp);

  }
};
window.customElements.define("icon-bag", bagIcon);