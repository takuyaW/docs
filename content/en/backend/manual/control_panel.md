---
title: Backend Control Panel
---

# Backend Control Panel

There is a growing need for mobile apps to have user management
functions which allow users to register and keep their data in a
database. Monaca Backend provides these functionalities in advance as a
cloud-based service that can manage users without a need for server-side
development on the client's part.

Specifically, the following functions can be implemented with Monaca
Backend:

-   management of end user data on a server.
-   end user registration and authentication.

This manual will show user management from the Monaca Cloud IDE.

## <a name="backend-control-panel-getting-started"></a> Getting Started with Monaca Backend

1.  From Monaca Cloud IDE, click on `Cloud` icon above the file tree menu
    to go to the Backend Control panel. Then, click {{<guilabel name="Start Using Backend">}} button.

    {{<img src="/images/backend/control_panel/1.png">}}

2.  The following dialog will appear. You can create a new Backend, or
    select an existing one which is used in a different project. Then,
    click {{<guilabel name="Apply">}} to attach the Backend to your project.

    {{<img src="/images/backend/control_panel/2.png">}}

3.  After attaching the Backend, your Backend Control panel will look
    similar to this:

    {{<img src="/images/backend/control_panel/3.png">}}

## Backend Configuration

### Switching the Backend

1.  From Backend Control panel, click on the `Gear` icon and choose `Select a Backend`.

    {{<img src="/images/backend/control_panel/25.png">}}

2.  Backend dialog will appear. You can switch to another existing
    backend or a new one. Then, click {{<guilabel name="Apply">}}.

    {{<img src="/images/backend/control_panel/26.png">}}

### Security Settings

1.  From Backend Control Panel, click on the `Gear` icon and choose `Backend Settings`.

    {{<img src="/images/backend/control_panel/27.png">}}

2.  Backend Settings dialog will appear. In this page, you can:

    -   enable or disable automatic login, and change the expiration period.
    -   change the minimum character length required for password and username.
    -   set password reset token expiration period.

    {{<img src="/images/backend/control_panel/28.png">}}

3.  Then, click {{<guilabel name="Apply">}}.

## Backend Management API Key

Backend Management API key is needed when you want to use Monaca Backend
Management API. This API allows you to manage your Monaca Backend from
your server rather than from Monaca Cloud IDE. For more information
about this, please refer to [Backend Management API](/en/reference/monaca_api/cloud_management).

In order to get Backend Management API key, please follow the
instruction below:

1.  From Backend Control Panel, click on the `Gear` icon and choose `Backend Settings`.

    {{<img src="/images/backend/control_panel/29.png">}}

2.  Backend Settings dialog will appear. In this page, go to
    `Management API` and click {{<guilabel name="Enable">}}.

    {{<img src="/images/backend/control_panel/30.png">}}

3.  In this page, there are two important information such as:

    -   `Management API Endpoint URL`: This URL looks like this `"https://cloud.monaca.mobi/manage/json-rpc/CLOUD_PROJECT_ID"` in which `CLOUD_PROJECT_ID` is your Monaca Backend ID. This URL will be used as `JSON-RPC Request URL` (See [Backend Management API](/en/reference/monaca_api/cloud_management)).
    -   `IP Address Range`: You can specify one API key for a particular range of IP addresses. Leaving it blank is not recommended.

    {{<img src="/images/backend/control_panel/31.png">}}

4.  Click {{<guilabel name="Create">}} button to generate the API key.

See Also:

- [Backend API](/en/reference/monaca_api/cloud)
- [Backend Memo](/en/sampleapp/samples/backend_memo)