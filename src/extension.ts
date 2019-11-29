import * as vscode from 'vscode';
import { getRuleSetOperator } from './RuleSet';
import WxmlFormatter from './WxmlFormatter';
const wxmlFormatter = new WxmlFormatter();

export function activate(context: vscode.ExtensionContext) {

	let disp = vscode.commands.registerCommand('extension.formatwxml', () => {
		const { activeTextEditor } = vscode.window;

		if (activeTextEditor) {
			const { document } = activeTextEditor;
			console.log(document);
			const edit = new vscode.WorkspaceEdit();
			// edit.insert(document.uri, firstLine.range.start, '42\n');

			return vscode.workspace.applyEdit(edit);

		}
	});
	context.subscriptions.push(disp);

	let ruleSetOperator = getRuleSetOperator();
	for (let [key, value] of ruleSetOperator) {
		let disposable = vscode.commands.registerCommand(key, value);
		context.subscriptions.push(disposable);
	}

	vscode.languages.registerDocumentFormattingEditProvider({ scheme: 'file', language: 'wxml' }, wxmlFormatter);
}

