# Best Practices

::: danger Never EVER run a websites or mail under the `admin` user
By default, the `admin` user has **elevated** privileges. This can pose a **security threat** to your server. For example, if you run WordPress under your `admin` account and a vulnerability is found in WordPress or a plugin, a malicious user might be able to run a limited number of commands as `root`!
:::

## How to create unprivileged user for regular tasks

1.  Login into the Control Panel as admin user
2.  Click on **USERS** tab
3.  Click **Add User** button
4.  Fill out all user’s details needed
5.  Click **Save** button
6.  Click on **USERS** tab again
7.  Click on **Login as** icon on the right hand of user’s name and email
8.  You are logged in as regular user now. Make all tasks you want securely under unprivileged account.

[![Add regular user of domain](http://img.youtube.com/vi/FY4l7qQeKHk/0.jpg)](https://www.youtube.com/watch?v=FY4l7qQeKHk "Add regular user of domain")
