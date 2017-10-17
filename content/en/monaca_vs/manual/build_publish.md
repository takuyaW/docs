---
title: Remote Building and Publishing
---

# Remote Building and Publishing

{{<warning>}}
    Monaca for Visual Studio has been discontinued and will no longer be supported or maintained. We are developing a new extension that will be for Visual Studio Code. We will inform you of the release date on our site and mailing list.
{{</warning>}}

Inside `Remote Build`, there are several important functions such as:

-   Building application: choose a specific platform (among Android,
    iOS, Chrome Apps and Windows) to build.
-   Building configuration: configure necessary information regarding
    application and build for each platform.
-   Project dependencies: include necessary dependencies
    ([Cordova plugins](/en/monaca_ide/manual/dependencies/cordova_plugin/#standard-plugins), [JS/CSS Components](/en/monaca_ide/manual/dependencies/components) and [Service Integration](/en/reference/service_integration)) used by the project.

Until this step, we assume that you have successfully developed a
complete application. Then, you can try building your app and installing
it on your device. Once the app development and testing are completed,
your app is ready for market submission. Before releasing or
distributing your app into the markets (App Store, Google Play, ...),
you will need to create a release build of your app.

Please refer to the following documentation on how to build and
distribute your app according to each platform:

- [Building Monaca Apps](../../tutorial/building_app)
- [Publishing Monaca Apps](/en/monaca_ide/manual/deploy)


See Also:

- [Monaca for Visual Studio Tutorial](../../tutorial)
- [Project Dependencies](../dependencies)
- [Pairing and Debugging](../pairing_debugging)
- [Monaca for Visual Studio Overview](../overview)