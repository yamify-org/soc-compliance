---
layout: default
title: Documentation SOC 2 pour Kubernetes
description: Guide complet pour la conformité SOC 2 sur EKS et GKE
---

<div class="hero">
  <div class="container">
    <h1>Documentation SOC 2 pour Kubernetes</h1>
    <p class="lead">Guide complet pour la conformité SOC 2 des environnements Kubernetes sur AWS EKS et Google GKE</p>
    <div class="hero-cta">
      <a href="#getting-started" class="btn btn-primary btn-lg">Commencer</a>
      <a href="https://github.com/yamify-org/soc-compliance" class="btn btn-outline-secondary btn-lg" target="_blank">
        <i class="fab fa-github me-2"></i>Voir sur GitHub
      </a>
    </div>
  </div>
</div>

<div class="container mt-5">
  <section id="getting-started" class="mb-5">
    <h2 class="mb-4">Pour commencer</h2>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="h5 card-title">Introduction</h3>
            <p class="card-text">Découvrez les bases de la conformité SOC 2 et comment elle s'applique à Kubernetes.</p>
            <a href="/docs/introduction/overview" class="btn btn-sm btn-outline-primary">En savoir plus</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="h5 card-title">Rapports SOC</h3>
            <p>Comprendre les différents types de rapports SOC et leurs exigences.</p>
            <a href="/docs/introduction/soc-reports" class="btn btn-sm btn-outline-primary">En savoir plus</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="h5 card-title">Responsabilité partagée</h3>
            <p>Modèle de responsabilité partagée dans le cloud pour la conformité SOC 2.</p>
            <a href="/docs/introduction/shared-responsibility" class="btn btn-sm btn-outline-primary">En savoir plus</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-5">
    <h2 class="mb-4">Guides par plateforme</h2>
    <div class="row g-4">
      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <div class="d-flex align-items-center mb-3">
              <img src="https://img.icons8.com/color/48/000000/amazon-web-services.png" alt="AWS" class="me-3" width="40" height="40">
              <h3 class="h4 mb-0">AWS EKS</h3>
            </div>
            <ul class="list-unstyled">
              <li class="mb-2">
                <i class="fas fa-check-circle text-success me-2"></i>
                <a href="/docs/aws-eks/security-best-practices">Bonnes pratiques de sécurité</a>
              </li>
              <li class="mb-2">
                <i class="fas fa-cog text-primary me-2"></i>
                <a href="/docs/aws-eks/configuration">Configuration recommandée</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <div class="d-flex align-items-center mb-3">
              <img src="https://img.icons8.com/color/48/000000/google-cloud.png" alt="Google Cloud" class="me-3" width="40" height="40">
              <h3 class="h4 mb-0">Google GKE</h3>
            </div>
            <ul class="list-unstyled">
              <li class="mb-2">
                <i class="fas fa-check-circle text-success me-2"></i>
                <a href="/docs/gcp-gke/security-best-practices">Bonnes pratiques de sécurité</a>
              </li>
              <li class="mb-2">
                <i class="fas fa-cog text-primary me-2"></i>
                <a href="/docs/gcp-gke/configuration">Configuration recommandée</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-5">
    <h2 class="mb-4">DevSecOps</h2>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="h5 card-title">Vue d'ensemble</h3>
            <p class="card-text">Intégrez la sécurité dans votre pipeline CI/CD pour une conformité continue.</p>
            <a href="/docs/devsecops/overview" class="btn btn-sm btn-outline-primary">En savoir plus</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="h5 card-title">Surveillance</h3>
            <p>Mettez en place une surveillance efficace pour détecter les problèmes de sécurité.</p>
            <a href="/docs/devsecops/monitoring" class="btn btn-sm btn-outline-primary">En savoir plus</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="h5 card-title">Automatisation</h3>
            <p>Automatisez les contrôles de conformité pour gagner du temps et réduire les erreurs.</p>
            <a href="/docs/devsecops/automation" class="btn btn-sm btn-outline-primary">En savoir plus</a>
          </div>
        </div>
      </div>
    </div>
  </section>

## Mermaid Example

```mermaid
graph TD
    A[Client] -->|HTTPS| B(Load Balancer)
    B --> C[Pods Yamify]
    C --> D[(Base de données)]
    
    style A fill:#f9f,stroke:#333
    style B fill:#bbf,stroke:#333
    style C fill:#9f9,stroke:#333
    style D fill:#f96,stroke:#333
```
          <div class="card-body text-center">
            <i class="fas fa-project-diagram fa-2x mb-3 text-primary"></i>
            <h3 class="h5 card-title">Architecture</h3>
            <p class="card-text small">Diagrammes d'architecture de référence</p>
            <a href="/docs/architecture" class="stretched-link"></a>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-6">
        <div class="card h-100">
          <div class="card-body text-center">
            <i class="fas fa-book fa-2x mb-3 text-primary"></i>
            <h3 class="h5 card-title">Bibliographie</h3>
            <p class="card-text small">Références et ressources complémentaires</p>
            <a href="/docs/references/bibliography" class="stretched-link"></a>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-6">
        <div class="card h-100">
          <div class="card-body text-center">
            <i class="fas fa-book-reader fa-2x mb-3 text-primary"></i>
            <h3 class="h5 card-title">Glossaire</h3>
            <p class="card-text small">Définitions des termes techniques</p>
            <a href="/docs/references/glossary" class="stretched-link"></a>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-6">
        <div class="card h-100">
          <div class="card-body text-center">
            <i class="fas fa-question-circle fa-2x mb-3 text-primary"></i>
            <h3 class="h5 card-title">FAQ</h3>
            <p class="card-text small">Questions fréquemment posées</p>
            <a href="/docs/references/faq" class="stretched-link"></a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="row">
    <div class="col-md-6 mb-4">
      <div class="card h-100">
        <div class="card-body">
          <h3 class="h5 card-title">Besoin d'aide ?</h3>
          <p class="card-text">Consultez notre FAQ ou ouvrez une issue sur GitHub pour obtenir de l'aide.</p>
          <div class="d-flex gap-2">
            <a href="/docs/references/faq" class="btn btn-outline-primary btn-sm">Voir la FAQ</a>
            <a href="https://github.com/yamify-org/soc-compliance/issues/new" class="btn btn-outline-secondary btn-sm" target="_blank">
              <i class="fab fa-github me-1"></i>Ouvrir une issue
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 mb-4">
      <div class="card h-100 bg-light">
        <div class="card-body">
          <h3 class="h5 card-title">Contribuer</h3>
          <p class="card-text">Les contributions sont les bienvenues ! Aidez-nous à améliorer cette documentation.</p>
          <a href="/CONTRIBUTING" class="btn btn-primary btn-sm">
            <i class="fas fa-code-branch me-1"></i>Comment contribuer
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.hero {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 4rem 0;
  margin-bottom: 3rem;
  border-bottom: 1px solid #dee2e6;
}

.hero h1 {
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero .lead {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #495057;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.card {
  border: 1px solid rgba(0,0,0,.125);
  border-radius: 0.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  height: 100%;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,.15);
}

.card-body {
  padding: 1.5rem;
}

.card-title {
  color: #212529;
  font-weight: 600;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.btn-primary {
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.btn-outline-primary {
  color: #0d6efd;
  border-color: #0d6efd;
}

.btn-outline-primary:hover {
  background-color: #0d6efd;
  color: white;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero {
    padding: 3rem 0;
    text-align: center;
  }
  
  .hero-cta {
    justify-content: center;
  }
  
  .hero .lead {
    font-size: 1.25rem;
  }
  
  .card {
    margin-bottom: 1rem;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #1a1a1a;
    color: #f8f9fa;
  }
  
  .card {
    background-color: #2d2d2d;
    border-color: #444;
  }
  
  .card-title, .card-text {
    color: #f8f9fa;
  }
  
  .hero {
    background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
    color: #f8f9fa;
  }
  
  .hero .lead {
    color: #dee2e6;
  }
}
</style>
