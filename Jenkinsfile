pipeline{

    agent any 

    environment{
        DOCKERIMG= "maheshg98/frontend:${BUILD_NUMBER}"
        PROJECT= "trivia"
        
    }

    stages{
       
        stage('build and Push'){
            steps{
                withCredentials([usernamePassword(
                    credentialsId: 'docker-cred',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {

                    sh '''
                    echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin

                    docker build -t ${DOCKERIMG} .
                    docker push ${DOCKERIMG}
                    '''
                }

              
            }

        }
       stage('deployment-via-compose'){
    steps{
        sh '''
            docker compose -p ${PROJECT} --env-file /opt/secretes/.env up -d --no-deps --build frontend
        '''
    }
}
    }
}
