---
id: assignment1
title: Assignment 1
sidebar_position: 1
description: TBD
---

# Assignment 1

The purpose of the OPS245 assignments is to showcase your abilities in the course thus far, and conduct a bit of independent research. Some of what you'll be asked to complete will be familiar to you, while other parts will require you to think a bit and do some light Googling. It's expected you won't have all the answers right away, but you can find them. **As a result, unlike labs, your professor cannot provide any help or troubleshooting for your assignment.**

This assignment will be completed inside your local c7host virtual machine using additional KVM/QEMU nested VMs.

**Weight**: 15% of your overall grade

**Due Date**: Refer to your section's Blackboard announcements.

## Create a new virtual machine

Create a new Centos 7 VM (Minimal installation) using the following information. You may refer to your lab instructions, logbook and google for any of the steps. The installation process is the same as **centos1** in **Lab 2**.

- Install a new CentOS Minimal VM. (Do **not** install the GUI version.)
- The virtual machine name and the internal hostname for the machine must be your Seneca username. (Example: cjohnson30)
- The regular user created during installation must also be your Seneca username.
- Ensure LVM is used in your installation partitioning.
- **Memory:** 2048 MB
- **Disk space:** 20 GB
- **CPUs:** 2
- Use your existing virtual network

The rest of this assignment should be done after the installation is completed successfully.

## Post Installation Tasks

Use `yum` to accomplish the following:

- Find and install the Cinnamon desktop environment: `yum install cinnamon`
- Do the rest of the assignment (including the assignment submission) while running Cinnamon. (Hint: Think about default targets.)
- Update the system
- Disable SELinux
- Stop, disable and remove firewalld
- Install, start and enable iptables-services

## Install a Second Linux Distribution as a Virtual Machine
Create a new Linux Mint VM (Cinnamon Edition) in **VMWare**, using the following information. Use the default partitioning and installation options.

- **Username:** Your Seneca Username
- **Memory:** 2048 MB
- **Disk space:** 20 GB
- **CPUs:** 2
- The virtual machine name and the hostname for the machine must be your learn user ID followed by **-mint**. For example asmith15-mint
- Install **Linux Mint** as the OS for the new virtual machine (VMWare).

## Post Installation Tasks
- Update the system using `apt` instead of `yum`. The rest of the process is the same.
- Use `apt` to install `Chromium`.  You may need to use Google to accomplish this.

## Submission

Submit the following screenshots on BlackBoard that show you've completed the work.

### Centos VM
- Centos VM installed
- Output of the hostname command
- Cinnamon desktop installed and in use
- SELinux disabled
- IPTables service runnign and enabled

### Linux Mint VM
- Linux Mint VM installed
- Chromium installed

## Rubric

| Task |	Maximum mark |	Actual mark |
| --- | --- | --- |
| New CentOS VM installed (Seneca username) |	5	| |
| Correct hostname (Seneca username) |	2	| |
| Using Cinnamon |	2	| |
| SELinux disabled |	2	| |
| IPTables service running and enabled |	2	| |
| Linux Mint VM installed |	5	| |
| Chromium installed in Mint VM |	2	| |
| **Total** |	20	| |
