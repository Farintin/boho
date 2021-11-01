document.querySelectorAll('.icon').forEach(function(elem) {
    elem.onmouseover = function() {
        document.querySelector('*').style.userSelect = 'none'
    };
    elem.onmouseout = function() {
        document.querySelector('*').style.userSelect = 'auto'
    }
});



window.scrollOnClick = function scrollOnClick(btnQ, scrollableObjQ, direction, jumpBy, jump) {
    document.querySelector(btnQ).onclick = function () {
        let container = document.querySelector(scrollableObjQ);

        let directionLengthMap = {
            percentage: {
                up: container.offsetHeight/100 * -1,
                down: container.offsetHeight/100,
                left: container.offsetWidth/100 * -1,
                right: container.offsetWidth/100
            },
            fixed: {
                up: -1,
                down: 1,
                left: -1,
                right: 1
            }
        };

        jumpVector = directionLengthMap[jumpBy][direction];
        jumpAmount = jumpVector * jump;

        switch (direction) {
            case 'up':
                container.scrollBy(0, jumpAmount);
                break
            case 'down':
                container.scrollBy(0, jumpAmount);
                break
            case 'left':
                container.scrollBy(jumpAmount, 0);
                break
            case 'right':
                container.scrollBy(jumpAmount, 0);
                break
        }
    }
};








class Comp extends HTMLElement {
    constructor(temp) {
        super();

        this.tempContentParentNode = this;
        this.newTemp = temp;
        this.comp_parseTemp();
        
        this.inserts = this.querySelectorAll(`*[insert][for="${this.tagName.toLowerCase()}"]`);

        this.css = {
            bgColor: {
                data: this.getAttribute("bgColor"),
                value: function() {
                    return this.data
                },
                cb: function(node) {
                    node.style.backgroundColor = this.value()
                }
            },
            color: {
                data: this.getAttribute("color"),
                value: function() {
                    return this.data
                },
                cb: function(node) {
                    node.style.color = this.value()
                }
            },
            bgImg: {
                data: this.getAttribute("bgImg"),
                value: function() {
                    return `url(${this.data})`
                },
                cb: function(node) {
                    node.style.backgroundImage = this.value()
                }
            }
        };
        this.attr = {
            link: {
                data: this.getAttribute("link"),
                value: function() {
                    return this.data
                },
                cb: function(node) {
                    node.setAttribute('href', this.value())
                }
            }
        };

        this.selectorsMetaNode = this.querySelector("meta#selectors");
    }

    connectedCallback() {
        if (this.isConnected) {

            for (let node of this.inserts) {
                let insertTarget = this.querySelector(`comp-insert[name="${node.getAttribute("insert")}"][for="${this.tagName.toLowerCase()}"]`);
                insertTarget.outerHTML = node.innerHTML;
                node.remove()
            };
            let compNodes = this.querySelectorAll('comp-insert');
            for (let node of compNodes) {
                node.remove()
            };

            if (this.selectorsMetaNode) {
                let nodes;
                let props = {...this.css, ...this.attr};

                for (const propName in props) {
                    let prop = props[propName];
                    if (prop.data) {
                        nodes = this.querySelectorAll(this.selectorsMetaNode.getAttribute(propName));
                        for (let node of nodes) {
                            prop.cb(node)
                        }
                    }
                }
            }

        };

    }

    comp_parseTemp() {
        if (this.newTemp) {
            this.tempContentParentNode.appendChild(this.newTemp.content.cloneNode(true));
            this.newTemp = null
        }
    }
};



class Icon extends Comp {
    constructor(temp) {
        super(temp);

        this.css.stroke = {
            data: this.getAttribute("stroke"),
            value: function() {
                return this.data
            },
            cb: function(node) {
                node.style.stroke = this.value()
            }
        }
    }
};



class Insert extends HTMLElement {
    constructor() {
        super()
    }
};
window.customElements.define("comp-insert", Insert)