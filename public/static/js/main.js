'use strict';

import Palette from './palette.js';

const color_node = document.querySelector('.canvas__list');
let colors = new Palette(color_node);
colors.getColors();
colors.getCanvas(30, 40);
colors.getCustomColor();
