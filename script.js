function mintDomain() {
  window.open("https://www.freename.io/discover/sensei", "_blank");
}
// Domain search redirect
document.getElementById('domainSearchForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('domainInput').value.trim();
  if(name) {
    const query = `${name}.sensei`;
    window.open(`https://freename.io/discover/sensei?search=${encodeURIComponent(query)}`, '_blank');
  }
});
