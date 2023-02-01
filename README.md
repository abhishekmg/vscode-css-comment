# px-comment README

This extention renders the px values of the rem numbers or rem valurs of px numbers in your vs code file . 

![image](https://user-images.githubusercontent.com/34393560/139572366-0f8a85f2-8558-44e0-90aa-5a054285638a.png)


## Configuration

The following properties are configurable:

```javascript
  // Decoration color for the px comment value
  "remToPxComment.pxCommentColor": "#36C210",

    // Decoration color for the rem comment value
  "remToPxComment.remCommentColor": "#D61355",

  // value to convert px to rem, default is 16px
  "remToPxComment.remConversionValue": 16

  // tells if to convert from rem to px or the other way around
  "remToPxComment.convertToPx": true
  
  // tells if to convert from px to rem or the other way around
  "remToPxComment.convertToRem": true

  // tells if to add increment and decrement key board shortcuts
  "remToPxComment.addKeyBoardShortcuts: false
```

## Keyboard shortcuts 

By checking the `addKeyBoardShortcuts` in settings a set of default shortcuts for incrementing and decrementing numbers will be enabled 

An example is like the following 

https://user-images.githubusercontent.com/34393560/211630616-7eaafea9-7cb6-48c8-ba43-d72635735946.mov

In the above video pressing `cmd+shift+i` in mac or `ctrl+shift+i` in windows will increment the number by 1 based on cursor position 

Similarly pressing `cmd+shift+d` in mac or `ctrl+shift+d` in windows will decrement the number by 1 based on cursor position 

These are all the keyboard shortcuts that will be enabled when checking `addKeyBoardShortcuts` option in settings

### All increments : 
- `cmd+shift+i` in mac or `ctrl+shift+i` in windows : increment number by one 
- `cmd+shift+h` in mac or `ctrl+shift+h` in windows : increment number by one tenth
- `cmd+shift+t` in mac or `ctrl+shift+t` in windows : increment number ten

### All decrements :
- `cmd+shift+d` in mac or `ctrl+shift+d` in windows : decrement number by 1
- `cmd+shift+z` in mac or `ctrl+shift+z` in windows : decrement number by one tenth
- `cmd+shift+v` in mac or `ctrl+shift+v` in windows : decrement number by ten







