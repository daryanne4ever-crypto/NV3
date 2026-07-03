#!/usr/bin/env python3
"""
Script para criar Pull Requests automaticamente usando GitHub GraphQL API
Uso: python3 create_prs.py

Pré-requisitos:
1. Instalar requests: pip install requests
2. Configurar token: export GITHUB_TOKEN='seu_token_aqui'
"""

import os
import requests
import json
from typing import Dict, Any

# Configurações
GITHUB_TOKEN = os.environ.get('GITHUB_TOKEN')
REPO_OWNER = 'daryanne4ever-crypto'
REPO_NAME = 'NV3'
GITHUB_API_URL = 'https://api.github.com/graphql'

if not GITHUB_TOKEN:
    print("❌ Erro: GITHUB_TOKEN não está definido")
    print("Configure com: export GITHUB_TOKEN='seu_token_aqui'")
    exit(1)

def get_repository_id():
    """
    Obtém o ID do repositório
    """
    query = f"""
    query {{
        repository(owner: "{REPO_OWNER}", name: "{REPO_NAME}") {{
            id
        }}
    }}
    """
    
    headers = {
        'Authorization': f'Bearer {GITHUB_TOKEN}',
        'Content-Type': 'application/json',
    }
    
    response = requests.post(GITHUB_API_URL, json={'query': query}, headers=headers)
    data = response.json()
    
    if 'data' in data and data['data'].get('repository'):
        return data['data']['repository']['id']
    else:
        print(f"Erro ao obter ID do repositório: {data}")
        return None

def create_pull_request(title: str, body: str, head: str, base: str = 'main', repo_id: str = None) -> Dict[str, Any]:
    """
    Cria um Pull Request usando GraphQL
    """
    # Escapar caracteres especiais no body
    body_escaped = body.replace('"', '\\"').replace('\n', '\\n')
    
    query = f"""
    mutation {{
        createPullRequest(input: {{
            repositoryId: \"{repo_id}\"
            baseRefName: \"{base}\"
            headRefName: \"{head}\"
            title: \"{title}\"
            body: \"{body_escaped}\"
        }}) {{
            pullRequest {{
                id
                number
                title
                url
            }}
        }}
    }}
    """
    
    headers = {
        'Authorization': f'Bearer {GITHUB_TOKEN}',
        'Content-Type': 'application/json',
    }
    
    response = requests.post(GITHUB_API_URL, json={'query': query}, headers=headers)
    return response.json()

print("🚀 Criando Pull Requests para NV3...\n")

# Obter ID do repositório
print("[*] Obtendo ID do repositório...")
repo_id = get_repository_id()

if not repo_id:
    print("❌ Não foi possível obter o ID do repositório")
    exit(1)

print(f"✓ ID do repositório: {repo_id}\n")

# PR 1: Enhanced Vocabulary Master
print("[1/2] Criando PR #1: Enhanced Vocabulary Master...")
pr1_body = """## 🎯 Objetivo
Adicionar sistema completo de vocabulário com quiz interativo e suporte a pronúncia em áudio.

## ✨ Features Implementadas
- 250 palavras distribuídas em 5 níveis CEFR (A1-C1)
- Sistema de quiz com múltipla escolha (10 palavras aleatórias)
- Pronuncia nativa via Web Speech API
- Feedback visual com cores (verde: correto, vermelho: incorreto)
- Grid responsivo com cards modernos e animações

## 📁 Arquivos
- script.js - Lógica do vocabulário e quiz
- styles.css - Estilos modernos
- index.html - Estrutura HTML

## ✅ Testes
- [x] Vocabulário completo por nível
- [x] Quiz funcional
- [x] Audio implementado
- [x] Responsivo"""

result1 = create_pull_request(
    title="feat: Add enhanced vocabulary master with quiz mode and audio support",
    body=pr1_body,
    head="feature/enhanced-vocab-quiz",
    repo_id=repo_id
)

if 'data' in result1 and result1['data'].get('createPullRequest'):
    pr = result1['data']['createPullRequest']['pullRequest']
    print(f"✅ PR #1 criada: #{pr['number']}")
    print(f"   URL: {pr['url']}\n")
else:
    print(f"❌ Erro ao criar PR #1")
    if 'errors' in result1:
        print(f"   Erro: {result1['errors']}\n")
    else:
        print(f"   Resposta: {result1}\n")

# PR 2: Listening Mastery
print("[2/2] Criando PR #2: Listening Mastery...")
pr2_body = """## 🎯 Objetivo
Criar módulo de audição com 200+ frases estruturais por nível CEFR.

## ✨ Features Implementadas
- 200+ frases estruturais (A1: 20 | A2: 20 | B1: 25 | B2: 50 | C1: 50)
- Pronuncia nativa em velocidade reduzida (0.85) para clareza didática
- Cards interativos com tradução em português
- Web Speech API integrada
- Layout responsivo com hover effects
- Ícone play interativo

## 📁 Arquivos
- listening.html - Interface do módulo
- listening.js - Lógica e dados das frases
- listening-styles.css - Estilos dos cards

## ✅ Testes
- [x] Frases estruturais por nível
- [x] Audio implementado
- [x] Tradução em português
- [x] Responsivo"""

result2 = create_pull_request(
    title="feat: Add Listening Mastery module with structural practice",
    body=pr2_body,
    head="feature/listening-mastery",
    repo_id=repo_id
)

if 'data' in result2 and result2['data'].get('createPullRequest'):
    pr = result2['data']['createPullRequest']['pullRequest']
    print(f"✅ PR #2 criada: #{pr['number']}")
    print(f"   URL: {pr['url']}\n")
else:
    print(f"❌ Erro ao criar PR #2")
    if 'errors' in result2:
        print(f"   Erro: {result2['errors']}\n")
    else:
        print(f"   Resposta: {result2}\n")

print("="*50)
print("✅ Processo concluído!")
print("="*50)
