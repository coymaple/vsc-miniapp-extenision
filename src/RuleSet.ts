import * as vscode from 'vscode';

// 压缩规则集
function compressRuleSet() {
  vscode.window.showInformationMessage('Compress RuleSet');
}
// 展开规则集
function unfoldRuleSet() {
  vscode.window.showInformationMessage('Unfold RuleSet');
}

// 导出命令对象
export function getRuleSetOperator() {
  let operator = new Map();
  operator.set('extension.compressRuleSet', compressRuleSet);
  operator.set('extension.unfoldRuleSet', unfoldRuleSet);
  return operator;
}




