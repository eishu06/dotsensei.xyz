function mintDomain() {
  window.open("https://www.freename.io/discover/sensei", "_blank");
}
// Domain search redirect
// Inline preview + redirect
document.getElementById('domainSearchForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('domainInput').value.trim();
  const resultBox = document.getElementById('searchResult');

  if (name) {
    const query = `${name}.sensei`;
    resultBox.innerHTML = `🔍 Checking availability for <strong>${query}</strong>...`;
    
    // Redirect after 1 sec
    setTimeout(() => {
      window.open(`https://www.freename.io/discover/sensei#${encodeURIComponent(query)}`, '_blank');
    }, 1000);
  } else {
    resultBox.innerHTML = "⚠️ Please enter a name before searching.";
  }
});
