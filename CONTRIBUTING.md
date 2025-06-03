# Guide de contribution

Merci de l'intérêt que vous portez à notre documentation sur la conformité SOC 2 pour Kubernetes ! Nous apprécions votre volonté de contribuer.

## Comment contribuer

### Signaler des problèmes

Si vous trouvez un bug, une erreur ou une information obsolète, n'hésitez pas à ouvrir une issue. Assurez-vous de :

1. Vérifier si le problème n'a pas déjà été signalé
2. Décrire clairement le problème
3. Inclure des étapes pour reproduire le problème si applicable
4. Préciser la version de la documentation concernée

### Proposer des modifications

1. **Forker le dépôt**
   Cliquez sur le bouton "Fork" en haut à droite de la page du dépôt.

2. **Créer une branche**
   ```bash
   git checkout -b ma-nouvelle-fonctionnalite
   ```

3. **Apporter vos modifications**
   - Respectez le style d'écriture existant
   - Vérifiez l'orthographe et la grammaire
   - Mettez à jour la documentation si nécessaire

4. **Valider vos modifications**
   ```bash
   git add .
   git commit -m "Description claire et concise de vos modifications"
   ```

5. **Pousser vos modifications**
   ```bash
   git push origin ma-nouvelle-fonctionnalite
   ```

6. **Ouvrir une Pull Request**
   - Allez sur la page GitHub de votre fork
   - Cliquez sur "Compare & pull request"
   - Décrivez clairement les changements proposés
   - Soumettez la pull request

## Directives de style

### Rédaction
- Utilisez un ton professionnel mais accessible
- Soyez concis tout en étant complet
- Utilisez des listes à puces pour les étapes ou les points clés
- Structurez le contenu avec des titres et sous-titres pertinents

### Formatage Markdown
- Utilisez le formatage Markdown de manière cohérente
- Ajoutez des liens vers des ressources pertinentes
- Utilisez des blocs de code avec la syntaxe appropriée

### Images
- Utilisez des images de haute qualité
- Optimisez les images pour le web
- Incluez un texte alternatif descriptif

## Développement local

Pour tester localement les modifications :

1. Installez les dépendances :
   ```bash
   bundle install
   ```

2. Lancez le serveur de développement :
   ```bash
   bundle exec jekyll serve
   ```

3. Ouvrez http://localhost:4000 dans votre navigateur

## Code de conduite

En participant à ce projet, vous acceptez de respecter notre [Code de Conduite](CODE_OF_CONDUCT.md).

## Questions ?

Si vous avez des questions, n'hésitez pas à ouvrir une issue ou à nous contacter via les canaux appropriés.
