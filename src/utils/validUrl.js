function validURL(str) {
  try { return Boolean(new URL(str)); }
      catch(e){ return false; }
}
export default validURL;