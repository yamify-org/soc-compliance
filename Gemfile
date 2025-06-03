source "https://rubygems.org"

# Gemes principaux
gem "jekyll", "~> 4.3.0"

# Thème Jekyll
gem "jekyll-theme-cayman"

# Plugins Jekyll
group :jekyll_plugins do
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-relative-links"
  gem "jekyll-mermaid"
  gem "jekyll-redirect-from"
end

# Développement et test
group :development, :test do
  gem "html-proofer"
  gem "rake"
  gem "pry"
  gem "pry-byebug"
end

# Support de Windows ne nécessite pas de gemmes tierces.
gem "wdm", "~> 0.1.0", :platforms => [:mswin, :mingw]
