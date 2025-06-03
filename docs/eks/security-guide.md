# Guide de sécurité AWS EKS pour Yamify

## Configuration recommandée

### 1. Configuration du cluster

```hcl
module "eks" {
  source          = "terraform-aws-modules/eks/aws"
  cluster_name    = "yamify-prod"
  cluster_version = "1.24"
  
  vpc_id          = module.vpc.vpc_id
  subnets         = module.vpc.private_subnets
  
  # Enable EKS control plane logging
  cluster_enabled_log_types = ["api", "audit", "authenticator", "controllerManager", "scheduler"]
  
  # Enable encryption of Kubernetes secrets using KMS
  cluster_encryption_config = [{
    provider_key_arn = aws_kms_key.eks.arn
    resources        = ["secrets"]
  }]
  
  # Enable private endpoint
  cluster_endpoint_private_access = true
  cluster_endpoint_public_access  = true
}
```

### 2. Sécurité des nœuds

- Utiliser des groupes de nœuds managés (Managed Node Groups)
- Activer le chiffrement des volumes EBS
- Appliquer des politiques de sécurité CIS pour les nœuds
- Mettre à jour régulièrement les versions d'AMI

### 3. Réseau

```hcl
# Exemple de politique réseau restrictive
resource "aws_security_group_rule" "allow_https" {
  type              = "ingress"
  from_port         = 443
  to_port           = 443
  protocol          = "tcp"
  cidr_blocks      = ["0.0.0.0/0"]
  security_group_id = module.eks.cluster_primary_security_group_id
}
```

## Surveillance et journalisation

1. **Amazon CloudWatch**
   - Activer les logs de contrôle d'API
   - Configurer des tableaux de bord pour surveiller les métriques clés

2. **AWS GuardDuty**
   - Activer la protection contre les menaces
   - Configurer des alertes pour les activités suspectes

3. **AWS Config**
   - Activer les règles de conformité EKS
   - Surveiller les changements de configuration

## Conformité SOC 2

### Preuves d'audit

1. **Configuration du cluster**
   - Capture d'écran des paramètres de chiffrement
   - Configuration Terraform appliquée

2. **Contrôles d'accès**
   - Liste des utilisateurs IAM avec accès au cluster
   - Rôles RBAC définis

3. **Surveillance**
   - Exemples d'alertes configurées
   - Rapports de conformité AWS Config

## Dépannage

### Problèmes courants

1. **Erreurs d'autorisation**
   - Vérifier les politiques IAM
   - Vérifier les rôles RBAC Kubernetes

2. **Problèmes de réseau**
   - Vérifier les groupes de sécurité
   - Vérifier les tables de routage

## Références

- [AWS EKS Best Practices](https://docs.aws.amazon.com/eks/latest/userguide/best-practices.html)
- [CIS AWS Foundations Benchmark](https://d1.awsstatic.com/whitepapers/compliance/CIS_Amazon_Elastic_Kubernetes_Service_Benchmark.pdf)
- [EKS Security Documentation](https://aws.amazon.com/eks/features/security/)
