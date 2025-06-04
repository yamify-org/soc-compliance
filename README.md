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

# Recherche sur la conformité SOC pour Yamify

## 📋 Aperçu

Documentation de recherche sur la conformité SOC 2 pour les environnements Kubernetes de Yamify, avec un accent sur les déploiements sur AWS EKS et Google GKE.

## 📊 Matrices de conformité

### [Matrice SOC 2 pour EKS](compliance/eks-soc2-matrix.csv)
- Contrôles spécifiques AWS EKS
- Configuration recommandée Yamify
- Références aux bonnes pratiques AWS

### [Matrice SOC 2 pour GKE](compliance/gke-soc2-matrix.csv)
- Contrôles spécifiques Google GKE
- Configuration recommandée Yamify
- Références aux bonnes pratiques GCP

## 📂 Structure

```
.
├── compliance/    # Matrices de conformité
├── docs/          # Documentation détaillée
│   ├── eks/      # Documentation EKS
│   ├── gke/      # Documentation GKE
│   └── shared/   # Documentation commune
```

## 🔍 Utilisation

1. Consultez les matrices de conformité pour votre cloud
2. Suivez les recommandations Yamify
3. Implémentez les contrôles de sécurité nécessaires
4. Utilisez la documentation pour l'audit

## 📞 Contact

Pour toute question, ouvrez une issue dans ce dépôt.


## 🤝 Contribuer

Les contributions sont les bienvenues ! Veuillez lire notre [guide de contribution](CONTRIBUTING.md) pour commencer.

1. Fork le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Contact

Yamify - [@yamify](https://github.com/yamify-org)  
Projet : [https://github.com/yamify-org/soc-compliance](https://github.com/yamify-org/soc-compliance)

## Remerciements

- [AICPA](https://www.aicpa.org/) pour les critères SOC 2
- [AWS](https://aws.amazon.com/) et [Google Cloud](https://cloud.google.com/) pour leur documentation
- La communauté Kubernetes pour les outils et bonnes pratiques
