---
id: network-monitoring
title: Network Monitoring
sidebar_label: Network Monitoring
slug: /usage/network-monitoring
---

:::info
🚧 This page is under construction!
:::

# Installing the ERIGrid Perfsonar Testpoint on Raspberry Pi

This document details how to install and use the ERIGrid Perfsonar Testpoint. Furthermore, it shows how to connect your testpoint to the Perfsonar Web Agent (PWA) and the MadDash services.

## Setting up your Raspberry Pi

First install the Raspberry PI Imager from the [official website](https://www.raspberrypi.com/software/). Insert your SD card into your computer and run the PI Imager.
Select an operating system (OS) version that is [supported by perfsonar](https://docs.perfsonar.net/install_debian.html).
The OS can be selected by clicking the Operating system button, going to Raspberry Pi OS (other) and selecting the desired version. I selected Debian 10 Buster (Legacy).

![image](https://user-images.githubusercontent.com/106676254/181249088-739b8ffa-f9de-495e-b5ee-a32a3e9555d8.png)

For storage select your SD card and press the enabled write button. 
Finally, you can mount your SD card on your raspberry device.

### Configuring your device

Follow the configuration instructions that appear as the raspberry initializes. When prompted to log in you can use the following standard account:
-	User - pi
-	Password - raspberry

Connect your raspberry to the internet by using an ethernet cable and skip the wifi-set-up window.

Finally, enable SSH by going to the raspberry menu in the top left corner, selecting **Preferences -> Raspberry PI Configuration -> Interfaces** and enabling SSH. To apply this change, you will need to reboot your device, you can again do this from the raspberry menu and going to **Logout**.
SSH is enabled so that, docker-compose can be installed, the required GitHub files can be accessed and to allow for remote control of the raspberry device.

## Downloading Docker and Docker-Compose

Docker can be installed by following the instructions provided [here](https://www.jfrog.com/connect/post/install-docker-compose-on-raspberry-pi/). 

Steps 1 and 2 can be skipped if you have set up your raspberry and have git installed. Two typos in the website are:
1.	docker version **.** - should be – docker version
2.	sudo systemctl to enable **D**ocker – should be - sudo systemctl to enable docker

## The ERIGrid Perfsonar-Testpoint

This section shows how to install and use the ERIGrid 2.0 perfsonar-testpoint. 

### Connecting to Github

First, you should create a GitHub account and link it to your device via SSH, as detailed in the [official GitHub documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).

### Installing the Perfsonar-Testpoint
In the terminal of your raspberry run the following commands:

```
git clone git@github.com:ERIGrid2/charts.git
cd charts
git checkout buster-testpoint
cd images/perfsonar-testpoint
./testpoint.sh build
nano testpoint.sh
```

The nano command allows you to change the hostname in the script and you can exit it by press Ctrl and X.
The applied changes can be checked using `git status` and `git reset --hard origin/mainline` reverses all applied changes.

#### If you get this error - Got permission denied while trying to connect to the Docker Daemon Socket

Your user is unauthorised and you will need to use the sudo command. If you would like to avoid doing this every time you can authorize your user by running these commands in the terminal. 

1.	`sudo usermod -a -G docker [user]`
    
    a.	Where you should replace [user] with your username. If you have used the standard account mentioned above, you should replace it with ‘pi’.
2.	`grep docker /etc/group`
    
    a.	Checks if operation was successful. Your user should appear in the output (docker: x: 998: root, pi).
3.	`newgr docker`

Finally, reboot the system to apply the changes.

### Verifying the Perfsonar-Testpoint is working 

Close all other windows on your raspberry.

First, go to the perfsonar-testpoint file by running `cd charts/images/perfsonar-testpoint` in the terminal. Then run `./testpoint.sh up` (if the testpoint is running and this command is executed an error will appear stating the testpoint is already running and this step can be skipped) and `./testpoint.sh exec` to initialize the testpoint. You can now connect to other testpoints. Test this by running `pscheduler task rtt --dest perfsonar-01.rna.albany.edu`, the output should be similar to the one below:

```
root@xxxxxxxx:/#pscheduler task rtt --dest perfsonar-01.rna.albany.edu
Submitting task...
Task URL:
https://localhost/pscheduler/tasks/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Running with tool 'ping'
Fetching first run...

Next scheduled run:
https://localhost/pscheduler/tasks/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Starts 2022-06-06T10:46:26Z (~0 seconds)
Ends   2022-06-06T10:46:37Z (~8 seconds)
Waiting for result...

1	perfsonar-01.rna.albany.edu (169.226.124.40)  64 Bytes  TTL 41  RTT  96.6000 ms
2	perfsonar-01.rna.albany.edu (169.226.124.40)  64 Bytes  TTL 41  RTT  96.1000 ms
3	perfsonar-01.rna.albany.edu (169.226.124.40)  64 Bytes  TTL 41  RTT  96.0000 ms
4	perfsonar-01.rna.albany.edu (169.226.124.40)  64 Bytes  TTL 41  RTT  96.1000 ms
5	perfsonar-01.rna.albany.edu (169.226.124.40)  64 Bytes  TTL 41  RTT  96.0000 ms

0% Packet Loss  RTT Min/Mean/Max/StdDev = 95.975000/96.176000/96.621000/0.231000 ms

No further runs scheduled.
```

This connects to a testpoint in Albany, USA. All the globally registered testpoints can be found at the following [interface](http://stats.es.net/ServicesDirectory/) and the [Perfsonar documentation](https://docs.perfsonar.net/manage_locating_hosts.html) details how to use it.

Other commands include:

1.	pscheduler task --debug rtt --dest perfsonar-01.rna.albany.edu – provides additional information on program execution.
2.	pscheduler task rtt --interval=PT25S --timeout=PT25S --dest perfsonar-01.rna.albany.edu – sets the interval and timeout to specific objects.

### Using the Testpoint

Below is a diagram of the perfsonar-testpoint architecture, taken from the [official documentation](https://docs.perfsonar.net/install_options.html). 

![image](https://user-images.githubusercontent.com/106676254/181256301-efdee1a4-cbe7-4aea-9367-6c9ad7fca80e.png)

The components are responsible for specific types of tasks that are described below.

-	perfsonar-tools: This bundle includes just the command-line clients needed to run on-demand measurements such as iperf, iperf3 and owamp.
-	[LS registration](https://docs.perfsonar.net/config_ls_registration.html) is used to define what gets registered into the lookup service. 
-	pScheduler is responsible for managing the execution of network measurements, or more generally tasks, in perfSONAR. The different types of tasks that can be performed using the perfsonar-testpoint pScheduler are described [here](https://docs.perfsonar.net/pscheduler_client_tasks.html). They can also be found by running pscheduler task –help in the terminal.
-	pSConfig is a template framework for describing and configuring a topology of tasks and it is described [here](https://docs.perfsonar.net/psconfig_intro.html). The role of the pSConfig pScheduler Agent is to read pSConfig templates and generate a set of pScheduler tasks. More information can be found [here](https://docs.perfsonar.net/psconfig_pscheduler_agent.html). 

## Connecting to the Central Archive and MadDash

1.	Check the public IP address of your testpoint using `curl config.co`
2.	Install [Putty](https://www.putty.org/) in order to log into the central archive machine
    a.	Use the address erigrid.0l.de to access the virtual machine (VM) as shown below:
    ![image](https://user-images.githubusercontent.com/106676254/181258046-10e6c098-6738-4129-bb70-296b6b9af416.png)

    b.	Log in using the following credentials: username: erigrid, password: h2020erigrid!
3.	In the VM terminal perform the following commands
    a.	`sudo su`
    b.	`/usr/sbin/esmond_manage add_user_ip_address erigrid **IPaddress**/32`, where the IP address is the one you found in step 1. The output should look like this:
    
    ![image](https://user-images.githubusercontent.com/106676254/181258266-aee1914e-391c-4fe0-9517-e6335d16b82e.png)
    
    You should now be connected to the archive and MADdash servers. This can be verified by checking if your information was uploaded. The services can be accesed via the links below.

### Links to the Central Archive and MadDash

1.	http://erigrid.0l.de/esmond/perfsonar/archive/
2.	http://erigrid.0l.de/maddash-webui/

## Perfsonar Web Agent (PWA)

The PWA is a tool used for creating JSON pSConfig files, without having to write the files manually. The link for the ERIGrid PWA is: https://83.243.41.190/ and the login credentials are the same as for the VM mentioned above.

### Creating a Host

In order to start using the PWA first you will need to add your host. This can be achieved by going to hosts, pressing the new host button and filling in the required information. Most importantly, the hostname should be the same as the one you set when installing the testpoint and the IP address at the bottom should be the same as the one you added in the VM.

### Using the PWA

Now you can create Host groups and Testspecs, which in turn are used to create Configs. The Configs can be added to your testpoint using `psconfig remote add --configure-archives https://83.243.41.190/pub/config/$name$?format=psconfig`
where $name$ should be replaced with what you have specified in the Config URL.

The output should be similar to the example below.

![image](https://user-images.githubusercontent.com/106676254/181261057-0573eb6d-3233-4b81-8127-0451d2a0fb73.png)

You can check if the Config was successfully added to your testpoint by using:

`psconfig pscheduler-stats`

![image](https://user-images.githubusercontent.com/106676254/181261263-d399494c-c5d3-4464-8f9d-bdde58665f5c.png)

and `psconfig pscheduler-tasks`

![image](https://user-images.githubusercontent.com/106676254/181261407-61427acd-26fd-4ab2-9136-511b5858094c.png)

Finally, you can check if your results were added to the archive and/or the MADdash spaces.






