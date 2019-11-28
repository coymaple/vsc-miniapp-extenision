import * as vscode from 'vscode';
function compressRuleSet() {
	vscode.window.showInformationMessage('Compress RuleSet');
}
function unfoldRuleSet(){
	vscode.window.showInformationMessage('Unfold RuleSet');
}
export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.compressRuleSet', compressRuleSet);
	vscode.commands.registerCommand('extension.unfoldRuleSet', unfoldRuleSet);
	context.subscriptions.push(disposable);
	context.subscriptions.push();
}

// ,
// 			"commandPalette": [
// 				{
// 					"command": "extension.compressRule",
// 					"when": "editorLangId == wxss"
// 				},
// 				{
// 					"command": "extension.unfoldRuleSet",
// 					"when": "editorLangId == wxss"
// 				}
// 			]