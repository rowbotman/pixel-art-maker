'use strict';

/**
 * Palette class
 */
export default class Palette {
    constructor(parentNode) {
        this.parent = parentNode;
        this.currentColor = 'white';
        this.showColor = document.querySelector('.canvas__current_color');
        this.mouseIsDown = false;
    }

    /**
     * draw colors palette
     */
    getColors() {
        let colors = [
            'black',
            'darkmagenta',
            'deeppink',
            'brown',
            'darkgreen',
            'chartreuse',
            'darkblue',
            'dodgerblue',
            'aqua',
            'gold',
            'orange',
            'grey',
            'white'
        ];
        let colorsHTML = '';
        colors.forEach((color) => {
            colorsHTML += '<div class="color" style="background-color: ' + color + '"></div>';
        });
        this.parent.insertAdjacentHTML('afterbegin', colorsHTML);
        this.parent.addEventListener('click', (event) => {
            this.currentColor = event.target.style.backgroundColor;
            this.showColor.style.backgroundColor = this.currentColor;
        });
    }

    getCanvas(height, width) {
        let parent = document.querySelector('#squares');
        for (let i = 0; i < height; ++i) {
            let canvasRow = document.createElement('span');
            canvasRow.className = 'square__row';
            let rowHTML = '';
            for (let j = 0; j < width; ++j) {
                rowHTML += '<div class="square"></div>';
            }
            canvasRow.insertAdjacentHTML('afterbegin', rowHTML);
            parent.insertAdjacentElement('afterbegin', canvasRow);
        }

        parent.addEventListener('mousedown', (event) => {
            if (event.target.tagName === 'DIV') {
                this.mouseIsDown = true;
            }
        });
        parent.addEventListener('mouseup', (event) => {
            if (event.target.tagName === 'DIV') {
                this.mouseIsDown = false;
            }
        });

        parent.addEventListener('mouseover', (event) => {
            if (this.mouseIsDown && event.target.tagName === 'DIV') {
                event.target.style.backgroundColor = this.currentColor;
            }
        });
    }
    getCustomColor() {
        let customColor = document.querySelector('.canvas__input');
        customColor.addEventListener('input', (event) => {
            this.showColor.style.backgroundColor = customColor.value;
            this.currentColor = customColor.value;
        });
    }
}
