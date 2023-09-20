---
id: assignment2
title: Assignment 2
sidebar_position: 2
description: TBD
---

# Assignment 2
## Overview
In Assignment 2 you will install configure a LAMP stack, which is an acronym that originally stood for Linux, Apache, MySQL and PHP. LAMP is a commonly used acronym and combination of technologies for hosting web based applications. In fact, newer technologies that have come along to replace elements of the LAMP stack tend to pick their name based on the letter in the acronym that they are providing services for (ie MariaDB or MongoDB, Perl or Python). You will then use this platform to install and host Wordpress (a popular free and open source content management system or CMS). You will also configure your firewall to further enhance the security of your computer system.

This assignment will be completed inside your centos3 VM.

## Important information
**Weight**: 15% of your overall grade

**Due Date**: Refer to your section's Blackboard announcements.

**Submission**: You will be submitting your completed work through a series of screenshots on Blackboard. (See below.)

**NOTE:** Do this assignment inside the **centos3** virtual machine and use the user (your user ie: **jason.carman** or **ataur.rahman**) you created in **Lab 4**.

**NOTE:** It is YOUR responsibility to backup your **centos3** VM for this assignment! You are required to frequently backup your VM prior to exiting a work session during this assignment. Your instructor will NOT accept the fact that your hard disk crashed and lost all of your work. If you properly backed up your VM images and xml configuration files to a USB, then you can purchase a new hard-disk or wipe and recreate your hard disk and restore your VMs.

## Updating and Installing Packages
Before proceeding make sure you have updated your system using yum.

### Install the following packages using yum
- **httpd**: this is the Apache web server software.
- **php**: this is the PHP server software, which allows Apache to run more complex websites.
- **php-mysql**:  this is a PHP extension that allows PHP to use a MySQL server.
- **mariadb-server**:  this is the database software.

### Configuring Apache
- Start the httpd service using **systemctl**.
- Ensure that the httpd service starts automatically during boot.
- Confirm that you can connect to your web server using a web browser -- both from centos3 (you can test using **lynx**) as well as from the host (you can test using Firefox with centos3’s IP address). You should see the Apache Test Page.
- If you can't connect to it from outside the machine - perhaps your firewall is blocking access to the web server.
- Configure your firewall (iptables) to allow incoming http traffic:

  **HINT:** to figure out which port is required issue the command **grep http /etc/services**. You may need to pipe the output to head to see the top of the list. The required port is the first one listed.

### Configuring MariaDB
- Start the mariadb service using **systemctl**.
- Ensure that the mariadb service starts automatically during boot.
- You may get messages after starting the mariadb service for the first time. Do not ignore these messages, it will tell you how to set a password and take other basic steps to secure the the mariadb server. Follow those instructions to set a password, recording the detail of what you do for later use.

  If you do not see any messages, issue the command **sudo msql_secure_installation** and follow the prompts onscreen to:
 Set a root password (set it to your Seneca username)
  - Remove anonymous users
  - Disallow root login remotely
  - Remove the test database and access to it
  - Reload the privilege tables

- This following part is challenging so take your time and read the instructions to make sure you do it properly, we have to set up a dedicated user and database for wordpress:
  - Note: If you decide to download the wordpress package during this section, please use the 5.0.x version here (use wget): https://wordpress.org/wordpress-5.0.7.tar.gz

- You will need to run the following commands in a centos3 terminal.
  - Your adminusername is root
  - Your databasename is myblog
  - Your wordpressusername is your Seneca username
  - The password should also be your Seneca username
  - Your hostname is localhost

- Connect to the database using the following command. Type the password when prompted: 
```bash 
mysql –h localhost –u root –p
```
- Create the database: 
```bash
CREATE DATABASE myblog;
```
- Create the new user (change wordpressusername and password to your Seneca username):
```bash
CREATE USER wordpressusername@localhost IDENTIFIED BY 'password';
```
- Grant your new user privileges to that database (change wordpressusername and password to your Seneca username):
```bash
GRANT ALL PRIVILEGES ON myblog.* TO wordpressusername@localhost IDENTIFIED BY 'password';
```
- Reload the privilge tables: 
```bash
FLUSH PRIVILEGES;
```
- Configure your firewall (iptables) to allow incoming ssh traffic
  - **HINT**: to figure out which port is required issue the command **grep ssh /etc/services**. The required port is the first one listed.

## Installing and Configuring Wordpress
Wordpress (like most web applications) is not available in the Centos repositories, it must be downloaded and installed manually.

- Download the latest 5.0.x version of wordpress to your centos3 VM here (use wget): https://wordpress.org/wordpress-5.0.7.tar.gz (If you haven’t downloaded it already)
- Extract it into /var/www/html
- Now we need to allow Apache to modify the wordpress installation. To do this use chown and chgrp with -R option to make the owner and group of every file and directory inside wordpress "apache".
- Check your work so far by pointing your web browser to http://centos3/wordpress/
- If you get an error starting with "There doesn't seem to be a wp-config.php file", copy the wpconfig-sample.php file to wp-config.php and edit the new file:
  - Change the DB_NAME, DB_USER, DB_PASSWORD to the appropriate values. (Do not use the root account for your database connection! Marks will be deducted.)

- Now go back to http://centos3/wordpress/ - you should see a Wordpress Welcome/Setup page.
  - Set the title to Your Name's Blog. For example for me it would be "OPS235 Professor's Blog"
  - Set the password to your Seneca ID.
  - Set the email to your Seneca email address.
  - Click "Install Wordpress", you should see a "Success!" message.

## Write-up
Write a blog post on your new blog explaining:
- What is Apache, PHP, MySQL, and Wordpress.
- What problems (minor and major) you ran into during the installation and how you solved 
them.

Write a second post on your blog including for example:
- Are you ready for the exam or not?
- List the material you are strong on.
- List the material you are worried about.
- List any questions or topics you would like me to address during exam review.

Make your posts look professional. That means use good english, headings, bullet or numbered lists, etc.

## Submission
On your **centos3** vm issue the following command to download the check script.

```bash
git clone https://github.com/OPS245/a2-check
```

Give the **marka2.bash** script execute permission and run it.

Upload the following to the Assignment 2 folder on blackboard:
- Output from the Assignment 2 check script (a2output.txt)
- A screenshot showing your first blog post on wordpress
- A screenshot showing your second blog post on wordpress

## Rubric
| Task | Mark |
| :--- | :--- |
| Correct packages installed | 1 |
| Apache configured and running | 3 |
| MariaDB configured and running | 3 |
| Wordpress extracted correctly | 1 |
| Wordpress configured correctly | 2 |
| Wordpress showing in Firefox | 1 |
| Blog accessed using local hostname resolution | 2 |
| iptables rules configured correctly | 3 |
| First blog post | 1 |
| Second blog post | 1 |
| Submitted correctly | 2 |
| **Total** | **20** |
