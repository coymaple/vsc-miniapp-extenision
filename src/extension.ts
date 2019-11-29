import * as vscode from 'vscode';
import { getRuleSetOperator } from './RuleSet';
import format,{ WxmlFormatter} from './WxmlFormatter';

const wxmlFormatter = new WxmlFormatter();

export function activate(context: vscode.ExtensionContext) {

	let disp = vscode.commands.registerCommand('extension.formatwxml', format);
	context.subscriptions.push(disp);

	let ruleSetOperator = getRuleSetOperator();
	for (let [key, value] of ruleSetOperator) {
		let disposable = vscode.commands.registerCommand(key, value);
		context.subscriptions.push(disposable);
	}

	// vscode.languages.registerDocumentFormattingEditProvider({ scheme: 'file', language: 'wxml' }, wxmlFormatter);
}
