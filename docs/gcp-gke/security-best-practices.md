# Bonnes pratiques de sécurité pour Google Kubernetes Engine (GKE)

## Table des matières
1. [Gestion des identités et accès (IAM & Workload Identity)](#gestion-des-identités-et-accès-iam--workload-identity)
2. [Journalisation et audit](#journalisation-et-audit)
3. [Chiffrement des données](#chiffrement-des-données)
4. [Sécurité des workloads et réseau](#sécurité-des-workloads-et-réseau)

## Gestion des identités et accès (IAM & Workload Identity)

### Google Cloud IAM
- Attribuer des rôles GCP minimaux (ex: Kubernetes Engine Admin, Viewer)
- Contrôler l'accès via Organization Policies
- Utiliser les groupes Google Workspace pour une gestion simplifiée des accès

### Workload Identity
- Associer un ServiceAccount Kubernetes à un Service Account GCP
- Éviter de stocker des clés JSON dans les pods
- Toutes les actions GCP apparaissent dans Cloud Audit Logs

### RBAC (Role-Based Access Control) Kubernetes
- Désactiver ABAC
- Créer des ClusterRole et Role limités
- Éviter l'utilisation excessive de cluster-admin

## Journalisation et audit

### Kubernetes Audit Logs
- Activés par défaut sur GKE
- Configurer la rétention et l'export vers Cloud Storage ou BigQuery

### Cloud Audit Logs GCP
- Suivre tous les appels API GCP
- Intégrer avec Security Command Center

### Surveillance et alerting
- Utiliser Security Command Center pour la détection des menaces
- Configurer des alertes Cloud Monitoring
- Exporter les métriques vers un SIEM

## Chiffrement des données

### Chiffrement au repos
- GKE chiffre automatiquement etcd via Spanner/Datastore
- Activer le chiffrement des Secrets avec Cloud KMS CMEK
- Configurer les Persistent Volumes avec CMEK si nécessaire

### Chiffrement en transit
- Trafic pod-to-pod et pod-to-API server chiffré en TLS
- Implémenter mTLS avec Istio pour une sécurité renforcée
- Utiliser Google Managed Certificates pour les Ingress

## Sécurité des workloads et réseau

### Isolation réseau (Network Policies)
- Activer les Network Policies Kubernetes
- Utiliser VPC-native Clusters avec VPC Service Controls
- Restreindre l'accès à l'API server par IP

### Sécurisation des nœuds
- Activer Node Auto-Upgrades et Auto-Repair
- Utiliser des images Container-Optimized OS (cos_containerd)
- Désactiver la console web Dashboard si inutile

### Sécurisation des images de conteneurs
- Utiliser Google Container Registry ou Artifact Registry
- Activer Vulnerability Scanning
- Implémenter Binary Authorization pour le contrôle des déploiements

## Références
- [Google Cloud – GKE Security Best Practices](https://cloud.google.com/kubernetes-engine/docs/concepts/security-overview)
- [Google Cloud – Security Command Center](https://cloud.google.com/security-command-center)
- [CIS GKE Benchmark](https://www.cisecurity.org/benchmark/kubernetes/)

[Retour au sommaire](../../README.md)
