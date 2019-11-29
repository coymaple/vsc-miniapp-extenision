
// import {TextDocument,TextEdit} from 'vscode';


// export default class WxmlFormatter{
//   provideDocumentFormattingEdits(doc: TextDocument): TextEdit[] {
//     const firstLine = doc.lineAt(0);

//     return [TextEdit.insert(firstLine.range.start, '42\n')];
//   }
// }

import * as vscode from 'vscode';
const prettier = require('prettier');
const fs = require('fs');

import {
  TextDocument,
  FormattingOptions,
  CancellationToken,
  ProviderResult,
  TextEdit,
  WorkspaceEdit
} from 'vscode';

const format = () => {
  const { activeTextEditor } = vscode.window;
  if (activeTextEditor) {
    const { document } = activeTextEditor;
    if(document.languageId === 'wxml'){
      const edit = new vscode.WorkspaceEdit();
      return vscode.workspace.applyEdit(edit);
    }
    // prettier.format(source,'')
  
    
  
  }
};

class WxmlFormatter implements vscode.DocumentFormattingEditProvider{
  provideDocumentFormattingEdits(document: TextDocument, options: FormattingOptions, token: CancellationToken): ProviderResult<TextEdit[]>{
    
  }
	
}

export default format;
export {
  WxmlFormatter
}