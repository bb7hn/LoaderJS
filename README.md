
# LoaderJS
Basic and Easy To Use Loader With JS
LoaderJS is simple and easy to use. You don't need any image or style file just loader.js

## HOW TO USE?
first import Loader JS file in head tags
<!--Loader.JS-->

    <script  src="./js/loader.js"></script>

Then create a script tag just after the body tag and call startLoader() Function.

    <script>startLoader()</script>
your file must look like this:

    <!DOCTYPE html>
    <html lang="en">
    <head>
	    <!--some other tags script files and styles ...-->
        <!--Loader.JS-->
            <script src="./js/loader.js"></script>
    </head>
    <body class="flex col theme--light" >
        <script>startLoader()</script>
        <!--Here is your content-->
    </body>
    </html>
