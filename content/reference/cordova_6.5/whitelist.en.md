---
title: Whitelist Plugin (Android Only)
weight: 200
---

Tested Version: [1.3.1](https://github.com/apache/cordova-plugin-whitelist/releases/tag/1.3.1)

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-whitelist">}}.
{{</note>}}

This plugin implements a whitelist policy for navigating the application
webview on Cordova 4.0.

Plugin ID
---------

{{<highlight javascript>}}
cordova-plugin-whitelist
{{</highlight>}}

Supported Platforms
-------------------

-   Android 4.0 or above

Adding the Plugin in Monaca
---------------------------

{{<note>}}
Starting from Cordova 5.2, Whitelist plugin is automatically added in
Monaca app. It can't be removed.
{{</note>}}

Navigation Whitelist
--------------------

Controls which URLs the WebView itself can be navigated to. Applies to
top-level navigations only.

Quirks: on Android it also applies to iframes for non-http(s) schemes.

By default, navigations only to `file://` URLs, are allowed. To allow
others URLs, you must add `<allow-navigation>` tags to your
`config.xml`:

{{<highlight xml>}}
    <!-- Allow links to example.com -->
    <allow-navigation href="http://example.com/*" />

    <!-- Wildcards are allowed for the protocol, as a prefix
         to the host, or as a suffix to the path -->
    <allow-navigation href="*://*.example.com/*" />

    <!-- A wildcard can be used to whitelist the entire network,
         over HTTP and HTTPS.
         *NOT RECOMMENDED* -->
    <allow-navigation href="*" />

    <!-- The above is equivalent to these three declarations -->
    <allow-navigation href="http://*/*" />
    <allow-navigation href="https://*/*" />
    <allow-navigation href="data:*" />
{{</highlight>}}

Intent Whitelist
----------------

Controls which URLs the app is allowed to ask the system to open. By
default, no external URLs are allowed.

On Android, this equates to sending an intent of type BROWSEABLE.

This whitelist does not apply to plugins, only hyperlinks and calls to
`window.open()`.

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

Network Request Whitelist
-------------------------

Controls which network requests (images, XHRs, etc) are allowed to be
made (via cordova native hooks).

{{<note>}}
We suggest you use a {{<link title="Content Security Policy" href="#content-security-policy">}}, which is more
secure. This whitelist is mostly historical for webviews which do not
support CSP.
{{</note>}}

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

Without any `<access>` tags, only requests to `file://` URLs are
allowed. However, the default Cordova application includes
`<access origin="*">` by default.

Note: Whitelist cannot block network redirects from a whitelisted remote
website (i.e. http or https) to a non-whitelisted website. Use CSP rules
to mitigate redirects to non-whitelisted websites for webviews that
support CSP.

Quirk: Android also allows requests to
`https://ssl.gstatic.com/accessibility/javascript/android/` by default,
since this is required for TalkBack to function properly.

### Content Security Policy

Controls which network requests (images, XHRs, etc) are allowed to be
made (via webview directly).

On Android and iOS, the network request whitelist (see above) is not
able to filter all types of requests (e.g. `<video>` & WebSockets are
not blocked). So, in addition to the whitelist, you should use a
[Content Security Policy](http://content-security-policy.com/) `<meta>`
tag on all of your pages.

On Android, support for CSP within the system webview starts with KitKat
(but is available on all versions using Crosswalk WebView).

Here are some example CSP declarations for your `.html` pages:

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

See Also:

- [Third-party Cordova Plugins](../../third_party_phonegap)
- [Core Cordova Plugins](../../cordova_6.5)
