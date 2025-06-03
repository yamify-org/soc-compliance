# Introduction à la conformité SOC 2 pour Kubernetes

## Contexte

La protection des données clients, la fiabilité des services et la capacité d'audit interne sont devenues des impératifs stratégiques pour toute organisation hébergeant des applications dans le cloud. Dans ce contexte, les rapports SOC (System and Organization Controls), et en particulier SOC 2, constituent une référence internationale pour attester de la mise en place de contrôles robustes sur la sécurité, la disponibilité et la confidentialité des systèmes d'information.

## Objectifs de ce guide

Ce document vise à fournir un guide complet et structuré, centré sur les enjeux SOC 2 Type II, pour les environnements Kubernetes déployés sur :

- **Amazon EKS** (Elastic Kubernetes Service)
- **Google Kubernetes Engine (GKE)**

## Objectifs spécifiques

1. Expliquer les différences entre SOC 1, SOC 2 et SOC 3
2. Justifier le choix de SOC 2 pour un environnement cloud
3. Décrire les contrôles et bonnes pratiques pour EKS et GKE
4. Présenter une approche DevSecOps pour maintenir la conformité SOC 2
5. Fournir une bibliographie complète des sources utilisées

## Structure du document

1. [Présentation des rapports SOC](soc-reports.md)
2. [Pourquoi choisir SOC 2 pour Kubernetes](why-soc2-kubernetes.md)
3. [Modèle de responsabilité partagée](shared-responsibility.md)
4. [Bonnes pratiques pour AWS EKS](../../aws-eks/security-best-practices.md)
5. [Bonnes pratiques pour GCP GKE](../../gcp-gke/security-best-practices.md)
6. [Intégration DevSecOps](../../devsecops/overview.md)
7. [Bibliographie](../../references/bibliography.md)

## Public cible

- Architectes Cloud
- Ingénieurs DevOps/DevSecOps
- Responsables de la sécurité
- Auditeurs IT
- Responsables de la conformité
