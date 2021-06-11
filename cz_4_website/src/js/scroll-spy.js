class ScrollSpy {
    constructor() {
        this.targets = {};
        this.targets.nodes =  this.getTargetNodes().sort( (a, b) => a.offsetTop - b.offsetTop);
        this.targets.positions = this.getTargetPositions();
        this.targets.anchors = this.getAnchorNodes();
        this.navHeight = document.querySelector('.nav').offsetHeight;
        window.addEventListener('scroll', this.setSpy.bind(this));
    }

    getTargetNodes() {
        const anchors = this.getAnchors(); 

        const selector = this.prepareAnchors(anchors);
        return [...document.querySelectorAll(selector)];
    }

    getAnchors() {
        return Array.from(document.querySelectorAll('.nav__list--mobile [target-anchor]')).map( el => el.getAttribute('target-anchor'));
    }

    prepareAnchors(anchors) {
        return anchors.map(el => `#${el}`).join(',');
    }

    getTargetPositions() {
        return this.targets.nodes.map( el => el.offsetTop )
    }

    getAnchorNodes() {
        const anchors = [];

        this.targets.nodes.forEach( el => {
            anchors.push(document.querySelectorAll(`[target-anchor=${el.id}]`));
        })

        return anchors;

    }


    setSpy() {
        let max;
        for (let i = 0; i <  this.targets.positions.length; i++) {
            if(this.checkTarget(this.targets.positions[i])) {
                max = i;
            }
        }
        if (max !== undefined) {
            this.setStyle(this.targets.anchors[max]);
        } else {
            this.resetStyle();
        }
    }

    checkTarget(item) {
        return (item - this.navHeight < window.scrollY);
    }

    setStyle(items) {
        
        if(!this.oldItems) {
            this.oldItems = items;
            items.forEach(item => item.style.backgroundColor = "rgba(54, 167, 23, 0.2)");
            return;
        }

        if(items != this.oldItems) {
            this.oldItems.forEach(item => item.style.backgroundColor = '');
            this.oldItems = items;
            items.forEach(item => item.style.backgroundColor = "rgba(54, 167, 23, 0.2)");
            return;
        }
    }

    resetStyle() {
        if(this.oldItems) {
            this.oldItems.forEach(item => item.style.backgroundColor = '');
            this.oldItems = undefined;
        }
    }
}

new ScrollSpy();