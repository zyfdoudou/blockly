/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2018 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Material theme.
 */
'use strict';

goog.provide('Blockly.Themes.Material');

goog.require('Blockly.Theme');


Blockly.Themes.Material = {};

// Adjust material colors here:
Blockly.Themes.Material.colours = {
  "colour": '#785549',
  "list": '#6740B4',
  "logic": '#27AAF1',
  "loop": '#50AD55',
  "math": '#8D2EA8',
  "procedure": '#E52D65',
  "text": '#FDC130',
  "variable": '#FC9928'
};

// Adjust block colors here:
Blockly.Themes.Material.defaultBlockStyles = {
  "colour_blocks": {
    "colourPrimary": Blockly.Themes.Material.colours["colour"],
    "colourSecondary": Blockly.utils.colour.blend('white',
        Blockly.Themes.Material.colours["colour"], 0.3),
    "colourTertiary": Blockly.utils.colour.blend('black',
        Blockly.Themes.Material.colours["colour"], 0.2)
  },
  "list_blocks": {
    "colourPrimary": Blockly.Themes.Material.colours["list"],
    "colourSecondary": Blockly.utils.colour.blend('white',
        Blockly.Themes.Material.colours["list"], 0.3),
    "colourTertiary": Blockly.utils.colour.blend('black',
        Blockly.Themes.Material.colours["list"], 0.2)
  },
  "logic_blocks": {
    "colourPrimary": Blockly.Themes.Material.colours["logic"],
    "colourSecondary": Blockly.utils.colour.blend('white',
        Blockly.Themes.Material.colours["logic"], 0.3),
    "colourTertiary": Blockly.utils.colour.blend('black',
        Blockly.Themes.Material.colours["logic"], 0.2)
  },
  "loop_blocks": {
    "colourPrimary": Blockly.Themes.Material.colours["loop"],
    "colourSecondary": Blockly.utils.colour.blend('white',
        Blockly.Themes.Material.colours["loop"], 0.3),
    "colourTertiary": Blockly.utils.colour.blend('black',
        Blockly.Themes.Material.colours["loop"], 0.2)
  },
  "math_blocks": {
    "colourPrimary": Blockly.Themes.Material.colours["math"],
    "colourSecondary": Blockly.utils.colour.blend('white',
        Blockly.Themes.Material.colours["math"], 0.3),
    "colourTertiary": Blockly.utils.colour.blend('black',
        Blockly.Themes.Material.colours["math"], 0.2)
  },
  "procedure_blocks": {
    "colourPrimary": Blockly.Themes.Material.colours["procedure"],
    "colourSecondary": Blockly.utils.colour.blend('white',
        Blockly.Themes.Material.colours["procedure"], 0.3),
    "colourTertiary": Blockly.utils.colour.blend('black',
        Blockly.Themes.Material.colours["procedure"], 0.2)
  },
  "text_blocks": {
    "colourPrimary": Blockly.Themes.Material.colours["text"],
    "colourSecondary": Blockly.utils.colour.blend('white',
        Blockly.Themes.Material.colours["text"], 0.3),
    "colourTertiary": Blockly.utils.colour.blend('black',
        Blockly.Themes.Material.colours["text"], 0.2)
  },
  "variable_blocks": {
    "colourPrimary": Blockly.Themes.Material.colours["variable"],
    "colourSecondary": Blockly.utils.colour.blend('white',
        Blockly.Themes.Material.colours["variable"], 0.3),
    "colourTertiary": Blockly.utils.colour.blend('black',
        Blockly.Themes.Material.colours["variable"], 0.2)
  },
  "variable_dynamic_blocks": {
    "colourPrimary": Blockly.Themes.Material.colours["variable"],
    "colourSecondary": Blockly.utils.colour.blend('white',
        Blockly.Themes.Material.colours["variable"], 0.3),
    "colourTertiary": Blockly.utils.colour.blend('black',
        Blockly.Themes.Material.colours["variable"], 0.2)
  }
};

// Adjust category colors here:
Blockly.Themes.Material.categoryStyles = {
  "colour_category": {
    "colour": Blockly.Themes.Material.colours["colour"]
  },
  "list_category": {
    "colour": Blockly.Themes.Material.colours["list"]
  },
  "logic_category": {
    "colour": Blockly.Themes.Material.colours["logic"]
  },
  "loop_category": {
    "colour": Blockly.Themes.Material.colours["loop"]
  },
  "math_category": {
    "colour": Blockly.Themes.Material.colours["math"]
  },
  "procedure_category": {
    "colour": Blockly.Themes.Material.colours["procedure"]
  },
  "text_category": {
    "colour": Blockly.Themes.Material.colours["text"]
  },
  "variable_category": {
    "colour": Blockly.Themes.Material.colours["variable"]
  },
  "variable_dynamic_category": {
    "colour": Blockly.Themes.Material.colours["colour"]
  }
};

Blockly.Themes.Material =
    new Blockly.Theme(Blockly.Themes.Material.defaultBlockStyles,
        Blockly.Themes.Material.categoryStyles);

// Adjust Blockly UI component colors here:
Blockly.Themes.Material.setComponentStyle('workspace', '#fff');
Blockly.Themes.Material.setComponentStyle('toolbox', '#eee');
Blockly.Themes.Material.setComponentStyle('toolboxText', 'rgba(0, 0, 0, 0.87)');
Blockly.Themes.Material.setComponentStyle('flyout', '#f5f5f5');
