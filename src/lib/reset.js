let str = `.navigation {
  width: 15vw;
  height: inherit;
  border: 1px solid #eef1f6;
  box-sizing: border-box;
  background-color: #eef1f6;
}
.navigation .main-item {
  padding-left: 20px;
  height: 56px;
  line-height: 56px;
  color: #48576a;
  font-size: 16px;
  cursor: pointer;
  position: relative;
}
.navigation .icon-arrow {
  position: absolute;
  top: 0px;
  right: 20px;
  font-size: 16px;
}
/* .navigation .main-item-down-arrow::before {
  content: "\E600";
} */
.navigation .sub-container {
  display: flex;
  flex-direction: column;
  height: 150px;
  overflow: hidden;
}
.navigation .sub-item {
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #48576a;
  background-color: #e4e8f1;
  padding-left: 40px;
  box-sizing: border-box;
}
.navigation .sub-item:hover {
  background-color: #d1dbe5;
}

.clicked-item{
  background-color: #d1dbe5 !important;
}

.navigation .selected-item{
  background-color: #d1dbe5;
}

.sub-show{
  display: block;
  animation: slowly-show 2s;
}

.sub-hide{
  display: none !important;
  animation: slowly-hide 2s;
}

/*子菜单慢慢消失的动画*/
@keyframes slowly-hide {
  from{height: 150px;}
  to{height: 0;display: none !important;}
}

@keyframes slowly-show{
  from{height: 0;}
  to{height: 150px;}
}

.arrow-left{
  transform: rotate(-90deg);
}
.arrow-down{
  transform: rotate(180deg);
}
`

let singleRuleSet = `
.arrow-left{
  transform: rotate(-90deg);
}
`

let singleLineRuleSet = `.arrow-left{ transform: rotate(-90deg); }`

let moreRuleSet = `.arrow-left{
  transform: rotate(-90deg);
}
.arrow-down{
  transform: rotate(180deg);
}`

let str = '.arrow-left{   transform: rotate(-90deg); } .arrow-down{   transform: rotate(180deg); }'
// 检测是否是单个规则集或多个规则集
// 检测字符串里面包含一个字符集还是多个字符集
function judgeRuleSet() {
  let regExp = new RegExp('(?<ruleset>.*\{.*\})\1*', 'mgs')
  let regExp = /(?<ruleset>.*\{(.*:.*;)?\2*\})\1*/
}

// 正则表达式问题

// 使用正则表达式取得字符串 '123aaaabbbbbbcc' 中的 'aaaa' 'bbbbbb' 'cc'

// 方法一：匹配到内容之后就把内容给提取出来，然后继续进行匹配。
// 方法二：对重复内容以某种方式进行分隔。
function processRoleSet(str) {
  // let regExp = /(?<selector>[#\.]?[\w-]+)\s*\{(?<rule>\s*[\w-]*\s*:\s*[\w()-]*\s*;\s*)\}/
  let ruleRegex = /(?<selector>[#\.]?[\w-]+)\s*\{(?<rule>.*)\}/ms
  let captured = str.match(ruleRegex)  // 捕获组对象，如果没有捕获任何内容返回null
  
  let { selector, rule } = captured.groups
  let ruleStr = ''  // 规则组成的字符串
  // 字符串中存在符合指定模式的子字符串
  if (selector && rule.trim()) {
    ruleStr = processRuleStringBySplit(rule)
    return `${selector} {${ruleStr}}`
  }
}

// 切割字符串法处理规则（样式）字符串
function processRuleStringBySplit(str){
  let ruleStr = ''
  let rules = {} // css规则对象，键为规则名（属性），属性值为规则值，都是字符串类型。
  str.split(';').forEach(ele => {
    if (ele.trim()) {
      let temp = ele.split(':')
      rules[temp[0].trim()] = temp[1].trim()
    }
  })
  for (k in rules) {
    ruleStr += ` ${k}: ${rules[k]};`
  }
  ruleStr += ' '
  return ruleStr
}

// 频繁捕获法处理规规则（样式）字符串
function processRuleStringByMoreCapture(str){
  let flag = true  // 循环控制变量
  let regExp = /(?<rule>\s*(?<key>[\w-]*)\s*:\s*(?<value>[\w()-]*)\s*;\s*)|(?<comment>\\\*.*\\\*)/
  // let regExp = /(?<rule>\s*(?<key>[\w-]*)\s*:\s*(?<value>[\w()-]*)\s*;\s*)/
  while(flag){

  }
}