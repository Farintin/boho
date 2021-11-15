var navListTemp = document.createElement("template");
navListTemp.innerHTML = `
  <style>
    .menu {
        display: flex;
        align-items: center;
    }
    .menu .item {
        margin: 0 21px;
        font-weight: 700;
        font-size: 81%;
        text-transform: uppercase;
        letter-spacing: 3px;
        color: var(--fgcolor3);
    }
    .menu .item.active {
      color: gold!important;
    }
</style>

<meta id="selectors" color=".item">

<nav class="menu">

  <meta slot="content" refParent="comp-nav-list">

</nav>
`;



class NavList extends Comp {
  constructor() {
    super(navListTemp)

  }
};

window.customElements.define("comp-nav-list", NavList);