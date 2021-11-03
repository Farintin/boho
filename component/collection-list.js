const collectionsListTemp = document.createElement("template");
collectionsListTemp.innerHTML = `
<style for="comp-collections-list">
    .collections-list {
        position: relative;
    }

    .collections-list .heading {
        background-color: var(--bgcolor);
        position: relative;
        z-index: -1;
    }
    .collections-list .heading h1 {
        font-size: 270%;
        font-family: var(--font1);
        font-weight: 500;
        transform: translateY(-55%);
        color: pink;
    }

    .collections-list main .card {
        position: relative;
    }
    .collections-list main .card .wrapper {
        display: grid;
        grid-gap: 0 5.7%;
        grid-template-columns: 1fr 1fr;
        padding-bottom: 64px;
        grid-template-areas: "collection-display collection-info";
    }
    .collections-list main .card:nth-child(odd) .bg {
        height: 93%;
        background: var(--bgcolor);
        width: 100%;
        position: absolute;
        z-index: -1;
        top: 40%;
    }
    .collections-list main .card:first-child .bg {
        height: 133%;
        top: 0;
    }
    .collections-list main .card:last-child .bg {
        height: 60%;
    }
    .collections-list main .card:last-child:nth-child(odd) .wrapper {
        border: 1px solid;
        border-width: 0 0 150px 0;
        border-color: rgba(0,0,0,0);
    }
    .collections-list main .card:nth-child(even) .wrapper {
        grid-template-areas: "collection-info collection-display";
    }

    .collections-list .card .display {
        grid-area: collection-display;
    }
    .collections-list .card .display .image {
        height: 510px;
        background-size: auto 100%;
        background-position-x: left;
        background-repeat: no-repeat;
    }
    .collections-list .card .display .image .frame {
        height: 100%;
        z-index: -1;
        position: relative;
        border: 3px solid;
        border-color: pink;
    }
    .collections-list main .card:nth-child(odd) .display .image .frame {
        transform: translate(-36px, -36px);
    }
    .collections-list main .card:nth-child(even) .display .image .frame {
        transform: translate(36px, -36px);
    }

    .collections-list .card .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        grid-area: collection-info;
    }
    .collections-list .card .info .name {
        font-size: 180%;
        font-weight: 500;
        text-transform: capitalize;
        margin-bottom: 16px;
        color: var(--fgcolor4);
    }
    .collections-list .card .info .desc {
        font-weight: 600;
        margin-bottom: 48px;
        color: var(--fgcolor4);
    }
    .collections-list .card .info .name {
      font-family: var(--font1);
    }



    .collections-list .heading .wrapper, .collections-list main .card .wrapper {
        width: 60%;
        max-width: 1050px;
        margin: 0 auto;
    }
</style>

<meta id="selectors" bgColor=".bg">

<section class="collections-list">

    <div class="heading">
        <div class="wrapper">
            <h1>Our Collections</h1>
        </div>
    </div>

    <main>

        <div class="card">
            <div class="bg"></div>
            <div class="wrapper">
                <div class="col display">
                    <div class="image" style="background-image: url('img/carousel-1-2.jpg')" alt="woman in nice clothing">
                        <div class="frame"></div>
                    </div>
                </div>
                
                <div class="col info">
                    <p class="name">winter collections</p>
                    <p class="text-para desc">Your style buddies when winter is coming</p>
                    <div class="btn">
                        <p>shop now</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="bg"></div>
            <div class="wrapper">
                <div class="col display">
                    <div class="image" style="background-image: url('img/carousel-1-2.jpg')" alt="woman in nice clothing">
                        <div class="frame"></div>
                    </div>
                </div>
                
                <div class="col info">
                    <p class="name">bathroom collections</p>
                    <p class="text-para desc">Warmy towel for your bathroom stuff</p>
                    <div class="btn">
                        <p>shop now</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="card">
            <div class="bg"></div>
            <div class="wrapper">
                <div class="col display">
                    <div class="image" style="background-image: url('img/carousel-1-2.jpg')" alt="woman in nice clothing">
                        <div class="frame"></div>
                    </div>
                </div>
                
                <div class="col info">
                    <p class="name">bathroom collections</p>
                    <p class="text-para desc">Warmy towel for your bathroom stuff</p>
                    <div class="btn">
                        <p>shop now</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="card">
            <div class="bg"></div>
            <div class="wrapper">
                <div class="col display">
                    <div class="image" style="background-image: url('img/carousel-1-2.jpg')" alt="woman in nice clothing">
                        <div class="frame"></div>
                    </div>
                </div>
                
                <div class="col info">
                    <p class="name">bathroom collections</p>
                    <p class="text-para desc">Warmy towel for your bathroom stuff</p>
                    <div class="btn">
                        <p>shop now</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="card">
            <div class="bg"></div>
            <div class="wrapper">
                <div class="col display">
                    <div class="image" style="background-image: url('img/carousel-1-2.jpg')" alt="woman in nice clothing">
                        <div class="frame"></div>
                    </div>
                </div>
                
                <div class="col info">
                    <p class="name">bathroom collections</p>
                    <p class="text-para desc">Warmy towel for your bathroom stuff</p>
                    <div class="btn">
                        <p>shop now</p>
                    </div>
                </div>
            </div>
        </div>
        
    </main>
</section>
`;

class CollectionsList extends Comp {
  constructor() {
    super(collectionsListTemp)
  }
};
window.customElements.define("comp-collections-list", CollectionsList)