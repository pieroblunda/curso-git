##  Diff Tool

```bash
# 1. Consultar la configuracion actual
$ cat ~/.gitconfig

# 2. Hacer un wrapper
$ echo -e '#!/bin/sh\n/usr/bin/opendiff "$2" "$5" -merge "$1"' > /usr/local/bin/programa-git-diff.sh
$ sudo chmod +x /usr/local/bin/programa-git-diff.sh

# 3. Setter de Git
$ git config --global diff.external programa-git-diff.sh
```
