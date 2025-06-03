# Conformité SOC 2 pour environnements Kubernetes (AWS EKS et GCP GKE)

![SOC 2 Compliance](images/soc2-banner.png)

## Table des matières

1. [Introduction](docs/introduction/overview.md)
2. [Présentation des rapports SOC](docs/introduction/soc-reports.md)
3. [Pourquoi choisir SOC 2 pour Kubernetes](docs/introduction/why-soc2-kubernetes.md)
4. [Modèle de responsabilité partagée](docs/introduction/shared-responsibility.md)
5. [Bonnes pratiques pour AWS EKS](docs/aws-eks/security-best-practices.md)
6. [Bonnes pratiques pour GCP GKE](docs/gcp-gke/security-best-practices.md)
7. [Intégration DevSecOps](docs/devsecops/overview.md)
8. [Bibliographie](docs/references/bibliography.md)

## À propos de ce guide

# Documentation SOC 2 pour Kubernetes

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Online-brightgreen)](https://yamify-org.github.io/soc2-kubernetes-docs/)

## Vue d'ensemble

## 📚 Table des matières

- [Fonctionnalités](#-fonctionnalités)
- [Démarrage rapide](#-démarrage-rapide)
- [Structure du projet](#-structure-du-projet)
- [Développement local](#-développement-local)
- [Contribuer](#-contribuer)
- [Licence](#-licence)
- [Contact](#-contact)

## ✨ Fonctionnalités

- Documentation complète sur la conformité SOC 2 pour Kubernetes
- Guides spécifiques pour AWS EKS et Google GKE
- Bonnes pratiques de sécurité et configurations recommandées
- Processus DevSecOps pour la conformité continue
- Documentation claire et structurée
- Support pour les diagrammes Mermaid
- Optimisé pour la recherche et la navigation

## 🚀 Démarrage rapide

### Prérequis

- Ruby >= 2.6.0
- Bundler
- Jekyll

### Installation locale

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/yamify-org/soc-compliance.git
   cd soc-compliance
   ```

2. **Installer les dépendances**
   ```bash
   bundle install
   ```

3. **Démarrer le serveur de développement**
   ```bash
   bundle exec jekyll serve --livereload
   ```

4. **Ouvrir dans le navigateur**
   
   Accédez à [http://localhost:4000](http://localhost:4000) dans votre navigateur.

## 🏗️ Structure du projet

```
.
├── _config.yml          # Configuration Jekyll
├── Gemfile              # Dépendances Ruby
├── README.md            # Ce fichier
├── CONTRIBUTING.md      # Guide de contribution
├── CODE_OF_CONDUCT.md   # Code de conduite
├── CHANGELOG.md         # Journal des modifications
├── LICENSE              # Licence du projet
├── _layouts/            # Modèles de mise en page
├── assets/              # Fichiers statiques
│   ├── css/            # Feuilles de style
│   └── js/             # Fichiers JavaScript
└── docs/                # Documentation
    ├── introduction/    # Introduction à la conformité SOC 2
    ├── aws-eks/        # Documentation spécifique à AWS EKS
    ├── gcp-gke/        # Documentation spécifique à Google GKE
    ├── devsecops/      # Pratiques DevSecOps
    └── references/     # Références et ressources
```

## 💻 Développement local

### Commandes utiles

- `bundle exec jekyll serve` - Démarrer le serveur de développement
- `bundle exec jekyll build` - Construire le site pour la production
- `bundle exec htmlproofer ./_site` - Vérifier les liens cassés

### Structure des documents

Chaque document doit inclure un en-tête YAML (front matter) avec les métadonnées suivantes :

```yaml
---
layout: default
title: Titre de la page
description: Description courte pour le SEO
---
```

## 🤝 Contribuer

Les contributions sont les bienvenues ! Veuillez lire notre [guide de contribution](CONTRIBUTING.md) pour commencer.

1. Fork le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Licence

Distribué sous la licence MIT. Voir `LICENSE` pour plus d'informations.

## Contact

Yamify - [@yamify](https://github.com/yamify-org)  
Projet : [https://github.com/yamify-org/soc-compliance](https://github.com/yamify-org/soc-compliance)

## Remerciements

- [AICPA](https://www.aicpa.org/) pour les critères SOC 2
- [AWS](https://aws.amazon.com/) et [Google Cloud](https://cloud.google.com/) pour leur documentation
- La communauté Kubernetes pour les outils et bonnes pratiques

## Public cible

- Architectes Cloud
- Ingénieurs DevOps/DevSecOps
- Responsables de la sécurité
- Auditeurs IT

## Comment utiliser cette documentation

1. Commencez par la section [Introduction](docs/introduction/overview.md) pour comprendre les concepts clés
2. Consultez les bonnes pratiques spécifiques à votre fournisseur cloud (AWS EKS ou GCP GKE)
3. Implémentez les contrôles de sécurité recommandés
4. Utilisez les modèles et exemples fournis pour votre propre implémentation

## Licence

[À spécifier selon la licence choisie]
