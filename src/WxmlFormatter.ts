
import {TextDocument,TextEdit} from 'vscode';


export default class WxmlFormatter{
  provideDocumentFormattingEdits(doc: TextDocument): TextEdit[] {
    const firstLine = doc.lineAt(0);
    
    return [TextEdit.insert(firstLine.range.start, '42\n')];
  }
}

