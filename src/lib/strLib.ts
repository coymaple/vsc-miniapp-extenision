/**
 * 使用正则表达式统计字符 character 在 str 中出现的次数
 * @param {string} character 目标字符
 * @param {string} str 统计的范围
 */
function charCounter(character: string, str: string) {
  // ToDO character 和 str 的异常（空字符）处理
  // ToDO 构造用于适用 RegExp 构造函数的转义字符串
  // str.replace(/[\\\$\(\)\*+.\[\]?\^\{\}\|]/g,'//$&')
  const pattern = new RegExp(character, 'g');
  return str.match(pattern).length;
}

// 转义字符串中的正则表达式元字符
function escapeMetaCharacter(str: string) {
  return str.replace(/[*/]/g, '\\$&');
}

module.exports = {charCounter,escapeMetaCharacter};