# Guide de sécurité Google GKE pour Yamify

## Configuration recommandée

### 1. Configuration du cluster

```hcl
module "gke" {
  source                     = "terraform-google-modules/kubernetes-engine/google"
  project_id                = var.project_id
  name                      = "yamify-prod"
  region                    = var.region
  zones                     = ["${var.region}-a", "${var.region}-b"]
  network                   = var.network_name
  subnetwork                = var.subnet_name
  ip_range_pods            = var.pods_range_name
  ip_range_services        = var.services_range_name
  
  # Configuration de sécurité
  remove_default_node_pool = true
  enable_private_nodes     = true
  enable_private_endpoint  = true
  master_authorized_networks = [
    {
      cidr_block   = "10.0.0.0/8"
      display_name = "VPC Internal"
    }
  ]
  
  # Configuration des nœuds
  node_pools = [
    {
      name               = "default-node-pool"
      machine_type       = "e2-medium"
      min_count          = 1
      max_count          = 5
      disk_size_gb       = 100
      disk_type          = "pd-ssd"
      auto_repair        = true
      auto_upgrade       = true
      preemptible        = false
      initial_node_count = 2
    }
  ]
}
```

### 2. Sécurité des nœuds

- Activer Shielded Nodes pour une meilleure sécurité
- Utiliser des images de nœud optimisées par Google
- Activer l'auto-réparation et la mise à jour automatique
- Configurer des politiques de sécurité des pods

### 3. Réseau et accès

```hcl
# Exemple de politique d'accès au réseau
resource "google_compute_firewall" "allow_https" {
  name    = "gke-yamify-allow-https"
  network = var.network_name

  allow {
    protocol = "tcp"
    ports    = ["443"]
  }

  source_ranges = ["0.0.0.0/0"]
  target_tags   = ["gke-yamify"]
}
```

## Surveillance et journalisation

1. **Google Cloud Operations Suite**
   - Activer Cloud Logging pour les logs de cluster
   - Configurer Cloud Monitoring pour les métriques
   - Définir des alertes pour les activités suspectes

2. **Security Command Center**
   - Activer la détection des menaces
   - Surveiller les vulnérabilités

3. **Cloud Audit Logs**
   - Activer les logs d'administration
   - Configurer des exports vers BigQuery pour l'analyse

## Conformité SOC 2

### Preuves d'audit

1. **Configuration du cluster**
   - État de configuration Terraform
   - Captures d'écran de la console GCP

2. **Contrôles d'accès**
   - Rôles IAM définis
   - Configuration Workload Identity

3. **Surveillance**
   - Exemples de tableaux de bord
   - Rapports d'incidents de sécurité

## Dépannage

### Problèmes courants

1. **Problèmes d'authentification**
   - Vérifier les comptes de service
   - Vérifier les autorisations IAM

2. **Problèmes de réseau**
   - Vérifier les règles de pare-feu
   - Vérifier les configurations VPC

## Références

- [GKE Security Overview](https://cloud.google.com/kubernetes-engine/docs/concepts/security-overview)
- [GKE Best Practices](https://cloud.google.com/kubernetes-engine/docs/best-practices)
- [CIS GKE Benchmark](https://cloud.google.com/kubernetes-engine/docs/concepts/cis-benchmarks)
