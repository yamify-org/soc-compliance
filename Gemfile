source "https://rubygems.org"

# Groupe pour les dépendances Jekyll de base
group :jekyll_plugins do
  # Utilisez la gem github-pages pour la compatibilité avec GitHub Pages
  gem "github-pages", "~> 228", group: :jekyll_plugins
  
  # Plugins supplémentaires
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-feed"
  gem "jekyll-relative-links"
  gem "jekyll-mermaid"
  gem "kramdown-parser-gfm"
  gem "jekyll-redirect-from"  # Pour la gestion des redirections
end

# Groupe pour le développement
group :development do
  gem "webrick"
  gem "html-proofer"
  gem "jekyll-watch"
end

# Spécification de la version de Ruby
ruby ">= 2.6.0"

# Windows ne contient pas les fichiers zoneinfo, donc on inclut tzinfo-data
platforms :mingw, :mswin, :x64_mingw, :jruby do
  gem 'tzinfo', '~> 1.2'
  gem 'tzinfo-data', '>= 1.2021.5'
  gem 'wdm', '~> 0.1.0'
end
