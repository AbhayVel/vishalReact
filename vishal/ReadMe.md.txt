Introduction
-	JavaScript launched in 1995. 
-	JavaScript is a client-side language before 2008.
-	Chrome browser launched in 2008 and its JS Engine is VS-8. 
-	V8 engine was removed from browser and NodeJS is built for server code
-	jQuery launched 2008 and popularized after 2009.
-	Before this, JavaScript was written browser specific. Chrome was a game changer here.
-	Jscript developed by Microsoft for server-side code.
-	Before jQuery, we used to write the JavaScript code based upon the elements (<body>, <div>....)
-	2011 AngularJS(Google) and Knockout (Microsoft). They worked on data not on tags.
-	2013 FB published its proprietary framework ReactJS which is a UI rendering framework and is much faster than Angular JS.
-	Lot of flexibility to write code in own way as no architecture to follow unlike Angular.
-	ReactJS can be written in Babel and TypeScript.
-	ECMA – European Computer Manufacturing Association
-	JavaScript is the following ECMA versions at the most.
-	Browsers have their own compatibility with ECMA versions.


------------------------------------------------------Friday, 02-Sep-2022--------------------------------------------
Versions in Packag.json
https://docs.npmjs.com/cli/v6/using-npm/semver
VALUE	DESC
~version	Approximately equivalent to version, i.e., only accept new patch versions
See npm semver - Tilde Ranges

^version	Compatible with version, i.e., accept new minor and patch versions
See npm semver - Caret Ranges

version	Must match version exactly
>version	Must be greater than version
>=version	Must be greater or equal than version
<version	Less than specified version
<=version	Less than specified version or equal
1.2.x	1.2.0, 1.2.1, etc., but not 1.3.0 *	Matches any version latest	Obtains latest release

------------------------------------------------------Friday, 05-Sep-2022--------------------------------------------
Installation
1. install npm, nodeJS
2. install create-react-app from https://www.npmjs.com/package/create-react-app
3. run command "npx create-react-app <app_name> --template typescript"  as npx create-react-app demo --template typescript
   This will create a react project with name "demo" with default file structure.
4. run "npm start"
   app will be running on http://localhost:3000.


index.tsx
   it is a starting point of a react app. 
   A default component named "App" is created with the "create-react-app" and is used in the index.tsx.
   
   There are 4 types of components. will be explained later.
   
APP.tsx
  usually the very first component of the application.
  
  All the functions created are the Components.
  We use arrow functions style to define a function.
  
  App = () => {
    return{
	  <div></div>
	}
  }
  
  every component MUST return ONE and ONLY ONE HTML tag.
  *css class is renamed to className.
  
  <div className="<className>"></div>

pure functions => 
  Are the functions which do not reflect its value to the UI.
  in old react (before v-16) it was called as pure function/ function component.
  
