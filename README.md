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

Cette documentation fournit un guide complet pour la mise en conformité SOC 2 Type II des environnements Kubernetes sur AWS EKS et Google GKE. Elle couvre les aspects techniques, organisationnels et procéduraux nécessaires pour répondre aux exigences SOC 2.

## Fonctionnalités

- 🛡️ Couverture complète des critères SOC 2 (sécurité, disponibilité, confidentialité)
- ☁️ Guides spécifiques pour AWS EKS et Google GKE
- 🔄 Approche DevSecOps pour une conformité continue
- 📊 Diagrammes d'architecture et flux de données
- 🔗 Références complètes vers la documentation officielle

## Navigation rapide

- [Introduction](docs/introduction/overview.md)
- [Présentation des rapports SOC](docs/introduction/soc-reports.md)
- [Bonnes pratiques AWS EKS](docs/aws-eks/security-best-practices.md)
- [Bonnes pratiques GCP GKE](docs/gcp-gke/security-best-practices.md)
- [Intégration DevSecOps](docs/devsecops/overview.md)
- [Architecture](docs/architecture.md)
- [Bibliographie](docs/references/bibliography.md)

## Comment utiliser cette documentation

### En ligne

La documentation est disponible en ligne à l'adresse :  
https://yamify-org.github.io/soc2-kubernetes-docs/

### En local

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/yamify-org/soc2-kubernetes-docs.git
   cd soc2-kubernetes-docs
   ```

2. Pour visualiser localement avec Jekyll (nécessite Ruby) :
   ```bash
   bundle install
   bundle exec jekyll serve
   ```
   Puis ouvrez http://localhost:4000 dans votre navigateur.

## Contribution

Les contributions sont les bienvenues ! Voici comment contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Licence

Distribué sous la licence MIT. Voir `LICENSE` pour plus d'informations.

## Contact

Yamify - [@yamify](https://github.com/yamify-org)  
Projet : [https://github.com/yamify-org/soc2-kubernetes-docs](https://github.com/yamify-org/soc2-kubernetes-docs)

## Remerciements

- [AICPA](https://www.aicpa.org/) pour les critères SOC 2
- [AWS](https://aws.amazon.com/) et [Google Cloud](https://cloud.google.com/) pour leur documentation
- La communauté Kubernetes pour les outils et bonnes pratiques

## Public cible

- Architectes Cloud
- Ingénieurs DevOps/DevSecOps
- Responsables de la sécurité
- Auditeurs IT
- Responsables de la conformité

## Comment utiliser cette documentation

1. Commencez par la section [Introduction](docs/introduction/overview.md) pour comprendre les concepts clés
2. Consultez les bonnes pratiques spécifiques à votre fournisseur cloud (AWS EKS ou GCP GKE)
3. Implémentez les contrôles de sécurité recommandés
4. Utilisez les modèles et exemples fournis pour votre propre implémentation

## Licence

[À spécifier selon la licence choisie]
