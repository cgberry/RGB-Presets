let presets = {
  "1": {
    "redSlider": {
      "value": 60
    },
    "greenSlider": {
      "value": 60
    },
    "blueSlider": {
      "value": 60
    }
  },
  "2": {
    "redSlider": {
      "value": 70
    },
    "greenSlider": {
      "value": 200
    },
    "blueSlider": {
      "value": 10
    }
  },
  "3": {
    "redSlider": {
      "value": 255
    },
    "greenSlider": {
      "value": 30
    },
    "blueSlider": {
      "value": 100
    }
  },
}

let redSlider, greenSlider, blueSlider;
let redSliderValue, greenSliderValue, blueSliderValue;

let redValue, greenValue, blueValue;

let presetDropdown;
let presetDropdownContentDiv;

let presetButtons = [];
let presetLength;

let saveButton;

function setup() {
  createCanvas(400, 400);
  redSlider = createSlider(0, 255, 0);
  greenSlider = createSlider(0, 255, 0);
  blueSlider = createSlider(0, 255, 0);

  presetLength = Object.keys(presets).length;
  
  presetDropdown = createButton("presets");
  presetDropdown.id("dropbtn");
  presetDropdown.parent("dropdown")
  presetDropdown.position(0, 0)
  
  
  
  presetDropdownContentDiv = createDiv();
  presetDropdownContentDiv.id("dropdown-content")
  presetDropdownContentDiv.parent("dropbtn");
  


  for (let i = 0; i < presetLength; i++) {
    presetButtons[i] = createButton(i + 1);
  //  presetButtons[i].position(i * 30, 0)
    presetButtons[i].id(i + 1)
    presetButtons[i].mousePressed(setPresets);
    presetButtons[i].parent("dropdown-content");
  }

  saveButton = createButton("Save Preset")
  saveButton.id("savebtn")
  saveButton.mousePressed(savePreset)
  saveButton.position(282, 0)
}

function draw() {
  background(redValue, greenValue, blueValue);
  redValue = redSlider.value();
  greenValue = greenSlider.value();
  blueValue = blueSlider.value();
}

function setPresets() {
  //check the buttons id, whatever id it has is the preset it needs to select
  let myID = event.srcElement.id
  let whichButton = presets[myID]

  let redS = whichButton.redSlider
  redValue = redS.value
  

  let greenS = whichButton.greenSlider
  greenValue = greenS.value

  let blueS = whichButton.blueSlider
  blueValue = blueS.value



  redSliderValue = redValue
  greenSliderValue = greenValue
  blueSliderValue = blueValue

  redSlider.value(redSliderValue);
  greenSlider.value(greenSliderValue);
  blueSlider.value(blueSliderValue);

}

function savePreset() {
  presetLength = Object.keys(presets).length
  let newKey = presetLength + 1

  //Preset in dictonary format 
  //Loading it like this creates the new key
  let newPreset = {
      "redSlider": {
        "value": redSlider.value()
      },
      "greenSlider": {
        "value": greenSlider.value()
      },
      "blueSlider": {
        "value": blueSlider.value()
      }
  }

  if (confirm("Would you like to save your presets?")) {
    presets[newKey] = newPreset;
  }
  presetButtons[presetLength] = createButton(presetLength + 1);
 // presetButtons[presetLength].position(presetLength * 30, 0)
  presetButtons[presetLength].id(presetLength + 1)
  presetButtons[presetLength].mousePressed(setPresets);
  presetButtons[presetLength].parent("dropdown-content");
}
