1. Install cubctl;
	$ snap install kubectl --classic
	check
	$ kubectl version --client

3. install minikube
	$ curl -LO https://github.com/kubernetes/minikube/releases/latest/download/minikube-linux-amd64
	$ sudo install minikube-linux-amd64 /usr/local/bin/minikube && rm minikube-linux-amd64
	check it
	$ minikube version

// ====================================


1. Start minikube
	$ minikube start
	check
	$ docker ps
	$ minikube status
	$ kubectl version --- to see version client and server

2. Info about cluster
	$ kubectl cluster-info

3. Check minicube:
	$ minikube kubectl  --- to see all available commands
	$ minikube kubectl version --- check version
	$ minikube kubectl cluster-info
	or 
	$ kubectl cluster-info

4. Check:
	$ kubectl get pods --- check pods
	$ kubectl get nodes --- check nodes
	$ kubectl get namespace
	$ kubectl get pods --namespace=kube-system

5. Check node ip:
	$ minikube ip
	check received ip
	$ ping 192.168.49.2

6. Get into node:
	$ minikube ssh
	then
		$ docker ps --- to check internal docker container

// =================================

	Create pod inside clister.

1. Create pod:
	$ kubectl run my-nginx-pod --image=nginx 
	then check it
	$ kubectl get pods
	$ kubectl describe pod my-nginx-pod
	ping ip (it won't work because we trying to access it from localmachine)
	$ ping 10.244.0.3
	
	go to minikube ssh and check it from inside
	$ minikube ssh
		then
		$ ping 10.244.0.3  --- it works. Within node our pod available
		or 
		$ curl 10.244.0.3 
		$ docker ps | grep nginx  --- check running container
		
			get into runing container
			$ docker exec -it 4babdeb48567 sh
			then chek
				# hostname    --- container name
				# hostname I  --- check IP container

2. Check pods:
	$ kubectl get pods -o wide

3. Delete pod:
	$ kubectl delete pod my-nginx-pod  --- it will delete pod and container
	check
	$ kubectl get pods

// ================================

	Create deployment.

1. Create deploy:
	$ kubectl create deployment my-nginx-deploy --image=nginx
	check 
	$ kubectl get pods
	$ kubectl get deploy
	$ kubectl describe deploy my-nginx-deploy  --- check detail

2. Scale:
	 increse replica:
	$ kubectl scale deploy my-nginx-deploy --replicas=5
	check 
	$ kubectl get pods

	decrease replice
	$ kubectl scale deploy my-nginx-deploy --replicas=3
	check 
	$ kubectl get pods -o wide
	$ kubectl describe deploy my-nginx-deploy  --- check detail

// ====================================

	Create   ClusterIp.
	-------------------

1. Check:
	$ kubectl get services	--- get all services
	$ kubectl describe service kubernetes --- get info certain service

2. Crete:
	$ kubectl expose deploy my-nginx-deploy --port=8080 --target-port=80
	check
	$ kubectl get services
	$ kubectl describe service my-nginx-deploy
		go to pod:
		$ minikube ssh
		$$ curl 10.102.93.186:8080  --- check ip 

3. Delete:
	$ kubectl get services	--- get all services
	$ kubectl delete service my-nginx-deploy  --- delete
	check again
	$ kubectl get services


// ========================================

	Create NodePort.
	----------------

1. Create:
	$ kubectl expose deploy my-nginx-deploy --type=NodePort --port=8888 --target-port=80
	check
	$ kubectl get services
	$ kubectl describe service my-nginx-deploy

2. Connect to server:
	$ minikube ip  --- in console will be ip
	then port - NodePort from command:
	$ kubectl describe service my-nginx-deploy
	$ curl 192.168.49.2:32111  --- or in browser
	
	if it not work - then create tunel
	$ minikube service my-nginx-deploy --url   --- it will give you complete link

3. Delete:
	$ kubectl get services  --- check
	$ kubectl delete service my-nginx-deploy   --- delete our service
	check again
	$ kubectl get services

// ====================================

	Create   LoadBalancer.
	----------------------

1. Create tunel. In separat terminal tab:
	Run command and do not close the tab - keep it
	$ minikube tunnel --- to connect from external ip to inside kubernetes

2. Create deploy LoadBalancer:
	$ kubectl expose deploy my-nginx-deploy --type=LoadBalancer --port=9999 --target-port=80
	then in first tunnel tab we can see starting tunnel 
	check	
	$ kubectl get services 

3. Delete:
	$ kubectl delete service my-nginx-deploy
	$ kubectl delete deploy my-nginx-deploy
	check
	$ kubectl get pods
	$ kubectl get deploy
	$ kubectl get service



// ====================================


