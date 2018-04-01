<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Dummy Search Page</title>
  <script type="text/javascript">
    function getJsonFromUrl() {
      var query = location.search.substr(1);
      var result = {};
      query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
      });
      return result;
    }

    document.addEventListener("DOMContentLoaded", function(event) {
      document.getElementById("name").innerHTML=getJsonFromUrl().name;
    });
  </script>
</head>
<body>
  Hi <span id="name"></span>: This is a placeholder page for se-edu/addressbook-level4.<br>
  You may update the code to load a page from a real service (e.g., Google search).<br>
  This dummy page is used here because, given the high number of forks of this repo, loading a page from a real third-party service by default can result in that service taking counter-measures (e.g., redirecting to captcha pages) due to the high number of rapid requests received from a single IP.<br>
  When you have made the change, please remove:
  <ol>
    <li>This file (<code>docs/DummySearchPage.html</code>).</li>
    <li>Task <code>copyDummySearchPage</code> in both <code>build.gradle</code> and <code>.travis.yml</code>.</li>
  </ol>

</body>
</html>
