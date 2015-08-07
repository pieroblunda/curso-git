###  git stash

```bash
git stash [save] [<message>]
git stash list
git stash apply <stash>
git stash pop <stash> #aplica el stash y lo borra de la lista
git stash drop <stash>
git stash clear
```

Este comando de guardado rápido (stashing) toma el estado del espacio de trabajo, con todas las modificaciones en los archivos bajo control de cambios, y lo guarda en una pila provisional.