export function b64EncodeUnicode(str: string): string {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode(parseInt(p1, 16))
  }))
}

export function genRandomId(): string {
  return Math.random().toString().substring(2, 8) +
    Date.now().toString().substring(9); // 10 цифр
}
// export const genRandomId36 = () =>
//   Math.random().toString(36).substring(2, 8); // 6 знаков

// export const assignId = (obj) => ({...obj, id: genRandomId()});
