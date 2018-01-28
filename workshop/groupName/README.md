#BOG

## instalation

Les commandes suivante partent du principe que vous vous situez dans le dossier racine du projet **datfic.net**.

Vous avez besoin de nodejs et du gestionnaire de packet par default, npm.  
Pour vérifier que node soit bien installer, lancer la commande:

    node --version

1. installer les dépendances

    lancer la commande
    
        npm  install
        
2. construir le site

    lancer le build du site de **BOG**

        npm run build
        
3. visualiser le site

    lancer le server pour la distribution du site
    
        npm run server
        
## developement



Si vous souhaitez modifier le site, lancer la commande suite, les modifications dans le dossier "./workshop/groupName/dev" seront automatiquement re-compilées

    npm run build-dev -- --watch
    
Vous pouvez ne lancer qu'un seul build en mode d'environement dev (site map,…), en ométant l'option --watch:

    npm run build-dev