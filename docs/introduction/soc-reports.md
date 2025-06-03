# Présentation des rapports SOC

## Table des matières
1. [SOC 1 : Audit des contrôles financiers](#soc-1--audit-des-contrôles-financiers)
2. [SOC 2 : Audit des critères de confiance](#soc-2--audit-des-critères-de-confiance)
3. [SOC 3 : Rapport public simplifié](#soc-3--rapport-public-simplifié)
4. [Comparaison des différents rapports SOC](#comparaison-des-différents-rapports-soc)

## SOC 1 : Audit des contrôles financiers

### Objet
Contrôles internes liés au reporting financier (Internal Control over Financial Reporting – ICFR).

### Public cible
- Auditeurs externes
- Entités clientes qui s'appuient sur un prestataire de service pour la tenue de leurs comptes

### Limitation
N'évalue pas les contrôles de sécurité informatique ou de confidentialité ; se concentre uniquement sur la fiabilité des rapports financiers.

### Source
AICPA – SOC 1®: SOC for Service Organizations – ICFR

## SOC 2 : Audit des critères de confiance

### Objet
Vérification des Trust Services Criteria définis par l'AICPA :
- **Sécurité** : Protection contre les accès non autorisés
- **Disponibilité** : Garantie de continuité de service
- **Intégrité des traitements** : Exactitude et complétude des opérations
- **Confidentialité** : Prévention de la divulgation non autorisée
- **Vie privée** : Protection des données personnelles

### Types de rapports SOC 2
- **Type I** : Présentation de la conception des contrôles à un instant T
- **Type II** : Évaluation de l'efficacité opérationnelle des contrôles sur une période (généralement 6 à 12 mois)

### Public cible
- Clients
- Partenaires
- Régulateurs cherchant à s'assurer de la protection des données et de la fiabilité du système

### Avantage dans le cloud
Couverture spécifique de la sécurité des données client, de la disponibilité des services et de la confidentialité, ce qui en fait le standard privilégié pour les plateformes Kubernetes manipulant des données sensibles.

### Source
AICPA – SOC 2®/SOC 3® – Trust Services Criteria

## SOC 3 : Rapport public simplifié

### Objet
Présentation succincte des mêmes critères que SOC 2, mais sans divulguer les détails techniques ni descriptions précises des contrôles.

### Public cible
- Grand public
- Prospects
- Clients souhaitant une vue d'ensemble « macro » de la conformité du prestataire

### Limitation
Pas de preuves détaillées, donc insuffisant pour un audit interne approfondi.

### Source
AICPA – SOC 3® – General Use Report

## Comparaison des différents rapports SOC

| Critère | SOC 1 | SOC 2 | SOC 3 |
|---------|-------|-------|-------|
| **Objectif** | Contrôles financiers | Sécurité, disponibilité, confidentialité | Vue d'ensemble publique |
| **Niveau de détail** | Élevé | Très élevé | Bas |
| **Public cible** | Auditeurs financiers | Clients techniques, auditeurs | Grand public |
| **Utilité pour Kubernetes** | Faible | Élevée | Faible |
| **Type I/II** | Oui | Oui | Non |

[Retour au sommaire](../../README.md)
