Tuesday, 30-Aug-2022
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


Friday, 02-Sep-2022
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
