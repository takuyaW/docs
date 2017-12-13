---
title: Getting Started with Vue 2 & Onsen UI 2 Template
---

The new [Vue with Onsen UI template](https://github.com/OnsenUI/vue-cordova-webpack) is a great way
to approach mobile development and can easily be integrated with Monaca
CLI in order to take advantage of all its features.

In this page, we will demonstrate how to import Vue with Onsen UI
template into Monaca CLI.

## Step 1: Installing Vue CLI

Open a Command Prompt window (for Windows) or Terminal window (for Mac)
and type the following command:

{{<highlight bash>}}
    npm install -g vue-cli
{{</highlight>}}


## Step 2: Importing the Template

1.  Create a new project based on the template by using the command below:

    {{<highlight bash>}}
    vue init OnsenUI/vue-cordova-webpack projectName{{</highlight>}}

2.  Navigate to the project folder and run `npm install`

    {{<highlight bash>}}
    cd projectName
    npm install{{</highlight>}}

## Step 3: Running the Template in Monaca CLI

With Monaca CLI, you can:

-   create new local projects, import or clone existing projects in
    [Monaca Cloud](https://monaca.io/cloud.html) into your host PC.
-   develop Monaca apps with your favourite local code editors.
-   debug your app either with [Monaca
    Debugger](https://monaca.io/debugger.html) or inspector integration.
-   remote build your projects without any setups locally.

### Prerequisite

If you haven't install Monaca CLI yet, please run the following command:

{{<highlight bash>}}
    npm install -g monaca
{{</highlight>}}


### Start Running the Template

In this section, we will briefly show how you could make use of Monaca
CLI with Vue template. Please follow the instruction below to take
advantage of Monaca's features:

1.  Build the template for production and generate `www` files:

    {{<highlight bash>}}
    npm run build{{</highlight>}}

2.  Run in development mode and load the bundles in memory with hot module replacement:

    {{<highlight bash>}}
    npm run dev{{</highlight>}}

    {{<img src="/images/monaca_cli/samples/vue_onsen/1.png">}}

    Or use `monaca demo` to preview your project in iOS and Android simultaneously in a browser:

    {{<highlight bash>}}
    npm run build:watch  // In a different terminal
    monaca demo{{</highlight>}}

    {{<img src="/images/monaca_cli/samples/vue_onsen/2.png">}}

3.  Want to test your template on a real device? Install [Monaca Debugger](https://monaca.io/debugger.html) and run the following command:

    {{<highlight bash>}}
    npm run build:watch  // In a different terminal
    monaca debug{{</highlight>}}

    {{<img src="/images/monaca_cli/samples/vue_onsen/3_1.png" width="300">}}
    {{<img src="/images/monaca_cli/samples/vue_onsen/3_2.png" width="300">}}

4.  Then, you can build your template for either iOS and Android easily with this command:

    {{<highlight bash>}}
    monaca remote build --browser{{</highlight>}}

    {{<img src="/images/monaca_cli/samples/vue_onsen/4.png">}}

These are just a brief view of what you can do with Monaca CLI. If you
would like to learn more about it, please refer to the following
contents:

- [Monaca CLI Tutorial](/en/tutorials/monaca_cli)
- [Monaca CLI Manual](/en/products_guide/monaca_cli)
