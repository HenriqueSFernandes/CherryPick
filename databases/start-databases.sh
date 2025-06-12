#!/bin/bash

set -e

echo "🔄 Starting PostgreSQL services..."
docker-compose -f ./postgres/docker-compose.yml up -d

echo "🔄 Starting Milvus services..."
docker-compose -f ./milvus/docker-compose.yml up -d

echo "🔄 Starting Neo4j service..."
docker-compose -f ./neo4j/docker-compose.yml up -d

echo ""
echo "✅ All database services started successfully!"
echo ""
echo "📦 Services available:"
echo "  - PostgreSQL:           http://localhost:5432"
echo "  - pgAdmin:              http://localhost:8080"
echo "  - Milvus (gRPC):        http://localhost:19530"
echo "  - Attu (Milvus UI):     http://localhost:8000"
echo "  - Neo4j Browser:        http://localhost:7474"
echo "  - Neo4j Bolt Protocol:  bolt://localhost:7687"

