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
        font-size: 78%;
        text-transform: uppercase;
        letter-spacing: 3px;
        color: var(--fgcolor3);
    }
</style>

<meta id="selectors" color=".item">

<nav class="menu">

  <comp-insert name="content" for="comp-nav-list"></comp-insert>

</nav>
`;



class NavList extends Comp {
  constructor() {
    super(navListTemp)

  }
};

window.customElements.define("comp-nav-list", NavList);