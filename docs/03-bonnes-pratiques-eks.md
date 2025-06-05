# Bonnes pratiques pour AWS EKS

## Gestion des identités et accès
- IAM Roles for Service Accounts (IRSA)
- Configuration de la ConfigMap aws-auth
- RBAC Kubernetes avec le principe du moindre privilège

## Journalisation et audit
- Activation des logs du plan de contrôle
- Configuration d'AWS CloudTrail
- Mise en place d'alertes de sécurité

## Chiffrement des données
- Chiffrement au repos avec AWS KMS
- Chiffrement en transit avec TLS
- Gestion des clés de chiffrement

## Sécurité des workloads
- Mise en place de Network Policies
- Hardening des nœuds worker
- Analyse des images de conteneurs
- Sécurisation des registres ECR

## 🔄 Navigation

[← Responsabilités partagées](./02-responsabilites-partagees.md) | [Bonnes pratiques GKE →](./04-bonnes-pratiques-gke.md)
