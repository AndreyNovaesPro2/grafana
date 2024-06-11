from diagrams import Diagram, Cluster
from diagrams.onprem.client import Users
from diagrams.onprem.compute import Server
from diagrams.onprem.database import PostgreSQL
from diagrams.onprem.inmemory import Redis
from diagrams.onprem.queue import RabbitMQ
from diagrams.onprem.monitoring import Prometheus, Grafana
from diagrams.onprem.network import Nginx
from diagrams.onprem.container import Docker
from diagrams.programming.language import Python, NodeJS

with Diagram("Advanced Web Service Architecture with Docker Compose", show=False, direction="TB"):
    with Cluster("Docker Compose Services"):
        with Cluster("Frontend Service"):
            frontend = Docker("frontend")
            users = Users("users")
            users >> frontend

        with Cluster("Load Balancer"):
            nginx = Nginx("nginx")
            frontend >> nginx

        with Cluster("Backend Services"):
            backend1 = Docker("backend1")
            backend2 = Docker("backend2")
            nginx >> backend1
            nginx >> backend2

            with Cluster("Cache Layer"):
                redis = Redis("redis")
                backend1 >> redis
                backend2 >> redis

            with Cluster("Database Layer"):
                postgres = PostgreSQL("postgres")
                backend1 >> postgres
                backend2 >> postgres

        with Cluster("Scraper Service"):
            scraper = Docker("scraper")
            scraper >> postgres

        with Cluster("Messaging"):
            rabbitmq = RabbitMQ("rabbitmq")
            backend1 >> rabbitmq
            backend2 >> rabbitmq

        with Cluster("Monitoring"):
            node_exporter = Docker("node_exporter")
            prometheus = Prometheus("prometheus")
            grafana = Grafana("grafana")
            cadvisor = Docker("cadvisor")
            
            node_exporter >> prometheus
            cadvisor >> prometheus
            prometheus >> grafana
            backend1 >> prometheus
            backend2 >> prometheus
            scraper >> prometheus
            nginx >> prometheus

diagram_path = "./advanced_web_service_architecture_docker_compose.png"
Diagram("Advanced Web Service Architecture with Docker Compose", show=False, direction="TB").save(diagram_path)
