```bash
# get manifest
doctl registry kubernetes-manifest

# 
doctl registry kubernetes-manifest

# create secret resource for digital ocean container registry
doctl registry kubernetes-manifest | kubectl apply -f -

# make k8s use the secret when pulling images from the registry
kubectl patch serviceaccount default -p '{"imagePullSecrets": [{"name": "registry-bullcr"}]}'


# show service account settings as yaml
kubectl get serviceaccount default -o yaml

# show my nodes
kubectl get nodes -o wide 

# show my namespaces
kubectl get namespaces

# create deployment
kubectl create deployment peternetes-web --image=registry.digitalocean.com/bullcr/peternetes-web

# get replicas
kubectl get rs  

# get pods
kubectl get pods # --all-namespaces to check sys and other pods

# scale replicas
kubectl scale deployment/peternetes-web --replicas=2

# get pod info
kubectl describe pod peternetes-web-5dcc96c4dc-n52sq

# remove deployment
kubectl delete deployment "<name>"

# create load balancer
kubectl expose deployment peternetes-web --type=LoadBalancer --port=80 --target-port=3000

# statej >> yamls
kubectl get deployment peternetes-web -o yaml >> ./k8s/deployment.yaml
kubectl get service peternetes-web -o yaml >> ./k8s/service.yaml

# delete and reapply
kubectl delete deployment peternetes-web
kubectl get deployments
kubectl apply -f ./k8s/deployment.yaml

# check rollouts
kubectl rollout history deployment/peternetes-web

# force update pull
kubectl rollout restart deployment peternetes-web

# status of rollout
kubectl rollout status deployment peternetes-web

```
