// BEGIN (write your solution here)
function normalizeUrl(url) {
    if(url.startsWith('https://')) return url;
    return 'https://' + url;
}
// END

export default normalizeUrl;
