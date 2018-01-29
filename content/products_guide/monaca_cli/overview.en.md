---
title: Overview
weight: 10
---

## Introduction

Monaca CLI is one of the local deveopment environments which can be used
to develop Monaca apps locally. Monaca CLI provides command line
interface for using Monaca Cloud from your local PC. With Monaca CLI,
you can:

-   Create new local projects, import or clone existing projects in
    Monaca Cloud into your host PC.
-   Develope Monaca apps with any local code editors you prefer.
-   Debug your app with inspector integration.
-   Support transpiler options for transpilable projects such as ReactJS
    and Angular2 projects.
-   Remote build your projects without any setups locally.

## Transpiling in Monaca CLI

Some of the modern frameworks have created their own languages in order
to interact with their products (like JSX), or have just integrated some
extensions that are not natively available in JavaScript (for example
TypeScript). The transpiling process transforms the code written with
those languages to a native JavaScript code ready to be executed on
modern browsers/WebViews. We currently use WebPack to perform the
transpiling operations.

Currently, it is available for the Vue, React and Angular2 templates. It
can be triggered in two ways:

1.  `monaca transpile`: runs the transpiler on the current project. If
    the `--watch` argument is given, the transpiler will automatically
    run every time the source code is updated (and saved).
2.  `monaca preview`: runs the transpiler in watch mode and starts an
    HTTP Server in order to display the app’s content.

## Getting Started

### Prerequisite

You are required to have [Node.js](https://nodejs.org/) installed on
your PC in order to install Monaca CLI.

### Step 1: CLI Installation

Use the following command to install Monaca CLI:

{{<highlight bash>}}
$ npm install -g monaca
{{</highlight>}}

On some systems you may have to prefix the command with `sudo` because
of permission issue:

{{<highlight bash>}}
$ sudo npm install -g monaca
{{</highlight>}}

{{<note>}}
    In order to check the currently installed Monaca CLI’s version, use <code>monaca</code> command. Moreover, if you want to update Monaca CLI, just re-install it using the above command.
{{</note>}}

### Step 2: Following CLI Tutorial

After successfully installed Monaca CLI, please follow our simple and easy tutorial on [how to use Monaca CLI](../tutorial).

See Also:

- [Monaca CLI Tutorial](../tutorial)
- [Monaca CLI Commands](../cli_commands)
- [Project Dependencies](../dependencies)
- [Pairing and Debugging](../pairing_debugging)
- [Remote Building and Publishing](../build_publish)
- [Troubleshooting Guide](../troubleshooting)
