# Cronjobs

## Can I update my cronjobs via crontab -e?

No, you cannot. When you update HestiaCP, the crontab will simply get
overwritten. The changes will not get saved in backups either.
