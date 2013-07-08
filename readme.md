# FOL Auto Login

Login in Fanshawe Online in a single click using this simple Chrome Extension

### Creating Local Development Copy

 1. Clone local repository.
 2. In Chrome Extensions page enable Developer Mode
 3. Click Load Unpacked Extension, point dialog to root of local repository
 4. When you make changes, click reload to update.
 
### Adding Javascript to Inject

1. Add script to js folder
2. In manifest.json add:

  ```
      "web_accessible_resources": [
      	....,
        "js/yourfilenamehere.js"
	],
  ```
3. In inject.js add the following code:

  ```
      var filename = "js/filename.js";
      injectScript(filename);
  ```
