let str = `.navigation {
  width: 15vw;
  height: inherit;
  border: 1px solid #eef1f6;
  box-sizing: border-box;
  background-color: #eef1f6;
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

let str = `div{
  /*宽度100个像素*/
  width:100px;
}`

// 压缩单个规则集
// example "div{height:200px;}" => "div { height: 200px; }"
function compressRuleset(str) {
  if (countChar('}', str) > 0) {  // 有多个css规则集
    let temp = ''
    str.replace(/\}/g, '$&/* split marker */').split('/* split marker */').forEach(ele => {
      // ToDO 规则集外面的注释处理
      // ToDo 有 "{" "}" 嵌套的规则集处理
      temp += compressSingleRuleset(ele)
      temp += '\n'
    })
    return temp
  } else {
    return compressSingleRuleset(str)
  }
}

function compressSingleRuleset(str) {
  return str
    .replace(/\s/g, ' ')           // 空白字符替换成空格
    .replace(/ +/g, ' ')           // 多个空格合并成一个空格

    .replace(/[^ ](?=\{)/g, '$& ')    // "{" 左面没有空格
    .replace(/\{(?=[^ ])/g, '$& ')   // "{" 右面没有空格
    .replace(/ (?=:)/g, '')        // ":" 左面有空格
    .replace(/:(?=[^ ])/g, '$& ')    // ":" 右面没有空格
    .replace(/ (?=;)/g, '$& ')     // ";" 左面有空格
    .replace(/;(?=[^ ])/g, '$& ')    // ";" 右面没有空格

    .replace(/(?<! )\/\*/, ' $&')  // '/*' 左面没有空格（非空格）
    .replace(/\/\*(?! )/, '$& ')   // '/*' 右面没有空格（非空格）
    .replace(/(?<! )\*\//, ' $&')  // '/*' 左面没有空格（非空格）
    .replace(/\*\/(?! )/, '$& ')   // '/*' 右面没有空格（非空格）
}

// 展开规则集
function unfoldRuleset(str) {
  return str
    .replace(/\{(?!\n)/g, '$&\n\t')     // '{' 的右面插入回车（'\n'）
    .replace(/\*\/(?!\n)/g, '$&\n\t')   // '*/' 的右面插入回车（'\n'）
    .replace(/;(?!\n)/g, '$&\n\t')      // ';' 的右面插入回车（'\n'）
    .replace(/\}(?!\n)/g, '$&\n')       // '}' 的右面插入回车（'\n'）
    .replace(/\s*\}$/g, '\n}')          // 将'    }' 变成 '}' 
}

/**
 * 使用正则表达式统计字符 character 在 str 中出现的次数
 * @param {string} character 目标字符
 * @param {string} str 统计的范围
 */
function countChar(character, str) {
  // ToDO character 和 str 的异常（空字符）处理
  // ToDO 构造用于适用 RegExp 构造函数的转义字符串
  // str.replace(/[\\\$\(\)\*+.\[\]?\^\{\}\|]/g,'//$&')
  const pattern = new RegExp(character, 'g')
  return str.match(pattern).length
}
