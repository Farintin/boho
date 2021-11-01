var searchIconTemp = document.createElement("template");
searchIconTemp.innerHTML = `
<style>
  .icon.search {
    stroke-width: 2.8px;
  }
</style>

<meta id="selectors" stroke="svg" link="a">

<a>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon search feather feather-search">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
</a>
`;




class searchIcon extends Icon {
  constructor() {
    super(searchIconTemp);

  }
};
window.customElements.define("icon-search", searchIcon);