# Modèle de responsabilité partagée et attestations SOC 2

## Vue d'ensemble

Le modèle de responsabilité partagée est un concept clé dans le cloud computing qui définit les responsabilités respectives du fournisseur de cloud et du client en matière de sécurité. Cette distinction est essentielle pour la conformité SOC 2.

## AWS Shared Responsibility Model

### Sécurité du cloud (couvert par AWS)
- Infrastructure physique (centres de données, réseaux)
- Plan de contrôle Kubernetes d'EKS (master nodes, etcd)
- Sécurité de l'hyperviseur et du noyau hébergeant les nœuds de contrôle
- Services managés (EKS, Amazon S3, etc.) déjà certifiés SOC 2, PCI DSS, ISO 27001, FedRAMP, etc.

### Sécurité dans le cloud (à la charge du client)
- Configuration des clusters (RBAC Kubernetes, Network Policies)
- Gestion des identités et accès (IAM & IRSA)
- Chiffrement des données au repos (Secrets, volumes EBS chiffrés)
- Surveillance, journalisation et audit (CloudTrail, CloudWatch Logs, GuardDuty)
- Sécurisation des conteneurs (scan d'images, mise à jour régulière)

**Source** : [AWS Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/)

## Google Cloud Shared Responsibility Model

### Sécurité du cloud (couvert par Google)
- Infrastructure mondiale de Google (centres de données, sous-réseaux)
- Plan de contrôle GKE (maîtres Kubernetes managés, Spanner/etcd)
- Plateformes managées (BigQuery, GCS, etc.) possédant déjà des attestations SOC 2, ISO 27001, etc.

### Sécurité dans le cloud (à la charge du client)
- Configuration des clusters (RBAC, Network Policies, Kubernetes Engine Admin)
- Gestion des accès via IAM et Workload Identity
- Chiffrement géré par le client (CMEK pour GCE et volumes persistants, encryption des Secrets Kubernetes)
- Surveillance avec Cloud Logging, Cloud Audit Logs, Security Command Center
- Sécurisation des images (Container Analysis, scan d'images, Signature d'images)

**Source** : [Google Cloud Shared Responsibility Model](https://cloud.google.com/security/shared-responsibility)

## Implications pour la conformité SOC 2

### Ce qui est couvert par les attestations du fournisseur
- Sécurité physique des centres de données
- Disponibilité de l'infrastructure sous-jacente
- Sécurité de l'hyperviseur et du matériel

### Ce qui reste à la charge du client
- Configuration sécurisée des services cloud utilisés
- Protection des données et des accès
- Surveillance et réponse aux incidents
- Conformité des applications et données

## Bonnes pratiques pour gérer la responsabilité partagée

1. **Documentation claire**
   - Maintenir une matrice RACI pour les contrôles SOC 2
   - Documenter les responsabilités de chaque équipe

2. **Automatisation**
   - Automatiser les contrôles de sécurité
   - Mettre en place des garde-fous pour éviter les configurations non conformes

3. **Surveillance continue**
   - Implémenter une surveillance continue de la configuration
   - Configurer des alertes pour les dérives de configuration

## Références
- [AWS – AWS Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/)
- [Google Cloud – Shared Responsibility in the Cloud](https://cloud.google.com/security/shared-responsibility)
- [AICPA – SOC 2 Trust Services Criteria](https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/aicpasoc2report.html)

[Retour au sommaire](../../README.md)
