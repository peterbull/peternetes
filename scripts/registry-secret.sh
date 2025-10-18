doctl registry kubernetes-manifest | kubectl apply -f - 
kubectl patch serviceaccount default -p '{"imagePullSecrets": [{"name": "registry-bullcr"}]}'
