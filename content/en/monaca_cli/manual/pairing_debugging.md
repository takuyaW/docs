---
title: Pairing and Debugging
---

# Pairing and Debugging

In order to debug Monaca app with Monaca CLI, you need to pair your host
PC (running Monaca CLI) with your device (running Monaca Debugger)
first.

Before connecting Monaca Debugger to your host PC, please pay attention
to the following points:

1.  Monaca Debugger and the host PC have to connect to the same network
    connection (LAN or Wi-Fi). Some public networks do not allow
    connections between clients; therefore, pairing cannot be done in
    this case.
2.  Use the same Monaca account for both Monaca Debugger and the host
    PC.
3.  Disable the host PC's firewall.

## Start Pairing

1.  Launch Monaca Debugger app on your device and sign in using your
    Monaca account information. Make sure you are using the same account
    information you are using with Monaca CLI.
2.  In the command window on your PC, navigate to your project folder
    and use [monaca debug](#monaca-debug) command to connect to your Monaca Debugger:

    {{<highlight bash>}}
    $ monaca debug{{</highlight>}}

3.  Then, a popup message prompting you to pair Monaca Debugger with the
    host PC will appear. After this, your application should be running
    on the debugger.

    {{<img src="/images/monaca_cli/manual/pairing_debugging/1.png" width="300">}}

4.  If your pairing is successful, your local project’s name will appear
    under Local Projects in Monaca Debugger. However, if you fail the
    pairing, please refer to [Fail to Pair Monaca Debugger](/en/debugger/manual/troubleshooting/#troubleshoot-pair).

    {{<img src="/images/monaca_cli/manual/pairing_debugging/2.png" width="300">}}

## Stop Pairing

There are two ways to stop the pairing:

### 1. From the PC

In the same command window on your PC which you are running [monaca debug](monaca-debug) command, please use the following command to stop the
pairing/break the debug process between your PC and Monaca Debugger:

{{<highlight bash>}}
    ctrl + c
{{</highlight>}}

### 2. From Monaca Debugger

1.  click on the toggle menu on the top-left corner and go to {{<guilabel name="Local Computers">}} button.
2.  Then, the connected PC will be shown. Click on the `Information` icon of the connected PC (see the screenshot below).
    
    {{<img src="/images/monaca_cli/manual/pairing_debugging/3.png" width="300">}}

3.  The information of the connected PC will be shown here. Click on {{<guilabel name="Unpair this computer">}} button to disconnect from the selected PC. Once it is unpaired, you can't debug your local Monaca projects with this debugger anymore unless you pair it again.

## Debugging Monaca Apps with Monaca CLI

Please refer to [Monaca Debugger with Monaca Local Development Tools](/en/debugger/manual/debug/#debugger-with-local-tools).

See Also:

- [Monaca CLI Tutorial](../../tutorial)
- [Monaca CLI Overview](../overview)
- [Project Dependencies](../dependencies)
- [Monaca CLI Commands](../cli_commands)
- [Remote Building and Publishing](../build_publish)
- [Troubleshooting Guide](../troubleshooting)
