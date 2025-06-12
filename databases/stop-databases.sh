#!/bin/bash

set -e

echo "🛑 Stopping Neo4j service..."
docker-compose -f ./neo4j/docker-compose.yml down

echo "🛑 Stopping Milvus services..."
docker-compose -f ./milvus/docker-compose.yml down

echo "🛑 Stopping PostgreSQL services..."
docker-compose -f ./postgres/docker-compose.yml down

echo ""
echo "✅ All database services have been stopped."

