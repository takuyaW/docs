---
title: Whitelist Plugin (Android Only)
---

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-whitelist/blob/master/RELEASENOTES.md#100-mar-25-2015">1.0.0</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> November 20th, 2015</div>
  <br/>
</div>

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-whitelist">}}.
{{</note>}}

This plugin implements a Whitelist policy for navigating the application
WebView on Cordova 4.0.

Plugin ID
---------

    cordova-plugin-whitelist

Supported Platforms
-------------------

-   Android 4.0 or higher
-   Cordova 5.2 or higher

Adding the Plugin in Monaca
---------------------------

Starting from Cordova 5.2, Whitelist plugin is automatically added in
Monaca app. It can't be removed.

Permission Settings
-------------------

### Page Transition (Navigation Whitelist)

Controls which URLs the WebView itself can be navigated to. Applies to
top-level navigations only.

Quirks: on Android it also applies to iframes for non-http(s) schemes.

By default, navigations only to `file://` URLs, are allowed. To allow
others URLs, you must add `<allow-navigation>` tags to your
`config.xml`:

{{<syntax>}}
&#60;allow-navigation href="\*" /&#62;
{{</syntax>}}

*Parameter*

Param | Type | Default | Description
------|------|---------|-------------
`href` | String | `*` | Allow permission for all addresses.

*Example*

To allow others URLs, you must add `<allow-navigation>` tags to your `config.xml` file:

{{<highlight xml>}}
    <!-- Allow links to example.com -->
    <allow-navigation href="http://example.com/*" />

    <!-- Wildcards are allowed for the protocol, as a prefix
         to the host, or as a suffix to the path -->
    <allow-navigation href="*://*.example.com/*" />

    <!-- A wildcard can be used to whitelist the entire network,
         over HTTP and HTTPS. -->
    <allow-navigation href="*" />

    <!-- The above is equivalent to these three declarations -->
    <allow-navigation href="http://*/*" />
    <allow-navigation href="https://*/*" />
    <allow-navigation href="data:*" />
{{</highlight>}}

### External Applicaton Call (Intent Whitelist)

Controls which URLs the app is allowed to ask the system to open. By
default, no external URLs are allowed.

On Android, this equates to sending an intent of type BROWSEABLE.

This whitelist does not apply to plugins, only hyperlinks and calls to
`window.open()`.

In `config.xml`, add `<allow-intent>` tags, like this:

{{<syntax>}}
&lt;allow-intent href="\*" /&gt;
{{</syntax>}}

*Parameter*

Param | Type | Default | Description
------|------|---------|-------------
`href` | String | `""` | No external URLs are allowed.

*Example*

In `config.xml`, add `<allow-intent>` tags, like this:

{{<highlight xml>}}
    <!-- Allow links to web pages to open in a browser -->
    <allow-intent href="http://*/*" />
    <allow-intent href="https://*/*" />

    <!-- Allow links to example.com to open in a browser -->
    <allow-intent href="http://example.com/*" />

    <!-- Wildcards are allowed for the protocol, as a prefix
         to the host, or as a suffix to the path -->
    <allow-intent href="*://*.example.com/*" />

    <!-- Allow SMS links to open messaging app -->
    <allow-intent href="sms:*" />

    <!-- Allow tel: links to open the dialer -->
    <allow-intent href="tel:*" />

    <!-- Allow geo: links to open maps -->
    <allow-intent href="geo:*" />

    <!-- Allow all unrecognized URLs to open installed apps
         *NOT RECOMMENDED* -->
    <allow-intent href="*" />
{{</highlight>}}

### Content (Network Request Whitelist)

It controls which network requests (images, XHRs, etc) are allowed to be
made (via Cordova native hooks). Content permission can be defined for
content to call in the page (images, css, javascript). To define the
permission, simply define `<access origin>` and CSP (Content Security
Policy). Without any `<access>` tags, only requests to `file://` URLs
are allowed.

<div class="admonition note">

Android also allows requests to
<code>https://ssl.gstatic.com/accessibility/javascript/android/</code> by default,
since this is required for TalkBack to function properly.

</div>

{{<note>}}
We suggest you use a {{<link href="#content-security-policy" title="Content Security Policy">}}, which is more secure.
This whitelist is mostly historical for webviews which do not support
CSP.
{{</note>}}

{{<syntax>}}
&lt;access origin="\*" /&gt;
{{</syntax>}}

*Parameter*

Param | Type | Default | Description
------|------|---------|-------------
`origin` | String | `"*"` | Allow permission for all addresses.

*Example*

In `config.xml`, add `<access>` tags, like this:

{{<highlight xml>}}
    <!-- Allow images, xhrs, etc. to google.com -->
    <access origin="http://google.com" />
    <access origin="https://google.com" />

    <!-- Access to the subdomain maps.google.com -->
    <access origin="http://maps.google.com" />

    <!-- Access to all the subdomains on google.com -->
    <access origin="http://*.google.com" />

    <!-- Enable requests to content: URLs -->
    <access origin="content:///*" />

    <!-- Don't block any requests -->
    <access origin="*" />
{{</highlight>}}

#### Content Security Policy

Controls which network requests (images, XHRs, etc) are allowed to be
made (via webview directly).

The network request whitelist (see above) is not able to filter all
types of requests (e.g. `<video>` & WebSockets are not blocked). So, in
addition to the whitelist, you should use a [Content Security
Policy](http://content-security-policy.com/) `<meta>` tag on all of your
pages.

Support for CSP within the system webview starts with KitKat (but is
available on all versions using Crosswalk WebView).

{{<highlight html>}}
<meta http-equiv=”Content-Security-Policy” content=”default-src *; style-src * ‘unsafe-inline’; script-src * ‘unsafe-inline’ ‘unsafe-eval’”>
{{</highlight>}}

<div class="admonition note">

When upgrading from Cordova 3.5/4.2, it will not be applied by default.
If the setting isn't applied, there will be errors but application will
work fine. To stop the errors, users need to add the above meta tag to
HTML.

</div>

*Example*

:   Here are some example CSP declarations for your `.html` pages:

{{<highlight xml>}}
    <!-- Good default declaration:
        * gap: is required only on iOS (when using UIWebView) and is needed for JS->native communication
        * https://ssl.gstatic.com is required only on Android and is needed for TalkBack to function properly
        * Disables use of eval() and inline scripts in order to mitigate risk of XSS vulnerabilities. To change this:
            * Enable inline JS: add 'unsafe-inline' to default-src
            * Enable eval(): add 'unsafe-eval' to default-src
    -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com; style-src 'self' 'unsafe-inline'; media-src *">

    <!-- Allow everything but only from the same origin and foo.com -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self' foo.com">

    <!-- This policy allows everything (eg CSS, AJAX, object, frame, media, etc) except that
        * CSS only from the same origin and inline styles,
        * scripts only from the same origin and inline styles, and eval()
    -->
    <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'">

    <!-- Allows XHRs only over HTTPS on the same domain. -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self' https:">

    <!-- Allow iframe to https://cordova.apache.org/ -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; frame-src 'self' https://cordova.apache.org">
{{</highlight>}}


