import { Message } from 'element-ui';

export function getUrlParam(key) {
  const url = window.location.href;
  const paramString = url.substring(url.indexOf('?') + 1, url.length).split('&');
  const paramObj = {};

  paramString.forEach((param) => {
    const position = param.indexOf('=');
    const paramKey = param.substring(0, position).toLowerCase();
    paramObj[paramKey] = param.substring(position + 1, param.length);
  });

  return paramObj[key.toLowerCase()] || '';
}

export const showTips = (param) => {
  Message({
    showClose: true,
    message: param.text,
    type: param.type,
    center: true,
  });
};

/**
 * 文本复制
 */
export function copyText(value, success, fail) {
  // 创建文本元素
  const textArea = document.createElement('textArea');
  textArea.value = value;
  textArea.style.position = 'fixed';
  textArea.style.top = '-1000px';
  textArea.style.left = '-1000px';
  document.body.appendChild(textArea);

  textArea.select();
  if (document.execCommand('copy')) {
    if (success) success();
  } else if (fail) fail();
  document.body.removeChild(textArea);
}
