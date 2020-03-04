const strLib = require('./strLib');
// 压缩规则集
// 识别多个规则集还是一个规则集
// example "div{height:200px;}" => "div { height: 200px; }"
function compressRuleset(str: string) {
  const SPLIT_MARKER = '/* split marker */';
  if (strLib.charCounter('}', str) > 0) {  // 有多个css规则集
    let temp = '';
    // 以 '}' 作为一个规则集的标识，在其右面断开
    let materials = str.replace(/(?<=\}\s*)\/\*[\s\S]*?\*\//mg, `$&${SPLIT_MARKER}`)  // 处理整个规则集被注释后的情况，在注释的结束插入拆分标记
      .replace(new RegExp('(?<=' + strLib.escapeMetaCharacter(SPLIT_MARKER) + '\\s*)\\/\\*.*?\\*\\/', 'mg'), `$&${SPLIT_MARKER}`)   // 处理规则集外面的注释内容
      .replace(/\}(?!\s*\*\/)/g, `$&${SPLIT_MARKER}`)    // 在规则集的末尾（'}'后面）插入拆分标记
      .split(SPLIT_MARKER);  // 根据 拆分标记 将字符串拆分成数组

    materials.forEach(ele => {
      // ToDO 规则集外面的注释处理
      // ToDo 有 "{" "}" 嵌套的规则集处理
      temp += compressSingleRuleset(ele);
      temp += '\n';
    });
    return temp;
  } else {
    return compressSingleRuleset(str);
  }
}

// 压缩单个规则集
function compressSingleRuleset(str: string) {
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
    .replace(/\*\/(?! )/, '$& ');  // '/*' 右面没有空格（非空格）
}

// 展开规则集
function unfoldRuleset(str: string) {
  return str
    .replace(/\{(?!\n)/g, '$&\n\t')     // '{' 的右面插入回车（'\n'）
    .replace(/\*\/(?!\n)/g, '$&\n\t')   // '*/' 的右面插入回车（'\n'）
    .replace(/;(?!\n)/g, '$&\n\t')      // ';' 的右面插入回车（'\n'）
    .replace(/\}(?!\n)/g, '$&\n')       // '}' 的右面插入回车（'\n'）
    .replace(/\s*\}$/gm, '\n}');         // 将'    }' 变成 '}' 
}