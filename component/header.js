const headerTemp = document.createElement("template");
headerTemp.innerHTML = `
<style for="comp-header">
    .header .wrapper {
        --fg-color: #000;
        width: 80%;
        max-width: 1400px;
        min-height: 100px;
        margin: 0 auto;
        padding: 12px 0;
        box-sizing: border-box;
    }

    .header .row {
        margin: 12px 0;
    }



    .header .row.top {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .header .row.top .col {
        display: flex;
        align-items: center;
    }
    .header .row.top .col > * {
        margin: 0 8px;
    }
    .header .row.top .col > *:first-child {
        margin-left: 0;
    }
    .header .row.top .col > *:last-child {
        margin-right: 0;
    }
    .header .row.top .col-1 {
        justify-content: flex-start;
    }
    .header .row.top .col-2 {
        justify-content: center;
    }
    .header .row.top .col-3 {
        justify-content: flex-end;
    }
    


    .header .row.bottom {
        display: flex;
        justify-content: center;
    }
</style>

<meta id="selectors" bgColor=".header">

<header class="header">
    <div class="wrapper">
        <div class="row top">
            <div class="col col-1">
                
                <comp-insert name="col-1-content" for="comp-header"></comp-insert>

            </div>
            <div class="col col-2">

                <comp-insert name="col-2-content" for="comp-header"></comp-insert>

            </div>
            <div class="col col-3">
                
                <comp-insert name="col-3-content" for="comp-header"></comp-insert>

            </div>
        </div>
        <div class="row bottom">

            <comp-insert name="comp-nav-list" for="comp-header"></comp-insert>

        </div>
    </div>
</header>
`;

class Header extends Comp {
  constructor() {
    super(headerTemp)
  }
};
window.customElements.define("comp-header", Header)