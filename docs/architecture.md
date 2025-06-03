# Architecture de conformité SOC 2 pour Kubernetes

## Modèle de responsabilité partagée

```mermaid
graph TD
    subgraph Cloud Provider
        A[Infrastructure physique] --> B[Hyperviseur]
        B --> C[Plan de contrôle Kubernetes]
    end
    
    subgraph Client
        D[Configuration du cluster] --> E[IAM/RBAC]
        D --> F[Réseau]
        D --> G[Chiffrement]
        D --> H[Surveillance]
    end
    
    C <--> |Responsabilité partagée| D
    
    style A fill:#f9f,stroke:#333
    style B fill:#bbf,stroke:#333
    style C fill:#9cf,stroke:#333
    style D fill:#9f9,stroke:#333
    style E fill:#9f9,stroke:#333
    style F fill:#9f9,stroke:#333
    style G fill:#9f9,stroke:#333
    style H fill:#9f9,stroke:#333
```

## Flux de conformité SOC 2

```mermaid
flowchart TD
    A[Politiques de sécurité] --> B[Infrastructure as Code]
    B --> C[Pipeline CI/CD]
    C --> D[Surveillance continue]
    D --> E[Alertes et rapports]
    E --> F[Amélioration continue]
    F --> A
    
    subgraph SOC 2
        direction TB
        G[Sécurité] <--> H[Disponibilité]
        H <--> I[Confidentialité]
        I <--> J[Intégrité]
        J <--> K[Vie privée]
    end
    
    D --> SOC 2
```

## Architecture de référence EKS/GKE

```mermaid
graph LR
    A[Utilisateur] -->|HTTPS| B[Load Balancer]
    B -->|TLS| C[Ingress Controller]
    C --> D[Service A]
    C --> E[Service B]
    D --> F[Pod A1]
    D --> G[Pod A2]
    E --> H[Pod B1]
    
    I[API Server] -->|Audit Logs| J[Elasticsearch]
    K[Kubelet] -->|Métriques| L[Prometheus]
    
    M[IAM] -->|Authentification| I
    N[RBAC] -->|Autorisation| I
    
    style A fill:#9f9,stroke:#333
    style B fill:#bbf,stroke:#333
    style C fill:#9cf,stroke:#333
    style D,E fill:#f9f,stroke:#333
    style F,G,H fill:#f9f,stroke:#333
    style I fill:#f96,stroke:#333
    style J,K,L fill:#9cf,stroke:#333
    style M,N fill:#ff9,stroke:#333
```

## Flux de données de sécurité

```mermaid
sequenceDiagram
    participant C as Conteneur
    participant N as Node
    participant K as API Server
    participant L as Logging
    participant M as Monitoring
    
    C->>N: Logs d'application
    N->>L: Forward logs
    K->>L: Logs d'audit
    N->>M: Métriques système
    C->>M: Métriques applicatives
    L->>M: Corrélation
    M->>A: Alertes de sécurité
    
    Note over L,M: Stockage à long terme
    Note over M: Détection d'anomalies
```

Ces diagrammes peuvent être intégrés directement dans votre documentation Markdown. Ils seront automatiquement rendus dans GitHub et d'autres outils supportant Mermaid.

Pour les utiliser, copiez simplement le bloc de code mermaid dans vos fichiers Markdown.

[Retour à la documentation principale](../README.md)
