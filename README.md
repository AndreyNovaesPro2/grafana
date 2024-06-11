
# Título do Projeto

Sistema Integrado com Backend, Frontend, Serviço de Raspagem de dados, Monitoramento e testes de carga na API.

## Introdução

Este projeto oferece um ecossistema completo para aplicações web, incluindo um serviço de backend robusto, uma interface de usuário interativa no frontend, um serviço dedicado de raspagem de dados e um sistema de monitoramento eficiente. Projetado para ser escalável e eficiente, o projeto utiliza contêineres Docker, facilitando a implantação e o gerenciamento de cada serviço.

## Conteúdos

- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Monitoramento e Alertas](#monitoramento-e-alertas)
- [Dependências](#dependências)

## Instalação

Para colocar o projeto em funcionamento na sua máquina local:

1. Clone o repositório para sua máquina local, garanta que o git está instalado em sua máquina e execute o seguinte comando:

```sh
git clone https://github.com/AndreyNovaes/Scrapper_Node_React_Prometheus_Grafana_RedisCache_PgSQLDB_Docker.git
```

2. Assegure-se de que o Docker e o Docker Compose estão instalados no seu sistema, utilize as versões mais recentes disponíveis, seguindo o script recente "docker compose", em caso da utilização de versões antigas, recomenda-se a mudança para "docker-compose". Recomenda-se a utilização do Docker Desktop para Windows e Mac, e do Docker CE para Linux, rode o seguinte comando para iniciar o projeto:

```sh
docker compose up
```
 3. A raspagem de dados estará acontecendo por trás dos serviços, para visualizar os dados raspados, acesse o serviço de backend em `http://localhost:3001/products` e veja os dados raspados, armaenados no banco de dados PostgreSQL.


## Como Usar

Após a implantação bem-sucedida usando o Docker Compose, os serviços estarão disponíveis e podem ser acessados conforme descrito abaixo:

### Serviços e Portas

- **Frontend**: A interface do usuário está disponível em `http://localhost:4444`. Esse serviço é construído a partir do diretório `frontend_service` e depende do serviço de backend para funcionar corretamente.

- **Scraper**: Responsável pela raspagem de dados de e-commerces, este serviço utiliza Python e o framework Scrapy. Ele depende diretamente do serviço PostgreSQL para armazenar os dados raspados. Ele funciona de maneira assíncrona, a raspagem acontece enquanto outros serviços estão no ar.

- **Backend**: Fornece serviços de backend e API na porta `http://localhost:3001`. Construído a partir do diretório `backend_service`, este serviço interage com o RabbitMQ, PostgreSQL e Redis, sendo essencial para o funcionamento do sistema.

- **Prometheus**: Sistema de monitoramento e alerta configurado para coletar métricas de todos os serviços do sistema, acessível em `http://localhost:9090`.

- **Grafana**: Para visualização de dashboards baseados nas métricas coletadas pelo Prometheus, disponível em `http://localhost:3000`. Dependente do Prometheus para dados de métricas.

- **cAdvisor**: Fornece análise de desempenho e monitoramento de recursos dos contêineres Docker, disponível em `http://localhost:8080`.

### Infraestrutura de Suporte

- **PostgreSQL**: Banco de dados relacional utilizado pelo backend e pelo serviço de raspagem de dados. Configurado para iniciar com credenciais padrão, acessível na porta `5432`.

- **RabbitMQ**: Sistema de mensageria para comunicação assíncrona entre diferentes partes do sistema, acessível na porta `5672`.

- **Redis**: Utilizado como sistema de cache pelo serviço de backend, disponível na porta `6379`.

### Monitoramento e Alertas

O sistema de monitoramento é composto pelo Prometheus para coleta de métricas, pelo Grafana para visualização dessas métricas em dashboards intuitivos e pelo cAdvisor para monitoramento específico dos contêineres Docker. Juntos, esses serviços fornecem uma visão abrangente do desempenho e saúde do seu sistema.

Para iniciar todos esses serviços, navegue até o diretório do projeto onde o arquivo `docker-compose.yaml` está localizado e execute:

```sh
docker-compose up
```

## Monitoramento e Alertas

O projeto utiliza cAdvisor para monitoramento de contêineres, Prometheus para coleta de métricas e alertas, e Grafana para visualização:

- **cAdvisor**: Fornece estatísticas de uso de recursos e performance dos contêineres em tempo real.
- **Prometheus**: Configurado para coletar métricas do cAdvisor e dos serviços, possibilitando a configuração de alertas para qualquer métrica.
- **Grafana**: Conecta-se ao Prometheus, permitindo a criação de dashboards personalizados para visualizar as métricas coletadas.

Para configurar alertas, utilize o Prometheus para definir regras de alerta baseadas nas métricas de interesse e integre com um sistema de notificações como o Alertmanager.

## Dependências

Este projeto é construído com tecnologias modernas, incluindo:

- **Backend**: Node.js, Express, PostgreSQL, Redis, RabbitMQ.
- **Frontend**: React, Chakra UI, Axios.
- **Serviço de Raspagem**: Python, Scrapy, psycopg2-binary.
- **Monitoramento**: cAdvisor, Prometheus, Grafana.
-
