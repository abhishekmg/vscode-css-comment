// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

const decorationType = vscode.window.createTextEditorDecorationType({
  after: { margin: "0 0 0 1rem" },
});

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  vscode.workspace.onDidChangeTextDocument((event) => {
    // visibleTextEditors -> array of all open editors
    const openEditor = vscode.window.visibleTextEditors.filter(
      // returns the editor that we currently save
      (editor) => editor.document.uri === event.document.uri
    )[0];

    // we deocorate that one editor
    decorate(openEditor);
  });
}

function convertToPx(value) {
  var regxToGetNumberFromString = /[\d\.]+/;

  var numValue = value.match(regxToGetNumberFromString)[0];

  const configuration = vscode.workspace.getConfiguration("remToPxComment");

  const finalValue = numValue * configuration.remConversionValue;

  if (isNaN(finalValue)) {
    return null;
  } else {
    return finalValue;
  }
}

function getLengthOfAllStringsInArray(arr) {
  if (arr == null) {
    return 0;
  }

  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i].length;
  }

  return sum;
}

function decorate(editor) {
  // gets all the text in editor
  let sourceCode = editor.document.getText();
  // regx to get rem
  let regex = /[\d\.]+rem/g;

  // an array that contains the decorated text
  let decorationsArray = [];

  const sourceCodeArr = sourceCode.split("\n");

  // loops the text in editor
  for (let line = 0; line < sourceCodeArr.length; line++) {
    let match = sourceCodeArr[line].match(regex); // match is true if line has rem text

    if (match !== null) {
      const matchIndex = /[\d\.]+rem/.exec(sourceCodeArr[line]).index;

      // if line has a rem text
      // what is Range ? https://code.visualstudio.com/api/references/vscode-api#Range
      let range = new vscode.Range(
        // what is Position  https://code.visualstudio.com/api/references/vscode-api#Position
        new vscode.Position(line, matchIndex),
        new vscode.Position(
          line,
          matchIndex + getLengthOfAllStringsInArray(match) + 30
        )
      );

      let finalRenderStr = "";

      const configuration = vscode.workspace.getConfiguration("remToPxComment");

      match.forEach((item) => {
        finalRenderStr = `${finalRenderStr} ${
          convertToPx(item) ? `${convertToPx(item)}px` : ""
        }`;
      });

      let decoration = {
        range: range,
        renderOptions: {
          after: {
            contentText: `${finalRenderStr}`,
            color: configuration.commentColor,
          },
        },
      };

      // range tells what position to highlight

      // pushing this is array
      decorationsArray.push(decoration);
    }
  }

  // finally sets the decorationType (color etc) , decorationsArray (what to exactly deocrate)
  editor.setDecorations(decorationType, decorationsArray);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
