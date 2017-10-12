---
title: Deploy Services
---

# Deploy Services

## Currently Supported Deploy Services

### DeployGate

[DeployGate](https://deploygate.com/) makes it easy to share your
in-development iOS and Android apps, allowing developers to seamlessly
progress through the prototyping, development, testing, and marketing
stages of app distribution.

You may need to use the following parameters in the JSON recipe script
for Monaca CI. For more information, please refer to [DeployGate API
documentation](https://deploygate.com/docs/api).

| Param | Description | Remark |
|-------|-------------|--------|
| `token` | Your API key. If you are going to use the API for automated build in your organization, you may want to use organization’s API key which shown on the organization page to upload the app independent from member/role management. | Stored in deploy service settings. Automatically populated. |
| `file` | App file binary |	Automatically populated |
| `message` | [Optional] Push message | |                       
| `distribution_key` | [Optional] Target Distribution Key | |                       
| `release_note` | [Optional] Distribution message | |                        
| `disable_notify` | [Optional]\(`iOS only`\) If you set yes as a value, disable notify via email. | |
| `visibility` | [Optional] Set a new application’s privacy setting by specifying `private` (default) or `public`. If you are using Personal Free account, you have to specify `public` to upload a new app since it doesn’t have a slot for private app. No effect when updating. | | 

#### <a name="api-key-deploygate"></a> How to Get API Key

1.  Log into [DeployGate](https://deploygate.com/).
2.  Go to `Account Settings`.

    {{<img src="/images/monaca_ide/manual/monaca_ci/supported_services/1.png">}}

3.  Then, a Profile page will be shown. You will be able to find the API
    key at the end of the page.

    {{<img src="/images/monaca_ide/manual/monaca_ci/supported_services/2.png">}}

### HockeyApp

[HockeyApp](https://hockeyapp.net/) brings mobile DevOps to your apps
with beta distribution, crash reporting, user metrics, feedback, and
powerful workflow integrations.

You may need to use the following parameters in the JSON recipe script
for Monaca CI. For more information, please refer to [HockeyApp API
documentation](https://support.hockeyapp.net/kb/api/api-apps).

<table>
    <tr>
        <th>Param</th>
        <th>Description</th>
        <th>Remark</th>
    </tr>
    <tr>
        <td><code>ipa</code></td>
        <td>File data of the <code>.ipa</code> for iOS, <code>.app.zip</code> for OS X, or <code>.apk</code> file for Android.</td>
        <td>Automatically populated</td>
    </tr>
    <tr>
        <td><code>dsym</code></td>
        <td>[Optional] file data of the <code>.dSYM.zip</code> file (iOS and OS X) or <code>mapping.txt</code> (Android). Please note that the extension has to be <code>.dsym.zip</code> (case-insensitive) for iOS and OS X and the file name has to be <code>mapping.txt</code> for Android.</td>
        <td></td>
    </tr>
    <tr>
        <td><code>notes</code></td>
        <td>[Optional] release notes as Textile or Markdown (after 5k characters note are truncated)</td>
        <td></td>
    </tr>
    <tr>
        <td><code>notes_type</code></td>
        <td>[Optional] type of release notes:
            <ul>
                <li><code>0</code> for Textile</li>
                <li><code>1</code> for Markdown</li>
            </ul>
        </td>
        <td></td>
    </tr>
    <tr>
        <td><code>notify</code></td>
        <td>[Optional] notify testers (can only be set with full-access tokens):
            <ul>
                <li><code>0</code> to not notify testers</li>
                <li><code>1</code> to notify all testers that can install this app</li>
                <li><code>2</code> to notify all testers</li>
            </ul>
        </td>
        <td></td>
    </tr>
    <tr>
        <td><code>status</code></td>
        <td>[Optional] download status (can only be set with full-access tokens):
            <ul>
                <li><code>1</code> to not allow users to download the version</li>
                <li><code>2</code> to make the version available for download</li>
            </ul>
        </td>
        <td></td>
    </tr>
    <tr>
        <td><code>tags</code></td>
        <td>[Optional] restrict download to comma-separated list of tags</td>
        <td></td>
    </tr>
    <tr>
        <td><code>teams</code></td>
        <td>[Optional] restrict download to comma-separated list of team IDs. For example:
            <ul>
                <li><code>users=1224,5678</code>with 1224 and 5678 being the database IDs of your users</li>
            </ul>
        </td>
        <td></td>
    </tr>
    <tr>
        <td><code>mandatory</code></td>
        <td>[Optional] set version as mandatory:
            <ul>
                <li><code>0</code> for not mandatory</li>
                <li><code>1</code> for mandatory</li>
            </ul>
        </td>
        <td></td>
    </tr>
    <tr>
        <td><code>release_type</code></td>
        <td>[Optional] set the release type of the app:
            <ul>
                <li><code>0</code> for beta [default]</li>
                <li><code>1</code> for store</li>
                <li><code>2</code> for alpha</li>
                <li><code>3</code> for enterprise</li>
            </ul>
        </td>
        <td></td>
    </tr>
</table>

#### <a name="api-key-hockeyapp"></a> How to Get API Key

1.  Log into [HockeyApp](https://hockeyapp.net/).
2.  Go to `Account Settings`.

    {{<img src="/images/monaca_ide/manual/monaca_ci/supported_services/3.png">}}

3.  In the `Account Settings` page, go to `API Tokens` tab. In this page,
    you can find all of your API tokens or create a new one. Assuming
    you haven't created an API token yet, let's create one as shown in
    the screenshot below:

    {{<img src="/images/monaca_ide/manual/monaca_ci/supported_services/4.png">}}

4.  Once the API token is successfully created, you will be able to see
    it at the bottom of the page.

    {{<img src="/images/monaca_ide/manual/monaca_ci/supported_services/5.png">}}

## Upcoming Supported Deploy Services

In addition to the above services, we are planning to add more
deployment services. Currently, we are working the following services:

-   [Test Flight](https://developer.apple.com/testflight/)
-   [Appetize.io](https://appetize.io/)

See Also:

- [Monaca CI Overview](../overview)