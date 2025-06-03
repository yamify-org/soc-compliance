# Bonnes pratiques de sécurité pour Amazon EKS (SOC 2)

## Table des matières
1. [Gestion des identités et accès (IAM & IRSA)](#gestion-des-identités-et-accès-iam--irsa)
2. [Journalisation et audit](#journalisation-et-audit)
3. [Chiffrement des données](#chiffrement-des-données)
4. [Sécurité des workloads et réseau](#sécurité-des-workloads-et-réseau)

## Gestion des identités et accès (IAM & IRSA)

### IAM Roles for Service Accounts (IRSA)
- Associer un ServiceAccount Kubernetes à un rôle IAM AWS
- Utiliser un fournisseur OIDC lié à EKS pour émettre des jetons de service
- Créer des politiques IAM granulaires (ex: accès en lecture seule à un bucket S3)

### Configuration de la ConfigMap aws-auth
- Mapper les IAM Users/Groups/Roles aux rôles Kubernetes
- Appliquer le principe du moindre privilège
- Limiter l'accès "admin" aux seuls opérateurs nécessaires

### RBAC (Role-Based Access Control) Kubernetes
- Désactiver l'ABAC (Attribute-Based Access Control) obsolète
- Créer des Roles ou ClusterRoles précis
- Exemples de contrôles :
  - Limiter la création/modification des Secrets
  - Restreindre les modifications de NetworkPolicy

## Journalisation et audit

### Control plane logs
- Activer l'export des logs vers CloudWatch Logs
- Configurer une stratégie de rétention (12 mois minimum pour SOC 2)

### AWS CloudTrail
- Capturer tous les appels API AWS liés au cluster
- Analyser via CloudTrail Insights ou exporter vers un SIEM

### Surveillance et alerting
- Mettre en place Amazon GuardDuty
- Utiliser CloudWatch Alarms pour les métriques critiques
- Intégrer un SIEM pour corréler les logs

## Chiffrement des données

### Chiffrement au repos
- etcd : Chiffrement automatique avec CMK AWS KMS
- Kubernetes Secrets : Activer l'enveloppe encryption avec CMK KMS client
- Volumes EBS/EFS : Toujours créer des volumes persistants chiffrés

### Chiffrement en transit
- API server Kubernetes : TLS natif
- Helm charts, Ingress et Load Balancers : Forcer TLS/HTTPS
- mTLS pour les communications intra-cluster (optionnel)

## Sécurité des workloads et réseau

### Isolation réseau (Network Policies)
- Installer un plugin CNI supportant NetworkPolicy (Calico, Cilium)
- Créer des NetworkPolicies pour :
  - Empêcher les accès directs non autorisés à l'API server
  - Restreindre la communication inter-Pods

### Sécurisation des nœuds
- Utiliser les Amazon EKS optimized AMI
- Appliquer régulièrement les correctifs de sécurité
- Désactiver les conteneurs privilégiés ou en mode root

### Sécurisation des images de conteneurs
- Héberger les images dans Amazon ECR avec scan de vulnérabilités
- Adopter l'image signing
- Intégrer un scanner (Trivy, Clair) dans le pipeline CI/CD

## Références
- [AWS – Amazon EKS Security Best Practices](https://docs.aws.amazon.com/eks/latest/userguide/security.html)
- [AWS – AWS Well-Architected Framework – Security Pillar](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html)
- [CIS Amazon EKS Benchmark](https://www.cisecurity.org/benchmark/amazon_eks/)

[Retour au sommaire](../../README.md)
