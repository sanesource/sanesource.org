/**
 *
 * @param {Object} obj Your object
 * @returns {String} Query String
 */
export function objToQueryString(obj) {
  const str = [];
  for (const p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}
