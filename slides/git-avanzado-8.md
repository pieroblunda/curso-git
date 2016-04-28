##  Enmendar

Corregir un commit ya hecho. Situación típica: un bug encontrado a última hora.

```bash
# --amend sobreescribe el ultimo commit
# --no-edit no edita el mensaje
$ git add --all
$ git commit --amend --no-edit
```

TIP: también se puede utilizar para corregir un `typo` en la descripción del commit
