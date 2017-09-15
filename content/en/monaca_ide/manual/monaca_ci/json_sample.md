JSON Settings
=============

Monaca CI will automate its job by reading the JSON recipe script. In
other words, you will need to configure the JSON settings according to
what you want Monaca CI to do for you.

Parameters
----------

In the following table, there are necessary parameters you will need to
use in the recipe script.

+--------+-------------------------------------------------------------+
| Param  | Description                                                 |
+========+=============================================================+
| `task_ | > a name representing your build process.                   |
| name`  |                                                             |
+--------+-------------------------------------------------------------+
| `branc | > Github branch of the project you want to build.           |
| h`     |                                                             |
+--------+-------------------------------------------------------------+
| `tag`  | > Github tag of the project you want to build.              |
+--------+-------------------------------------------------------------+
| `platf | > The platform you want to build for. Valid values are:     |
| orm`   | > `ios`, `android` & `winrt`.                               |
+--------+-------------------------------------------------------------+
| `build | > The build type. Valid values are: `debug` & `release`.    |
| `      |                                                             |
+--------+-------------------------------------------------------------+
| `deplo | > The deployment service(s) you will use to deliver your    |
| y`     | > app.                                                      |
|        | >                                                           |
|        | > -   `type`: name of the deployment service (case          |
|        | >     sensitive).                                           |
|        | > -   `alias`: alias name of the selected deployment        |
|        | >     service (case sensitive).                             |
|        | > -   `default`: a block for default parameters you may     |
|        | >     need to use for the deployment service.               |
|        | > -   `ios`: a block for iOS parameters you may need to use |
|        | >     for the deployment service.                           |
|        | > -   `android`: a block for Android parameters you may     |
|        | >     need to use for the deployment service.               |
|        | >                                                           |
|        | > Please refer to here &lt;supported\_services&gt; on       |
|        | > currently supported and upcoming deployment services.     |
+--------+-------------------------------------------------------------+

Example
-------

Here is an example of a recipe script.

``` {.sourceCode .javascript}
[
    {
        "task_name": "test",
        "branch": "/release-[0-9]/",
        "tag": "/^\\d.\\d$/",
        "platform": [
            "ios",
            "android"
        ],
        "build": [
            "debug",
            "release"
        ],
        "deploy": [
            {
                "type": "DeployGate",
                "alias": "Internal-Focus-Group",
                "default": {
                    "foo": "bar"
                },
                "ios": {
                    "foo": "bar"
                },
                "android": {
                    "foo": "bar"
                }
            },
            {
                "type": "HockeyApp",
                "alias": "Internal-Focus-Group",
                "default": {
                    "foo": "bar"
                },
                "ios": {
                    "foo": "bar"
                },
                "android": {
                    "foo": "bar"
                }
            }
        ]
    }
]
```
