pipeline{

    agent any 

    environment{
        DOCKERIMG= "maheshg98/Frontend:${BUILD_NUMBER}"
    }

    stages{

        stage('code-checkout'){

            steps{

                git branch: 'master',
                url: 'https://github.com/gavademahesh98/Trivia_Frontend_With_Compose.git'
                
            }
        }

        stage('build and Push'){
            steps{

                sh """ 
                docker build -t ${DOCKERIMAGE}
                docker login -u maheshg98 -p Mahesh@8798
                docker push ${DOCKERIMG}
                """
            }

        }
        stage('deployment-via-compose'){
            sh  """
                docker compose --env-file /opt/secretes/.env down || true
                docker compose --env-file /opt/secretes/.env up -d
                
            """
        }
    }
}