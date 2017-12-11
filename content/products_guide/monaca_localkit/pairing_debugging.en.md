---
title: Pairing and Debugging
weight: 30
---

In order to debug Monaca app with Monaca Localkit, you need to pair your
host PC (running Monaca Localkit) with your device (running Monaca
Debugger) first.

{{<note>}}
    Make sure your host PC and your mobile device are in the same network connection (LAN or Wi-Fi). Some public networks do not allow connections between clients; therefore, pairing cannot be done in this case.
{{</note>}}

## Start Pairing

1.  Log in to Monaca Localkit on your host PC.
2.  Use the same account to log in to Monaca Debugger on your mobile
    device.
3.  Once logged in, Monaca Debugger should be able to detect the host PC
    as shown below. Then, click {{<guilabel name="Pair">}} button to start the pairing.
    However, if Monaca Debugger is unable to detect the host PC
    automatically, please refer to [Troubleshoot the Pairing](/en/debugger/manual/troubleshooting/#troubleshoot-pair).

    {{<img src="/images/monaca_localkit/manual/pairing_debugging/1.png" width="300">}}

4.  If the pairing is successful, the debugger will be shown under `Debuggers` tab in Monaca Localkit.

    {{<img src="/images/monaca_localkit/manual/pairing_debugging/2.png">}}

5.  Moreover, when the debugger is successfully connected to Monaca
    Localkit, a local projects list will be shown in Monaca Debugger as
    shown below:

    {{<img src="/images/monaca_localkit/manual/pairing_debugging/3.png" width="300">}}

## Stop Pairing

1.  From Monaca Debugger, click on the toggle menu on the top-left corner and go to `Local Computers`.
2.  Then, the connected PC will be shown. Click on the `Information` icon of the connected PC (see the screenshot below).

    {{<img src="/images/monaca_localkit/manual/pairing_debugging/4.png" width="300">}}

3.  The information of the connected PC will be shown here. Click {{<guilabel name="Unpair this computer">}} button to disconnect from the selected PC. Once you unpair, you can't debug your local Monaca projects with this debugger anymore unless you pair it again.

    {{<img src="/images/monaca_localkit/manual/pairing_debugging/5.png" width="300">}}

## Debugging Monaca Apps with Monaca Localkit

Please refer to [Monaca Debugger with Monaca Local Development Tools](/en/debugger/manual/debug/#debugger-with-local-tools).


See Also:

- [Monaca Localkit Overview](../overview)
- [Monaca Localkit Tutorial](../../tutorial)
- [Remote Building and Publishing](../build_publish)
- [Troubleshooting Guide](../troubleshooting)
