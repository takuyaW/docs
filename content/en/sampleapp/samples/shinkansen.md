Train Catalog App
=================

This sample app is a train catalog which displaying the types trains
towards Tokaido and Tohoku areas.

  *Tested Environment*                                       Android 7.0                    iOS 10.1.1
  ---------------------------------------------------------- ------------------------------ ------------------------------------------------------------------------------------------------------------
                                                                                            
  .. raw:: html                                                                             
  &lt;div class="iframe-sample                               s"&gt;                         
  &lt;iframe src="<https://mon>                              aca.github.io/project-templa   tes/20-train-catalog/www/index.html" style="max-width: 150%;"&gt;&lt;/iframe&gt;
  &lt;/div&gt;                                                                              
  File Components                                                                           
  \^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^                                  
  .. image:: images/shinkanse                                n/3.png                        
  :width: 210px                                                                             
  :align: center                                                                            
  ===========================                                ======== ===================   ==========================================================================================================
  `index.html`                                               The startup page               
  `css/style.css`                                            The stylesheet fil             e for the application
  `images/¥*¥*¥*.jpg`                                        Image files used i             n this application

Required JS/CSS Components
--------------------------

  ---------------- --
  `jQuerymobile`   
  ---------------- --

HTML Explanation
----------------

This sample uses the native function of Monaca. Therefore, there are
multiple HTML pages. First, here is the body of the index.html.

This sample uses jQuery Mobile to display the list screen. Once you tap
each column, `showDetail` function is called. This function will transit
to the next page, which will be described later. Also `a` tag uses
`monaca.invokeBrowser` function in `onclick` attributes. This function
is used to launch the browser and display the specified URL.

JavaScript Explanation
----------------------

The JavaScript code of the Top Screen is not long.

As mentioned before, `showDetail` is called when the column in the list
is tapped. Take 2 arguments and assign them to`filename` variable and
`trqinname` variable.

Display the next page with `monaca.pushPage` function. This function
will open a new page natively by using Monaca native functions and the
variable passed to the next page is defined in it's third argument. The
passed value can be obtained by `monaca.queryParams` variable.
